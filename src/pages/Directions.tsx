import "static/css/tw.css";
import { Link } from "react-router-dom";
import { NavBar } from "@/components/NavBar.tsx";
import { Map } from "@/components/Map.tsx";

export default function Directions() {
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
          <h1 className="text-4xl lg:text-5xl font-light tracking-wide">Find Us</h1>
          <p className="text-lg text-gray-300 mt-4 max-w-2xl mx-auto">
            Conveniently located in the heart of the city — plan your visit with ease.
          </p>
        </div>
      </section>

      {/* Map & Details */}
      <section className="relative w-full py-6 px-6 lg:px-24">
        <div className="w-full rounded-2xl overflow-hidden bg-white/5 backdrop-blur-lg border border-white/10 shadow-xl">
          <div className="w-full h-[500px]">
            <Map />
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start mt-10">
          <div>
            <h2 className="text-2xl font-light mb-4">Our Location</h2>
            <p className="text-gray-300 leading-relaxed">
              123 Roma Street <br />
              New York, NY 10001 <br />
              United States
            </p>
            <p className="mt-4 text-gray-300">
              Easily accessible by public transit, and valet parking is available
              at our front entrance.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4">
            <a
              href="https://www.google.com/maps/dir/?api=1&destination=123+Roma+Street+New+York+NY"
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 inline-flex items-center justify-center px-6 py-3 rounded-md border border-white/20 text-white hover:bg-white/10 transition-colors duration-200"
            >
              Get Directions
            </a>
            <Link
              to="/reservations"
              className="flex-1 inline-flex items-center justify-center px-6 py-3 rounded-md border border-white/20 text-white hover:bg-white/10 transition-colors duration-200"
            >
              Make a Reservation
            </Link>
          </div>
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
