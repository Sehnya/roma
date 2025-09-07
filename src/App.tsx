import "../static/css/tw.css";

import { NavBar } from "@/components/NavBar.tsx";
import * as React from "react";
import { Map } from "@/components/Map.tsx"
import CircularText from 'src/components/CircularText';
import ScrollVelocity from 'src/components/ScrollVelocity.tsx';
import { Footer } from "@/components/Footer.tsx";
// Runtime fallback: if Bun emitted a relative asset path like "./file.svg",
// normalize it to Flask's absolute static path "/static/assets/file.svg".


export function App() {
  return (
    <div className="app w-full antialiased overflow-clip inline-flex flex-col ">
      <NavBar />
      <section className="hero min-h-screen w-full relative overflow-hidden">
        <video autoPlay loop muted playsInline className="absolute inset-0 w-full h-full object-cover">
          <source src="static/images/video-1.mp4" type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-black/30"></div>
        <div className="relative z-10 flex flex-col items-center justify-center h-full text-center px-4">
          <img src="static/images/Roma-white.png" alt="Roma Restaurant Logo"
            className="w-32 sm:w-40 md:w-48 lg:w-56 opacity-90 mb-8" />
          <p className="text-lg sm:text-xl md:text-2xl text-white font-serif max-w-2xl leading-relaxed mb-12">
            Savor the Moment. Indulge in the Extraordinary.
          </p>
          <button className="backdrop-blur-lg bg-white/10 border border-white/30 text-white font-serif font-light px-8 py-3 rounded-md hover:bg-white/20 transition-all duration-300 text-lg">
            DISCOVER MORE
          </button>
        </div>
      </section>
      <section className="relative w-full bg-black text-white py-16 sm:py-20 lg:py-32 px-4 sm:px-6 lg:px-24 font-serif overflow-visible">
        {/* Top border */}
        <img src="/static/images/border.png" alt="decorative border" className="w-full max-w-md mx-auto pb-8 relative z-10 opacity-90" />

        {/* Thyme decoration */}
        <div className="pointer-events-none select-none absolute inset-x-0 top-0 flex justify-center -translate-y-1/4 z-0">
          <img
            src="/static/images/thyme.png"
            alt="decorative thyme"
            className="rotate-180 h-auto w-[600px] sm:w-[800px] lg:w-[900px] max-w-[90vw] opacity-70"
          />
        </div>

        {/* Content layout */}
        <div className="relative z-10 flex flex-col lg:flex-row items-center lg:items-stretch gap-8 lg:gap-12 max-w-7xl mx-auto">
          {/* Left image */}
          <div className="w-full lg:w-1/3">
            <img
              src="/static/images/Restaurant Stock Photo.jpeg"
              alt="Elegant Restaurant Interior"
              className="rounded-2xl shadow-2xl object-cover w-full h-64 sm:h-80 lg:h-96"
            />
          </div>

          {/* About text (center) */}
          <div className="w-full lg:w-1/3 flex flex-col justify-center text-center px-4">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-light tracking-wide mb-6">About Roma</h2>
            <p className="text-base sm:text-lg text-gray-300 leading-relaxed mb-4">
              Welcome to <span className="italic font-medium">Roma</span>, where culinary mastery meets timeless sophistication.
              Our philosophy blends tradition with modern artistry, creating unforgettable dining experiences.
            </p>
            <p className="text-base sm:text-lg text-gray-300 leading-relaxed mb-8">
              From the moment you step inside, our elegant ambiance invites you to savor flavors crafted with passion
              and presented with grace. Every dish tells a story, and every visit becomes a memory.
            </p>
            <img src="/static/images/sun.png" alt="decorative sun" className="w-20 sm:w-24 mx-auto opacity-80" />
          </div>

          {/* Right image */}
          <div className="w-full lg:w-1/3">
            <img
              src="/static/images/Culinary Stock Photo.jpeg"
              alt="Fine Dining Dish"
              className="rounded-2xl shadow-2xl object-cover w-full h-64 sm:h-80 lg:h-96"
            />
          </div>
        </div>

        {/* Bottom border */}
        <img src="/static/images/border.png" alt="decorative border" className="w-full max-w-md mx-auto relative z-10 mt-16 opacity-90" />

        {/* Oregano decoration */}
        <div className="pointer-events-none select-none absolute inset-x-0 bottom-0 flex justify-center translate-y-1/4 z-10">
          <img
            src="/static/images/oregano.png"
            alt="decorative oregano"
            className="h-auto w-[600px] sm:w-[800px] lg:w-[900px] max-w-[95vw] opacity-80"
          />
        </div>
      </section>

      <section className="relative min-h-screen py-16 sm:py-20 lg:py-32 px-4 sm:px-6 lg:px-24 font-serif bg-gradient-to-br from-amber-900 via-orange-900 to-red-900 text-white overflow-hidden">
        {/* Background pattern layer */}
        <div
          className="absolute inset-0 bg-center bg-cover opacity-10"
          style={{ backgroundImage: `url('/static/images/geo-pattern.png')` }}
        ></div>

        {/* Circular text decoration */}
        <div className="absolute z-20 w-[150px] h-[150px] sm:w-[200px] sm:h-[200px] md:w-[300px] md:h-[300px] lg:w-[400px] lg:h-[400px] flex items-center right-4 sm:right-8 lg:right-16 top-8 sm:top-16">
          <CircularText
            text="INDULGE~IN~THE~EXTRAORDINARY~"
            onHover="speedUp"
            spinDuration={20}
            className="custom-class"
          />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-light tracking-wide text-center mb-16">Exclusive Events</h1>

          {/* Events grid */}
          <div className="grid gap-8 md:gap-12 lg:gap-16">
            {/* Wine Tasting Event */}
            <div className="flex flex-col lg:flex-row items-center gap-8 lg:gap-12">
              <div className="w-full lg:w-1/2">
                <img
                  src="/static/images/cocktail.jpeg"
                  alt="Wine Tasting Event"
                  className="w-full h-64 sm:h-80 lg:h-96 object-cover rounded-2xl shadow-2xl"
                />
              </div>
              <div className="w-full lg:w-1/2 text-center lg:text-left">
                <h2 className="text-2xl sm:text-3xl lg:text-4xl font-light tracking-wide mb-4">Wine Tasting Evening</h2>
                <p className="text-base sm:text-lg text-gray-200 leading-relaxed mb-6">
                  Join us for an exclusive evening featuring carefully curated Italian vintages paired with artisanal hors d'oeuvres.
                  Experience the perfect harmony of flavor and sophistication.
                </p>
                <button className="bg-white/10 backdrop-blur-lg border border-white/30 text-white font-serif font-light px-8 py-3 rounded-md hover:bg-white/20 transition-all duration-300">
                  Reserve Your Spot
                </button>
              </div>
            </div>

            {/* Mixer Event */}
            <div className="flex flex-col lg:flex-row-reverse items-center gap-8 lg:gap-12">
              <div className="w-full lg:w-1/2">
                <img
                  src="/static/images/mixer.png"
                  alt="Social Mixer Event"
                  className="w-full h-64 sm:h-80 lg:h-96 object-cover rounded-2xl shadow-2xl"
                />
              </div>
              <div className="w-full lg:w-1/2 text-center lg:text-left">
                <h2 className="text-2xl sm:text-3xl lg:text-4xl font-light tracking-wide mb-4">Elegant Social Mixer</h2>
                <p className="text-base sm:text-lg text-gray-200 leading-relaxed mb-6">
                  Experience the vibrant energy of our sophisticated social gathering. Connect with like-minded individuals
                  in an atmosphere of refined elegance and culinary excellence.
                </p>
                <button className="bg-white/10 backdrop-blur-lg border border-white/30 text-white font-serif font-light px-8 py-3 rounded-md hover:bg-white/20 transition-all duration-300">
                  Join the Experience
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
      <div className="relative z-30 flex items-center justify-center overflow-hidden bg-white py-4">
        <ScrollVelocity
          texts={['ROMA.ROMA.ROMA.ROMA.ROMA.']}
          velocity={50}
          className="custom-scroll-text flex m-0 p-0 leading-none"
        />
      </div>

      <section className="min-h-screen w-full bg-black flex flex-col items-center justify-center text-white font-serif py-16 px-4 sm:px-6 lg:px-20">
        <div className="max-w-6xl mx-auto w-full">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-light tracking-wide text-center mb-12">Visit Roma</h1>

          <div className="mb-12">
            <Map />
          </div>

          <div className="text-center space-y-4 mb-8">
            <div className="text-lg sm:text-xl text-gray-300">
              <p className="mb-2">123 Luxury Avenue, Downtown District</p>
              <p className="mb-2">New York, NY 10001</p>
            </div>
            <div className="text-base sm:text-lg text-gray-400 space-y-2">
              <p>RESERVATIONS: <span className="text-white">(555) 123-ROMA</span></p>
              <p>EMAIL: <span className="text-white">reservations@roma-restaurant.com</span></p>
            </div>
            <div className="text-sm sm:text-base text-gray-500 mt-6">
              <p>HOURS: Tuesday - Sunday, 5:00 PM - 11:00 PM</p>
              <p>Closed Mondays</p>
            </div>
          </div>

          <div className="text-center">
            <a
              href="https://www.google.com/maps/dir/?api=1&destination=123+Luxury+Avenue,+New+York,+NY+10001"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center bg-white/10 backdrop-blur-lg border border-white/30 text-white font-serif font-light px-8 py-3 rounded-md hover:bg-white/20 transition-all duration-300"
            >
              Get Directions
            </a>
          </div>
        </div>
      </section>





      <Footer />
    </div>
  );
}

// @ts-ignore
export default App;