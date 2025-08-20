import { Link } from "react-router-dom";
import { Map } from "../components/Map";

export default function Directions() {
    return  <div className="w-full min-h-screen bg-base-100 text-base-content px-6 py-12">
      <div className="max-w-5xl mx-auto space-y-12">
        {/* Title Section */}
        <div className="text-center">
          <h1 className="text-4xl font-bold tracking-tight">Find Us</h1>
          <p className="mt-4 text-lg text-gray-500">
            Conveniently located in the heart of the city — plan your visit with ease.
          </p>
        </div>

        {/* Map Section */}
        <div className="w-full h-[500px] rounded-2xl overflow-hidden shadow-lg border border-gray-200">
          <Map />
        </div>

        {/* Address + CTA Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Address */}
          <div>
            <h2 className="text-2xl font-semibold mb-4">Our Location</h2>
            <p className="text-gray-600 leading-relaxed">
              123 Roma Street <br />
              New York, NY 10001 <br />
              United States
            </p>
            <p className="mt-4 text-gray-600">
              Easily accessible by public transit, and valet parking is available
              at our front entrance.
            </p>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col gap-4">
            <a
              href="https://www.google.com/maps/dir/?api=1&destination=123+Roma+Street+New+York+NY"
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-primary w-full"
            >
              Get Directions
            </a>
            <Link to="/reservations" className="btn btn-outline w-full">
              Make a Reservation
            </Link>
          </div>
        </div>
      </div>
    </div>
}
