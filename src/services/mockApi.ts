// Mock API service to replace Flask backend
export interface Reservation {
  id: number;
  name: string;
  email: string;
  date: string;
  time: string;
  guests: number;
  notes?: string;
  created_at: string;
}

export interface Event {
  id: number;
  title: string;
  description?: string;
  start_at: string;
  rsvp_count: number;
}

export interface EventRSVP {
  id: number;
  event_id: number;
  name: string;
  email: string;
  guests: number;
}

// Mock data storage (in a real app, this would be replaced with a proper backend)
let mockReservations: Reservation[] = [];
let mockEvents: Event[] = [
  {
    id: 1,
    title: "Wine Tasting Evening",
    description:
      "Join us for an exclusive evening featuring Italian vintages paired with artisanal hors d'oeuvres.",
    start_at: "2025-02-15T19:00:00",
    rsvp_count: 12,
  },
  {
    id: 2,
    title: "Chef's Table Experience",
    description:
      "An intimate dining experience featuring our seasonal multi-course tasting menu.",
    start_at: "2025-02-22T20:00:00",
    rsvp_count: 8,
  },
  {
    id: 3,
    title: "Valentine's Day Special",
    description:
      "A romantic evening with specially curated dishes and live jazz music.",
    start_at: "2025-02-14T18:30:00",
    rsvp_count: 24,
  },
];
let mockEventRSVPs: EventRSVP[] = [];

// Helper functions
function generateId(): number {
  return Math.floor(Math.random() * 1000000);
}

function isValidTimeSlot(time: string): boolean {
  const hour = parseInt(time.split(":")[0]);
  return hour >= 10 && hour <= 23;
}

function getAvailableSlots(date: string): string[] {
  const bookedTimes = mockReservations
    .filter((r) => r.date === date)
    .map((r) => r.time);

  const allSlots = [];
  for (let hour = 10; hour <= 23; hour++) {
    allSlots.push(`${hour.toString().padStart(2, "0")}:00`);
  }

  return allSlots.filter((slot) => !bookedTimes.includes(slot));
}

// API functions
export const mockApi = {
  // Reservations
  async getReservations(date: string) {
    await new Promise((resolve) => setTimeout(resolve, 300)); // Simulate network delay

    const reservations = mockReservations.filter((r) => r.date === date);
    const booked = reservations.map((r) => r.time);
    const available = getAvailableSlots(date);

    return {
      date,
      booked,
      available,
      reservations,
    };
  },

  async createReservation(data: Omit<Reservation, "id" | "created_at">) {
    await new Promise((resolve) => setTimeout(resolve, 500)); // Simulate network delay

    if (!isValidTimeSlot(data.time)) {
      throw new Error(
        "Reservations allowed only on the hour between 10:00 and 23:00"
      );
    }

    // Check if slot is already booked
    const existing = mockReservations.find(
      (r) => r.date === data.date && r.time === data.time
    );
    if (existing) {
      throw new Error("This time slot is already taken");
    }

    const reservation: Reservation = {
      ...data,
      id: generateId(),
      created_at: new Date().toISOString(),
    };

    mockReservations.push(reservation);
    return reservation;
  },

  // Events
  async getEvents() {
    await new Promise((resolve) => setTimeout(resolve, 200)); // Simulate network delay
    return mockEvents;
  },

  async createEvent(data: Omit<Event, "id" | "rsvp_count">) {
    await new Promise((resolve) => setTimeout(resolve, 400)); // Simulate network delay

    const event: Event = {
      ...data,
      id: generateId(),
      rsvp_count: 0,
    };

    mockEvents.push(event);
    return event;
  },

  async rsvpEvent(eventId: number, data: Omit<EventRSVP, "id" | "event_id">) {
    await new Promise((resolve) => setTimeout(resolve, 300)); // Simulate network delay

    const event = mockEvents.find((e) => e.id === eventId);
    if (!event) {
      throw new Error("Event not found");
    }

    const rsvp: EventRSVP = {
      ...data,
      id: generateId(),
      event_id: eventId,
    };

    mockEventRSVPs.push(rsvp);
    event.rsvp_count += data.guests;

    return { ok: true, event_id: eventId, rsvp_id: rsvp.id };
  },
};
