import "../static/css/tw.css";

import {NavBar} from "@/components/NavBar.tsx";
import * as React from "react";
import { Map } from "@/components/Map.tsx"
import CircularText from 'src/components/CircularText';
import ScrollVelocity from 'src/components/ScrollVelocity.tsx';
import {Footer} from "@/components/Footer.tsx";
// Runtime fallback: if Bun emitted a relative asset path like "./file.svg",
// normalize it to Flask's absolute static path "/static/assets/file.svg".


export function App() {
  return (
    <div className="app w-full antialiased overflow-clip inline-flex flex-col ">
    <NavBar/>
        <section className="hero min-h-screen w-full">
            <p className="bottom-55 text-xl text-white font-serif z-40 relative p-3 text-center"
               data-aos-duration="3000">Savor the Moment. Indulge in the Extraordinary.</p>
            <img src="static/images/Roma-white.png" alt="logo"
                 className=" p-6 w-fit opacity-60 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"/>
            <video autoPlay loop muted playsInline className="w-full h-full object-cover">
                <source src="static/images/video-1.mp4" type="video/mp4"/>
            </video>
            <button className=" top-45 backdrop-blur-lg btn text-lg btn-outline text-white font-serif font-extralight antialiased hover:text-black relative">LEARN MORE</button>
        </section>
<section className="relative w-full bg-black text-white py-25 px-6 lg:px-24 font-serif overflow-visible">
  {/* Top border */}
  <img src="/static/images/border.png" alt="border" className="w-150 mx-auto pb-7 relative z-10" />

  {/* Thyme (above content, centered) */}
  <div className="pointer-events-none select-none absolute inset-x-0 top-0 flex justify-center -translate-y-1/3 z-0">
    <img
      src="/static/images/thyme.png"
      alt="Thyme graphic"
      className="rotate-180 h-auto w-[900px] max-w-[90vw] opacity-90 right-[-300px] absolute top-[-100px]"
    />
  </div>

  {/* Row layout: image | text | image */}
  <div className="relative z-10 flex flex-col lg:flex-row items-center lg:items-stretch gap-8 lg:gap-12">
    {/* Left image */}
    <div className="w-full lg:w-1/3 flex">
      <img
        src="/static/images/Restaurant Stock Photo.jpeg"
        alt="Elegant Restaurant Interior"
        className="rounded-2xl shadow-lg object-cover w-full"
      />
    </div>

    {/* About text (center) */}
    <div className="w-full lg:w-1/3 hero min-h-[50vh] lg:min-h-0 flex flex-col justify-center text-center">
      <h2 className="text-4xl lg:text-5xl font-light tracking-wide">About Us</h2>
      <p className="text-lg text-gray-300 mt-4">
        Welcome to <span className="italic">Roma</span>, where culinary mastery meets timeless sophistication.
        Our philosophy blends tradition with modern artistry, creating unforgettable dining experiences.
      </p>
      <p className="text-lg text-gray-300 mt-3">
        From the moment you step inside, our elegant ambiance invites you to savor flavors crafted with passion
        and presented with grace. Every dish tells a story, and every visit becomes a memory.
      </p>
      <img src="/static/images/sun.png" alt="sun" className="w-100 mx-auto mt-6" />
    </div>

    {/* Right image */}
    <div className="w-full lg:w-1/3 flex">
      <img
        src="/static/images/Culinary Stock Photo.jpeg"
        alt="Fine Dining Dish"
        className="rounded-2xl shadow-lg object-cover w-full"
      />
    </div>
  </div>

  {/* Bottom border */}
  <img src="/static/images/border.png" alt="border" className="w-150 mx-auto relative z-10 -mt-12 pt-16" />

  {/* Oregano (overlapping next section) */}
  <div className="pointer-events-none select-none absolute inset-x-0 bottom-0 left-[-400px] flex justify-center translate-y-1/3 z-10">
    <img
      src="/static/images/oregano.png"
      alt="Oregano graphic"
      className="h-auto w-[900px] max-w-[95vw] opacity-95 left-[0px] absolute bottom-[-100px]"
    />
  </div>
</section>

<section className="hero relative min-h-[15vh] max-h-fit py-25 px-6 lg:px-24 font-serif bg-orange-900 text-white p-0 ">

  {/* Background pattern layer */}
  <div
    className="absolute inset-0 bg-center bg-cover z-0 opacity-20 mt-[-100px] ml-[-100px] "
    style={{ backgroundImage: `url('/static/images/geo-pattern.png')` }}
  ></div>
<h1 className="text-5xl font-light tracking-wide top-[-165px] relative">Events</h1>
  {/* Content */}
  <div className="hero-content relative z-10 overflow-hidden">
    <div className="container flex flex-row auto-cols-max">
      <img
        src="/static/images/cocktail.jpeg"
        alt="border"
        className="w-50 relative z-10 rounded-xl"
      />
      <div className="container text-center p-7">
        <h1 className="text-3xl font-light tracking-wide">Wine Tasting</h1>
        <p className="text-lg text-white mt-4">
          Come by and indulge in out finely aged and handcrafted wines.
        </p>
        <div className="btn backdrop-blur-lg text-lg btn-outline text-white font-serif font-extralight antialiased hover:text-black relative mt-2">
          RSVP
        </div>
      </div>
    </div>

    <div className="container flex flex-row auto-cols-max">
      <img
        src="/static/images/mixer.png"
        alt="border"
        className="w-70 relative z-10 rounded-xl"
      />
      <div className="container text-center p-5">
        <h1 className="text-3xl font-light tracking-wide text-wrap">Mixer</h1>
        <p className="text-lg text-white mt-4">
          Experience the lively scene of our singles mixer.
        </p>
        <div className="btn backdrop-blur-lg text-lg btn-outline text-white font-serif font-extralight antialiased hover:text-black relative mt-2">
          RSVP
        </div>
      </div>
    </div>
  </div>
      <div className=" absolute z-50 w-[200px] h-[200px] md:w-[300px] md:h-[300px] lg:w-[400px] lg:h-[400px] flex items-center right-[10px] top-[-295px]">
<CircularText
  text="INDULGE~IN~THE~EXTRAORDINARY~"
  onHover="speedUp"
  spinDuration={20}
  className="custom-class"
/>
      </div>
</section>
        <div className="relative z-90 inset-x-0 top-0 flex items-center justify-center overflow-hidden bg-white">
  <ScrollVelocity
    texts={['ROMA.ROMA.ROMA.ROMA.ROMA.']}
    velocity={50}
    className="custom-scroll-text flex m-0 p-0 leading-none"
  />
</div>
        <section className="hero min-h-screen w-full bg-black flex flex-col items-center justify-center text-white font-serif p-20">
        <h1 className="relative inline-flex text-4xl mb-10">Our Location</h1>
        <Map/>
        <div className="text-center text-lg mt-10 link flex flex-col items-center">
            <p> 12345 Main Street, Anytown, USA</p>
            <p> PHONE: (123) 456-7890</p>
            <p> EMAIL: 1234566789@123.com</p>
        </div>
            <a
  href="https://www.google.com/maps/dir/?api=1&destination=12345+Main+Street,+Anytown,+USA"
  target="_blank"
  rel="noopener noreferrer"
  className="btn mt-5 btn-outline text-white hover:text-black"
>
  Get Directions
</a>
        </section>





        <Footer/>
    </div>
  );
}

// @ts-ignore
export default App;