import * as React from "react";
import { Link } from "react-router-dom";



export const NavBar = () => (
  <div className="antialiased navbar w-full h-16 backdrop-blur-lg fixed top-0 z-50 font-serif font-thin flex items-center justify-between px-6" >
    {/* Left Section */}
    <div className="navbar-start">
      {/* Could place logo here */}
    </div>

    {/* Center Section */}
    <div className="navbar-center flex gap-4 sm:gap-6 md:gap-8">

            <div className="text-sm sm:text-base md:text-lg text-white font-extralight hover:underline flex flex-row " >
                <Link to='/menu'>MENU</Link>
            </div>


      <Link to="/reservations" className="text-sm sm:text-base md:text-lg text-white font-extralight hover:underline">RESERVATIONS</Link>
      <Link to="/directions" className="text-sm sm:text-base md:text-lg text-white font-extralight hover:underline">DIRECTIONS</Link>
      <Link to="/events" className="text-sm sm:text-base md:text-lg text-white font-extralight hover:underline">EVENTS</Link>
    </div>

    {/* Right Section */}
    <div className="navbar-end flex gap-4 items-center">
      <a href="https://www.facebook.com/">
        <img src="static/images/facebook.png" alt="Facebook logo" className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6"/>
      </a>
      <a href="https://www.instagram.com/">
        <img src="static/images/insta.png" alt="Instagram logo" className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6"/>
      </a>
      <a href="https://www.twitter.com/">
        <img src="static/images/twitter.png" alt="Twitter logo" className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6"/>
      </a>
    </div>
  </div>
);


