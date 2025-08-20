import "static/css/tw.css";
import { NavBar } from "@/components/NavBar.tsx";

export const Events = () => (
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
      <div className="grid gap-8 md:grid-cols-2">
        <article className="group rounded-2xl overflow-hidden bg-white/5 backdrop-blur-lg border border-white/10 hover:border-white/20 transition-all duration-300 p-6">
          <h3 className="text-2xl font-light mb-1">Wine Tasting Evening</h3>
          <p className="text-gray-300 mb-4">August 30, 2025 · 7:00 PM</p>
          <p className="text-gray-300 mb-6">An exclusive tasting featuring Italian vintages paired with refined hors d'oeuvres.</p>
          <button
            className="inline-flex items-center justify-center px-5 py-2.5 rounded-md border border-white/20 text-white hover:bg-white/10 transition-colors duration-200"
            onClick={async () => {
              const name = window.prompt("Your name?")?.trim();
              if (!name) return;
              const email = window.prompt("Your email?")?.trim();
              if (!email) return;
              const guestsStr = window.prompt("Guests (number)?")?.trim();
              const guests = guestsStr ? parseInt(guestsStr, 10) : 1;
              try {
                // For demo purposes, assume this event has id 1; in a real app you would fetch real ids.
                await fetch("/api/events/1/rsvp", {
                  method: "POST",
                  headers: { "Content-Type": "application/json" },
                  body: JSON.stringify({ name, email, guests }),
                });
                alert("RSVP received. Thank you!");
              } catch (e) {
                alert("Failed to RSVP.");
              }
            }}
          >
            Reserve Now
          </button>
        </article>

        <article className="group rounded-2xl overflow-hidden bg-white/5 backdrop-blur-lg border border-white/10 hover:border-white/20 transition-all duration-300 p-6">
          <h3 className="text-2xl font-light mb-1">Chef’s Table Experience</h3>
          <p className="text-gray-300 mb-4">September 15, 2025 · 8:00 PM</p>
          <p className="text-gray-300 mb-6">A limited-seating, multi-course dinner featuring seasonal ingredients.</p>
          <button
            className="inline-flex items-center justify-center px-5 py-2.5 rounded-md border border-white/20 text-white hover:bg-white/10 transition-colors duration-200"
            onClick={async () => {
              const name = window.prompt("Your name?")?.trim();
              if (!name) return;
              const email = window.prompt("Your email?")?.trim();
              if (!email) return;
              const guestsStr = window.prompt("Guests (number)?")?.trim();
              const guests = guestsStr ? parseInt(guestsStr, 10) : 1;
              try {
                await fetch("/api/events/2/rsvp", {
                  method: "POST",
                  headers: { "Content-Type": "application/json" },
                  body: JSON.stringify({ name, email, guests }),
                });
                alert("RSVP received. Thank you!");
              } catch (e) {
                alert("Failed to RSVP.");
              }
            }}
          >
            Reserve Now
          </button>
        </article>
      </div>

      <div className="mt-16">
        <img src="/static/images/border.png" alt="border" className="w-150 mx-auto pt-6 opacity-90" />
      </div>
      <div className="pointer-events-none select-none relative flex justify-center -mb-10 opacity-80">
        <img src="/static/images/oregano.png" alt="decorative oregano" className="h-auto w-[800px] max-w-[90vw]" />
      </div>
    </section>
  </div>
)