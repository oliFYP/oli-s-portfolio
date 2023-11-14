import React, { useState, useEffect } from 'react';
import exit from '../icons/exit.png'



function SidePanel({ isSidePanelOpen, toggleSidePanel, scrollToExperience, scrollToEducation }) {
 


  return (
    
    <div
    className={`top-0 right-0 w-full h-full bg-black p-20 absolute text-white h-auto z-40 flex flex-col items-center justify-center ease-in-out duration-300 translate-x-0`}
  >
    <button className="bg-transparent font-bold text-white p-4 group btn btn-border-underline relative my-2 w-full">
      Home
      <span className="absolute left-0 right-0 bottom-0 h-1 bg-white transform scale-x-0 transition-transform duration-300 group-hover:scale-x-100"></span>
    </button>
<button className="bg-transparent font-bold text-white p-4 group btn btn-border-underline relative my-2 w-full" onClick={scrollToExperience}>Experience & Projects
<span className="absolute left-0 right-0 bottom-0 h-1 bg-white transform scale-x-0 transition-transform duration-300 group-hover:scale-x-100"></span></button>
<button className="bg-transparent font-bold text-white p-4 group btn btn-border-underline relative my-2  w-full" onClick={scrollToEducation}>Education 
<span className="absolute left-0 right-0 bottom-0 h-1 bg-white transform scale-x-0 transition-transform duration-300 group-hover:scale-x-100"></span></button>
<button className="bg-transparent font-bold text-white p-4 group btn btn-border-underline relative my-2  w-full">Contact
<span className="absolute left-0 right-0 bottom-0 h-1 bg-white transform scale-x-0 transition-transform duration-300 group-hover:scale-x-100"></span></button>
<button className="bg-transparent font-bold text-white p-4 group btn btn-border-underline relative my-2  w-full">About Me
<span className="absolute left-0 right-0 bottom-0 h-1 bg-white transform scale-x-0 transition-transform duration-300 group-hover:scale-x-100"></span></button>
<img
      src={exit}
      className="bg-transparent  p-4 my-2 w-auto h-20 cursor-pointer"
      onClick={toggleSidePanel}
    >
    
    </img>
  </div>

  );
}

export default SidePanel;