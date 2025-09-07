import "../../static/css/tw.css";
import { NavBar } from "@/components/NavBar.tsx";
import React, { useState } from "react";
import { mockApi } from "@/services/mockApi";

export default function Reservations() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    date: "",
    time: "",
    guests: 2,
    notes: "",
  });
  const [status, setStatus] = useState<null | { type: "ok" | "error"; message: string }>(null);
  const [submitting, setSubmitting] = useState(false);

  async function onSubmit(e: React.FormEvent) {
    e.preventDefault();
    setStatus(null);
    setSubmitting(true);
    try {
      const data = await mockApi.createReservation({
        name: form.name,
        email: form.email,
        date: form.date,
        time: form.time,
        guests: form.guests,
        notes: form.notes || undefined,
      });
      setStatus({ type: "ok", message: `Reserved ${data.date} at ${data.time}. See you soon!` });
      // Clear form after successful reservation
      setForm({
        name: "",
        email: "",
        date: form.date, // Keep the date
        time: "",
        guests: 2,
        notes: "",
      });
    } catch (err: any) {
      setStatus({ type: "error", message: err.message || "Error creating reservation" });
    } finally {
      setSubmitting(false);
    }
  }

  const inputBase = "w-full bg-black/30 text-white placeholder-gray-400 border border-white/10 rounded-md p-3 focus:outline-none focus:ring-2 focus:ring-white/30";

  return (
    <div className="w-dvw min-h-dvh bg-black text-white font-serif antialiased overflow-x-hidden">
      <NavBar />

      {/* Spacer for fixed navbar */}
      <div className="h-16" />

      {/* Header */}
      <section className="relative w-full py-12 px-6 lg:px-24">
        <img src="/static/images/border.png" alt="border" className="w-150 mx-auto pb-8 opacity-90" />
        <div className="pointer-events-none select-none absolute inset-x-0 -top-6 flex justify-center z-0 opacity-70">
          <img src="/static/images/thyme.png" alt="decorative thyme" className="h-auto w-[800px] max-w-[90vw] rotate-180" />
        </div>
        <div className="relative z-10 text-center">
          <h1 className="text-4xl lg:text-5xl font-light tracking-wide">Reservations</h1>
          <p className="text-lg text-gray-300 mt-4 max-w-2xl mx-auto">
            Reserve your table and indulge in an unforgettable evening.
          </p>
        </div>
      </section>

      {/* Form Card */}
      <section className="relative w-full py-6 px-6 lg:px-24">
        <div className="max-w-3xl mx-auto rounded-2xl bg-white/5 backdrop-blur-lg border border-white/10 p-8 shadow-xl">
          <form className="grid gap-5 text-base" onSubmit={onSubmit}>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              <input
                type="text"
                placeholder="Full Name"
                className={inputBase}
                required
                value={form.name}
                onChange={(e) => setForm({ ...form, name: e.target.value })}
              />
              <input
                type="email"
                placeholder="Email Address"
                className={inputBase}
                required
                value={form.email}
                onChange={(e) => setForm({ ...form, email: e.target.value })}
              />
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
              <input
                type="date"
                className={inputBase}
                required
                value={form.date}
                onChange={(e) => setForm({ ...form, date: e.target.value })}
              />
              <input
                type="time"
                className={inputBase}
                required
                step={3600}
                min="10:00"
                max="23:00"
                value={form.time}
                onChange={(e) => setForm({ ...form, time: e.target.value })}
              />
              <input
                type="number"
                min={1}
                placeholder="Guests"
                className={inputBase}
                required
                value={form.guests}
                onChange={(e) => setForm({ ...form, guests: Number(e.target.value) })}
              />
            </div>
            <textarea
              placeholder="Special Requests"
              className={`${inputBase} min-h-32`}
              value={form.notes}
              onChange={(e) => setForm({ ...form, notes: e.target.value })}
            />
            {status && (
              <div className={
                status.type === "ok"
                  ? "text-emerald-300 text-sm"
                  : "text-red-300 text-sm"
              }>
                {status.message}
              </div>
            )}
            <button
              type="submit"
              disabled={submitting}
              className="inline-flex items-center justify-center px-6 py-3 rounded-md border border-white/20 text-white hover:bg-white/10 transition-colors duration-200 disabled:opacity-50"
            >
              {submitting ? "Booking..." : "Book Table"}
            </button>
          </form>
        </div>
        <div className="mt-16">
          <img src="/static/images/border.png" alt="border" className="w-150 mx-auto pt-6 opacity-90" />
        </div>
        <div className="pointer-events-none select-none relative flex justify-center -mb-10 opacity-80">
          <img src="/static/images/oregano.png" alt="decorative oregano" className="h-auto w-[800px] max-w-[90vw]" />
        </div>
      </section>
    </div>
  );
}
