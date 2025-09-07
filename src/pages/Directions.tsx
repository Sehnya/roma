import "../../static/css/tw.css";
import { Link } from "react-router-dom";
import { NavBar } from "@/components/NavBar.tsx";
import { Map } from "@/components/Map.tsx";

export default function Directions() {
  return (
    <div className="w-dvw min-h-dvh bg-black text-white font-serif antialiased overflow-x-hidden">
      <NavBar />
      <div className="h-16" />

      {/* Header */}
      <section className="relative w-full py-12 sm:py-16 lg:py-20 px-4 sm:px-6 lg:px-24">
        <img src="/static/images/border.png" alt="decorative border" className="w-full max-w-md mx-auto pb-8 opacity-90" />
        <div className="pointer-events-none select-none absolute inset-x-0 -top-6 flex justify-center z-0 opacity-70">
          <img src="/static/images/thyme.png" alt="decorative thyme" className="h-auto w-[600px] sm:w-[800px] max-w-[90vw] rotate-180" />
        </div>
        <div className="relative z-10 text-center max-w-4xl mx-auto">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-light tracking-wide mb-6">Visit Roma</h1>
          <p className="text-base sm:text-lg text-gray-300 leading-relaxed max-w-2xl mx-auto">
            Conveniently located in the heart of Manhattan's luxury district. Experience fine dining in an elegant setting
            with easy access to the city's finest attractions.
          </p>
        </div>
      </section>

      {/* Map & Details */}
      <section className="relative w-full py-6 px-4 sm:px-6 lg:px-24">
        <div className="max-w-6xl mx-auto">
          <div className="w-full rounded-2xl overflow-hidden bg-white/5 backdrop-blur-lg border border-white/10 shadow-xl mb-12">
            <div className="w-full h-[400px] sm:h-[500px] lg:h-[600px]">
              <Map />
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-12">
            {/* Address & Contact */}
            <div className="lg:col-span-2 space-y-8">
              <div>
                <h2 className="text-2xl sm:text-3xl font-light mb-4">Our Location</h2>
                <div className="text-lg text-gray-300 space-y-2">
                  <p>123 Luxury Avenue</p>
                  <p>Downtown District</p>
                  <p>New York, NY 10001</p>
                </div>
              </div>

              <div>
                <h3 className="text-xl font-light mb-3">Contact Information</h3>
                <div className="text-base text-gray-300 space-y-2">
                  <p>RESERVATIONS: <span className="text-white">(555) 123-ROMA</span></p>
                  <p>EMAIL: <span className="text-white">reservations@roma-restaurant.com</span></p>
                </div>
              </div>

              <div>
                <h3 className="text-xl font-light mb-3">Hours of Operation</h3>
                <div className="text-base text-gray-300 space-y-1">
                  <p>Tuesday - Thursday: 5:00 PM - 10:00 PM</p>
                  <p>Friday - Saturday: 5:00 PM - 11:00 PM</p>
                  <p>Sunday: 5:00 PM - 9:00 PM</p>
                  <p className="text-gray-400 italic">Closed Mondays</p>
                </div>
              </div>
            </div>

            {/* Transportation & Parking */}
            <div className="space-y-6">
              <div>
                <h3 className="text-xl font-light mb-3">Transportation</h3>
                <div className="text-sm text-gray-300 space-y-2">
                  <p><strong>Subway:</strong> 4, 5, 6 to Union Square</p>
                  <p><strong>Bus:</strong> M14, M103 nearby</p>
                  <p><strong>Taxi/Uber:</strong> Drop-off at main entrance</p>
                </div>
              </div>

              <div>
                <h3 className="text-xl font-light mb-3">Parking</h3>
                <div className="text-sm text-gray-300 space-y-2">
                  <p>Complimentary valet service available</p>
                  <p>Public parking garage 2 blocks east</p>
                  <p>Street parking limited</p>
                </div>
              </div>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 mt-12 justify-center">
            <a
              href="https://www.google.com/maps/dir/?api=1&destination=123+Luxury+Avenue,+New+York,+NY+10001"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center bg-white/10 backdrop-blur-lg border border-white/30 text-white font-serif font-light px-8 py-3 rounded-md hover:bg-white/20 transition-all duration-300"
            >
              Get Directions
            </a>
            <Link
              to="/reservations"
              className="inline-flex items-center justify-center bg-amber-600/20 backdrop-blur-lg border border-amber-500/30 text-amber-200 font-serif font-light px-8 py-3 rounded-md hover:bg-amber-600/30 transition-all duration-300"
            >
              Make a Reservation
            </Link>
          </div>
        </div>

        <div className="mt-16 sm:mt-20">
          <img src="/static/images/border.png" alt="decorative border" className="w-full max-w-md mx-auto pt-6 opacity-90" />
        </div>
        <div className="pointer-events-none select-none relative flex justify-center -mb-10 opacity-80">
          <img src="/static/images/oregano.png" alt="decorative oregano" className="h-auto w-[600px] sm:w-[800px] max-w-[90vw]" />
        </div>
      </section>
    </div>
  );
}
