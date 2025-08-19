import * as React from "react";

import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import PopupState, { bindTrigger, bindMenu } from 'material-ui-popup-state'



export const NavBar = () => (
  <div className="antialiased navbar w-full h-16 backdrop-blur-lg fixed top-0 z-50 font-serif font-thin flex items-center justify-between px-6" >
    {/* Left Section */}
    <div className="navbar-start">
      {/* Could place logo here */}
    </div>

    {/* Center Section */}
    <div className="navbar-center flex gap-4 sm:gap-6 md:gap-8">
      <PopupState variant="popover" popupId="demo-popup-menu">
        {(popupState) => (
          <React.Fragment>
            <div className="cursor-pointer flex items-center gap-1 text-sm sm:text-base md:text-lg text-white font-extralight" {...bindTrigger(popupState)}>
              MENU
              <img src="static/images/chev-down.png" alt="Chevron Down" className="w-3 h-3 md:w-4 md:h-4"/>
            </div>
            <Menu {...bindMenu(popupState)}>
              <MenuItem onClick={popupState.close}>Breakfast</MenuItem>
              <MenuItem onClick={popupState.close}>Lunch</MenuItem>
              <MenuItem onClick={popupState.close}>Dinner</MenuItem>
            </Menu>
          </React.Fragment>
        )}
      </PopupState>
      <a href="/reservations" className="text-sm sm:text-base md:text-lg text-white font-extralight hover:underline">RESERVATIONS</a>
      <a href="/directions" className="text-sm sm:text-base md:text-lg text-white font-extralight hover:underline">DIRECTIONS</a>
      <a href="/contact" className="text-sm sm:text-base md:text-lg text-white font-extralight hover:underline">EVENTS</a>
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


