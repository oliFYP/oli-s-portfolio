import React, { useState, useEffect } from 'react';



import menu from '../img/menu.png';

function Topbar({ isSidePanelOpen, toggleSidePanel,  scrollToExperience}) {

  return (
    
   
     
      <div className="absolute top-0 right-0 m-4 flex">
  <button className="bg-transparent font-bold text-white group btn btn-border-underline hidden sm:block mr-2 relative">
    Home
    <span className="absolute left-0 right-0 bottom-0 h-1 bg-white transform scale-x-0 transition-transform duration-300 group-hover:scale-x-100"></span>
  </button>
  <button className="bg-transparent font-bold text-white group btn btn-border-underline hidden sm:block mr-2 relative" onClick={scrollToExperience}>
    Experience
    <span className="absolute left-0 right-0 bottom-0 h-1 bg-white transform scale-x-0 transition-transform duration-300 group-hover:scale-x-100"></span>
  </button>
  <button className="bg-transparent font-bold text-white group btn btn-border-underline hidden sm:block mr-2 relative">
    Projects
    <span className="absolute left-0 right-0 bottom-0 h-1 bg-white transform scale-x-0 transition-transform duration-300 group-hover:scale-x-100"></span>
  </button>
  <button className="bg-transparent font-bold text-white group btn btn-border-underline  hidden sm:block mr-2 relative">
    Contact
    <span className="absolute left-0 right-0 bottom-0 h-1 bg-white transform scale-x-0 transition-transform duration-300 group-hover:scale-x-100"></span>
  </button>
  <button className="bg-transparent font-bold text-white group btn btn-border-underline  hidden sm:block mr-2 relative">
    About
    <span className="absolute left-0 right-0 bottom-0 h-1 bg-white transform scale-x-0 transition-transform duration-300 group-hover:scale-x-100"></span>
  </button>


        <img
          src={menu}
          className="h-8 mr-2 sm:hidden cursor-pointer"
          alt="Menu"
          onClick={toggleSidePanel}
        />
      </div>
     

  );
}

export default Topbar;