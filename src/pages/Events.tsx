import "../../static/css/tw.css";
import { NavBar } from "@/components/NavBar.tsx";
import React, { useState, useEffect } from "react";
import { mockApi, Event } from "@/services/mockApi";

export const Events = () => {
  const [events, setEvents] = useState<Event[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function loadEvents() {
      try {
        const data = await mockApi.getEvents();
        setEvents(data);
      } catch (error) {
        console.error('Failed to load events:', error);
      } finally {
        setLoading(false);
      }
    }
    loadEvents();
  }, []);

  const handleRSVP = async (eventId: number) => {
    const name = window.prompt("Your name?")?.trim();
    if (!name) return;
    const email = window.prompt("Your email?")?.trim();
    if (!email) return;
    const guestsStr = window.prompt("Number of guests?")?.trim();
    const guests = guestsStr ? parseInt(guestsStr, 10) : 1;

    if (isNaN(guests) || guests < 1) {
      alert("Please enter a valid number of guests.");
      return;
    }

    try {
      await mockApi.rsvpEvent(eventId, { name, email, guests });
      alert("RSVP received. Thank you!");
      // Refresh events to update RSVP count
      const updatedEvents = await mockApi.getEvents();
      setEvents(updatedEvents);
    } catch (error) {
      alert("Failed to RSVP. Please try again.");
    }
  };

  const formatEventDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', {
      month: 'long',
      day: 'numeric',
      year: 'numeric',
      hour: 'numeric',
      minute: '2-digit',
      hour12: true
    });
  };

  return (
    <div className="w-dvw min-h-dvh bg-black text-white font-serif antialiased overflow-x-hidden">
      <NavBar />
      <div className="h-16" />

      {/* Header */}
      <section className="relative w-full py-12 px-6 lg:px-24">
        <img src="/static/images/border.png" alt="border" className="w-150 mx-auto pb-8 opacity-90" />
        <div className="pointer-events-none select-none absolute inset-x-0 -top-6 flex justify-center z-0 opacity-70">
          <img src="/static/images/thyme.png" alt="decorative thyme" className="h-auto w-[800px] max-w-[90vw] rotate-180" />
        </div>
        <div className="relative z-10 text-center">
          <h1 className="text-4xl lg:text-5xl font-light tracking-wide">Upcoming Events</h1>
          <p className="text-lg text-gray-300 mt-4 max-w-2xl mx-auto">
            Join us for curated evenings of fine food, wine, and conversation.
          </p>
        </div>
      </section>

      {/* Event Cards */}
      <section className="relative w-full py-6 px-6 lg:px-24">
        {loading ? (
          <div className="text-center py-12">
            <p className="text-gray-300">Loading events...</p>
          </div>
        ) : (
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {events.map((event) => (
              <article key={event.id} className="group rounded-2xl overflow-hidden bg-white/5 backdrop-blur-lg border border-white/10 hover:border-white/20 transition-all duration-300 p-6">
                <h3 className="text-2xl font-light mb-1">{event.title}</h3>
                <p className="text-gray-300 mb-4">{formatEventDate(event.start_at)}</p>
                {event.description && (
                  <p className="text-gray-300 mb-6">{event.description}</p>
                )}
                <div className="flex items-center justify-between">
                  <span className="text-sm text-gray-400">{event.rsvp_count} attending</span>
                  <button
                    className="inline-flex items-center justify-center px-5 py-2.5 rounded-md border border-white/20 text-white hover:bg-white/10 transition-colors duration-200"
                    onClick={() => handleRSVP(event.id)}
                  >
                    Reserve Now
                  </button>
                </div>
              </article>
            ))}
          </div>
        )}

        <div className="mt-16">
          <img src="/static/images/border.png" alt="border" className="w-150 mx-auto pt-6 opacity-90" />
        </div>
        <div className="pointer-events-none select-none relative flex justify-center -mb-10 opacity-80">
          <img src="/static/images/oregano.png" alt="decorative oregano" className="h-auto w-[800px] max-w-[90vw]" />
        </div>
      </section>
    </div>
  );
};