from __future__ import annotations
import os
from datetime import datetime, date, time, timedelta
from typing import List, Optional

from flask import Flask, render_template, send_from_directory, request, jsonify
from flask_cors import CORS
from sqlalchemy import create_engine, String, Integer, Date, Time, DateTime, UniqueConstraint, ForeignKey, select
from sqlalchemy.orm import DeclarativeBase, Mapped, mapped_column, relationship, sessionmaker, Session

GOOGLE_MAPS_API_KEY = os.getenv("GOOGLE_MAPS_API_KEY") or ""
GOOGLE_MAPS_MAP_ID = os.getenv("GOOGLE_MAPS_MAP_ID") or ""
DATABASE_URL = os.getenv("DATABASE_URL") or os.getenv("POSTGRES_URL") or os.getenv("PG_URL")

app = Flask(__name__, static_folder='static', template_folder='templates')
CORS(app, resources={r"/api/*": {"origins": "*"}})

# ---------- SQLAlchemy setup ----------
class Base(DeclarativeBase):
    pass

engine = None
SessionLocal: sessionmaker[Session] | None = None

if DATABASE_URL:
    # SQLAlchemy accepts postgres+psycopg
    if DATABASE_URL.startswith("postgres://"):
        DATABASE_URL = DATABASE_URL.replace("postgres://", "postgresql+psycopg://", 1)
    elif DATABASE_URL.startswith("postgresql://"):
        DATABASE_URL = DATABASE_URL.replace("postgresql://", "postgresql+psycopg://", 1)

    engine = create_engine(DATABASE_URL, pool_pre_ping=True)
    SessionLocal = sessionmaker(bind=engine, autoflush=False, autocommit=False, expire_on_commit=False)

# ---------- Models ----------
class Reservation(Base):
    __tablename__ = "reservations"
    id: Mapped[int] = mapped_column(Integer, primary_key=True)
    name: Mapped[str] = mapped_column(String(200))
    email: Mapped[str] = mapped_column(String(320))
    reservation_date: Mapped[date] = mapped_column(Date, index=True)
    reservation_time: Mapped[time] = mapped_column(Time, index=True)
    guests: Mapped[int] = mapped_column(Integer)
    notes: Mapped[Optional[str]] = mapped_column(String(2000), nullable=True)
    created_at: Mapped[datetime] = mapped_column(DateTime, default=datetime.utcnow)

    __table_args__ = (
        UniqueConstraint("reservation_date", "reservation_time", name="uq_date_time"),
    )

class Event(Base):
    __tablename__ = "events"
    id: Mapped[int] = mapped_column(Integer, primary_key=True)
    title: Mapped[str] = mapped_column(String(255), index=True)
    description: Mapped[Optional[str]] = mapped_column(String(2000), nullable=True)
    start_at: Mapped[datetime] = mapped_column(DateTime, index=True)
    created_at: Mapped[datetime] = mapped_column(DateTime, default=datetime.utcnow)

    rsvps: Mapped[List[EventRSVP]] = relationship("EventRSVP", back_populates="event", cascade="all, delete-orphan")

class EventRSVP(Base):
    __tablename__ = "event_rsvps"
    id: Mapped[int] = mapped_column(Integer, primary_key=True)
    event_id: Mapped[int] = mapped_column(ForeignKey("events.id", ondelete="CASCADE"), index=True)
    name: Mapped[str] = mapped_column(String(200))
    email: Mapped[str] = mapped_column(String(320))
    guests: Mapped[int] = mapped_column(Integer, default=1)
    created_at: Mapped[datetime] = mapped_column(DateTime, default=datetime.utcnow)

    event: Mapped[Event] = relationship("Event", back_populates="rsvps")

# Create tables on startup (minimal approach without migrations)
if engine is not None:
    Base.metadata.create_all(engine)
    # Optional: seed a couple of demo events to match the UI if table is empty
    try:
        with SessionLocal() as db:
            has_any = db.execute(select(Event).limit(1)).first()
            if not has_any:
                seed_events = [
                    Event(title="Wine Tasting Evening", description="Italian vintages with hors d'oeuvres.", start_at=datetime(2025, 8, 30, 19, 0, 0)),
                    Event(title="Chef’s Table Experience", description="Seasonal multi-course dinner.", start_at=datetime(2025, 9, 15, 20, 0, 0)),
                ]
                db.add_all(seed_events)
                db.commit()
    except Exception:
        # Ignore seeding errors in case DB is read-only or migrations run elsewhere
        pass

# ---------- Helpers ----------
OPEN_HOUR = 10  # 10:00
LAST_START_HOUR = 23  # 23:00 is last slot start so it ends at 24:00
SLOT_MINUTES = 60

def parse_date(value: str) -> date:
    return datetime.strptime(value, "%Y-%m-%d").date()

def parse_time(value: str) -> time:
    # Accept HH:MM
    return datetime.strptime(value, "%H:%M").time()

def is_valid_slot(t: time) -> bool:
    # Must be top of the hour and between 10:00 and 23:00 inclusive
    return (t.minute == 0 and t.second == 0 and t.hour >= OPEN_HOUR and t.hour <= LAST_START_HOUR)

def hourly_slots_for_day() -> List[str]:
    out: List[str] = []
    for h in range(OPEN_HOUR, LAST_START_HOUR + 1):
        out.append(f"{h:02d}:00")
    return out

# ---------- API ----------
@app.route('/api/reservations', methods=['GET', 'POST'])
def reservations_api():
    if SessionLocal is None:
        return jsonify({"error": "Database not configured. Set DATABASE_URL."}), 500

    if request.method == 'GET':
        qdate = request.args.get('date')
        if not qdate:
            return jsonify({"error": "Missing date parameter (YYYY-MM-DD)."}), 400
        try:
            d = parse_date(qdate)
        except Exception:
            return jsonify({"error": "Invalid date format. Use YYYY-MM-DD."}), 400

        with SessionLocal() as db:
            rows = db.execute(
                select(Reservation).where(Reservation.reservation_date == d).order_by(Reservation.reservation_time)
            ).scalars().all()
            booked = [r.reservation_time.strftime('%H:%M') for r in rows]
            slots = hourly_slots_for_day()
            available = [s for s in slots if s not in booked]
            return jsonify({
                "date": qdate,
                "booked": booked,
                "available": available,
                "reservations": [
                    {
                        "id": r.id,
                        "name": r.name,
                        "email": r.email,
                        "time": r.reservation_time.strftime('%H:%M'),
                        "guests": r.guests,
                        "notes": r.notes,
                        "created_at": r.created_at.isoformat()
                    } for r in rows
                ]
            })

    # POST create reservation
    data = request.get_json(silent=True) or {}
    name = (data.get('name') or '').strip()
    email = (data.get('email') or '').strip()
    guests = data.get('guests')
    notes = (data.get('notes') or '').strip() or None
    rdate = data.get('date')
    rtime = data.get('time')

    if not name or not email or not rdate or not rtime or guests is None:
        return jsonify({"error": "Missing required fields: name, email, date, time, guests"}), 400

    try:
        d = parse_date(rdate)
        t = parse_time(rtime)
    except Exception:
        return jsonify({"error": "Invalid date or time format. Use date YYYY-MM-DD and time HH:MM."}), 400

    if not is_valid_slot(t):
        return jsonify({"error": "Reservations allowed only on the hour between 10:00 and 24:00 (last start 23:00)."}), 400

    try:
        guests = int(guests)
        if guests <= 0:
            raise ValueError()
    except Exception:
        return jsonify({"error": "guests must be a positive integer"}), 400

    with SessionLocal() as db:
        # Check if slot already booked
        existing = db.execute(
            select(Reservation).where(
                Reservation.reservation_date == d,
                Reservation.reservation_time == t
            )
        ).scalar_one_or_none()
        if existing:
            return jsonify({"error": "This 1-hour time block is already taken."}), 409

        r = Reservation(
            name=name,
            email=email,
            reservation_date=d,
            reservation_time=t,
            guests=guests,
            notes=notes,
        )
        db.add(r)
        try:
            db.commit()
        except Exception as e:
            db.rollback()
            return jsonify({"error": "Failed to create reservation.", "details": str(e)}), 500

        return jsonify({
            "id": r.id,
            "name": r.name,
            "email": r.email,
            "date": r.reservation_date.isoformat(),
            "time": r.reservation_time.strftime('%H:%M'),
            "guests": r.guests,
            "notes": r.notes,
        }), 201

@app.route('/api/events', methods=['GET', 'POST'])
def events_api():
    if SessionLocal is None:
        return jsonify({"error": "Database not configured. Set DATABASE_URL."}), 500

    if request.method == 'GET':
        with SessionLocal() as db:
            rows = db.execute(select(Event).order_by(Event.start_at)).scalars().all()
            return jsonify([
                {
                    "id": e.id,
                    "title": e.title,
                    "description": e.description,
                    "start_at": e.start_at.isoformat(),
                    "rsvp_count": len(e.rsvps or [])
                } for e in rows
            ])

    # POST create event
    data = request.get_json(silent=True) or {}
    title = (data.get('title') or '').strip()
    description = (data.get('description') or '').strip() or None
    start_at = data.get('start_at')  # ISO datetime string

    if not title or not start_at:
        return jsonify({"error": "Missing required fields: title, start_at (ISO)."}), 400

    try:
        start_dt = datetime.fromisoformat(start_at)
    except Exception:
        return jsonify({"error": "start_at must be ISO 8601 datetime."}), 400

    with SessionLocal() as db:
        ev = Event(title=title, description=description, start_at=start_dt)
        db.add(ev)
        try:
            db.commit()
        except Exception as e:
            db.rollback()
            return jsonify({"error": "Failed to create event.", "details": str(e)}), 500
        return jsonify({"id": ev.id}), 201

@app.route('/api/events/<int:event_id>/rsvp', methods=['POST'])
def rsvp_event(event_id: int):
    if SessionLocal is None:
        return jsonify({"error": "Database not configured. Set DATABASE_URL."}), 500

    data = request.get_json(silent=True) or {}
    name = (data.get('name') or '').strip()
    email = (data.get('email') or '').strip()
    guests = data.get('guests', 1)

    if not name or not email:
        return jsonify({"error": "Missing required fields: name, email."}), 400
    try:
        guests = int(guests)
        if guests <= 0:
            raise ValueError()
    except Exception:
        return jsonify({"error": "guests must be a positive integer"}), 400

    with SessionLocal() as db:
        ev = db.get(Event, event_id)
        if not ev:
            return jsonify({"error": "Event not found"}), 404
        rsvp = EventRSVP(event_id=event_id, name=name, email=email, guests=guests)
        db.add(rsvp)
        try:
            db.commit()
        except Exception as e:
            db.rollback()
            return jsonify({"error": "Failed to RSVP.", "details": str(e)}), 500
        return jsonify({"ok": True, "event_id": event_id, "rsvp_id": rsvp.id}), 201

# ------------- SPA routes -------------
@app.route('/')
def index():
    return render_template(
        'index.html',
        gmaps_api_key=GOOGLE_MAPS_API_KEY,
        gmaps_map_id=GOOGLE_MAPS_MAP_ID
    )

@app.route('/<path:path>')
def catch_all(path):
    # if the path matches a file in /static, serve it
    if os.path.exists(os.path.join(app.static_folder, path)):
        return send_from_directory(app.static_folder, path)

    # otherwise always return index.html so React Router can handle routing
    return render_template(
        'index.html',
        gmaps_api_key=GOOGLE_MAPS_API_KEY,
        gmaps_map_id=GOOGLE_MAPS_MAP_ID
    )

if __name__ == "__main__":
    app.config['TEMPLATES_AUTO_RELOAD'] = True
    # Use 0.0.0.0 so Railway can expose the correct port
    app.run(host="0.0.0.0", port=int(os.environ.get("PORT", 5000)))
