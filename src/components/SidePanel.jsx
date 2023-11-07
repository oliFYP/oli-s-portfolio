import React, { useState, useEffect } from 'react';




function SidePanel({ isSidePanelOpen, toggleSidePanel }) {
 


  return (
    
    <div
    className={`top-0 right-0 w-full bg-black p-20 text-white fixed h-full z-40 flex flex-col items-center justify-center ease-in-out duration-300 ${
      isSidePanelOpen ? "translate-x-0" : "translate-x-full"
    }`}
  >
      <button className="bg-transparent font-bold text-white p-4 group btn btn-border-underline relative my-2 w-full">Home
      <span className="absolute left-0 right-0 bottom-0 h-1 bg-white transform scale-x-0 transition-transform duration-300 group-hover:scale-x-100"></span></button>
      <button className="bg-transparent font-bold text-white p-4 group btn btn-border-underline relative my-2 w-full">Experience
      <span className="absolute left-0 right-0 bottom-0 h-1 bg-white transform scale-x-0 transition-transform duration-300 group-hover:scale-x-100"></span></button>
      <button className="bg-transparent font-bold text-white p-4 group btn btn-border-underline relative my-2  w-full">Projects
      <span className="absolute left-0 right-0 bottom-0 h-1 bg-white transform scale-x-0 transition-transform duration-300 group-hover:scale-x-100"></span></button>
      <button className="bg-transparent font-bold text-white p-4 group btn btn-border-underline relative my-2  w-full">Contact
      <span className="absolute left-0 right-0 bottom-0 h-1 bg-white transform scale-x-0 transition-transform duration-300 group-hover:scale-x-100"></span></button>
      <button className="bg-transparent font-bold text-white p-4 group btn btn-border-underline relative my-2  w-full">About
      <span className="absolute left-0 right-0 bottom-0 h-1 bg-white transform scale-x-0 transition-transform duration-300 group-hover:scale-x-100"></span></button>
      <button
        className="bg-transparent rounded-full font-bold text-white p-4 my-2 w-auto"
        onClick={toggleSidePanel}
      >
        X
      </button>
    </div>

  );
}

export default SidePanel;