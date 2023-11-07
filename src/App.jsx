import React, { useState, useEffect } from 'react';
import background from './videobg/4K_10.mp4';
import AOS from 'aos';
import 'aos/dist/aos.css';
import logo from './img/OS.png';
import logo1 from './img/insta.png';
import logo2 from './img/github.png';
import logo3 from './img/linkedIn.png';
import menu from './img/menu.png';

function App() {
  const [isSidePanelOpen, setSidePanelOpen] = useState(false);

  const toggleSidePanel = () => {
    setSidePanelOpen(!isSidePanelOpen);
  };
  useEffect(() => {
    AOS.init({
      
      duration: 1000, 
    });
  }, []);
  return (
    <div className="absolute top-0 left-0 w-full h-full bg-center bg-cover">
      <video
        autoPlay
        loop
        muted
        playsInline
        className="object-cover w-full h-full transition-all md:pointer-events-none blur-sm"
        id="video"
      >
        <source src={background} type="video/mp4" />
      </video>

      <div className="absolute top-0 right-0 m-4 flex">
  <button className="bg-transparent font-bold text-white group btn btn-border-underline hidden sm:block mr-2 relative">
    Home
    <span className="absolute left-0 right-0 bottom-0 h-1 bg-white transform scale-x-0 transition-transform duration-300 group-hover:scale-x-100"></span>
  </button>
  <button className="bg-transparent font-bold text-white group btn btn-border-underline hidden sm:block mr-2 relative">
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

      <div className="absolute top-0 left-0 m-4 flex">
        <img src={logo} className="h-8 mt-1 sm:h-9 sm:mt-2" alt="Logo" />
      </div>

      <div className="absolute top-0 right-0">
 <div
  className={`top-0 right-0 w-full bg-black  p-20  text-white fixed h-full z-40  flex flex-col items-center justify-center ease-in-out duration-300 ${
    isSidePanelOpen ? "translate-x-0 " : "translate-x-full"
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

</div>


<div className="absolute top-1/4 sm:right-1/2 transform">
  <div data-aos="fade-up" className="bg-white h-full w-1 absolute top-0 left-0" style={{ marginLeft: '10px' }}></div>
  <div style={{ marginLeft: '10px' }}>
    <h1 data-aos="fade-right" className="select-none text-white font-bold text-4xl md:text-4xl lg:text-6xl max-w-md pl-4">
      Hi there!
    </h1>
    <p  data-aos="fade-up" className="select-none text-white font-bold mt-3 text-lg lg:text-3xl lg:mt-10 max-w-md pl-4">
      I'm Olivier, a computer science graduate from Kingston University
    </p>
    <button data-aos="fade-left" className="rounded-2xl ml-5 bg-white mt-10 w-40 h-10 font-bold text-black flex items-center justify-center">
      Download CV
    </button>
    <div className="mt-3 flex">
      <img src={logo1} className="h-8 mr-2 ml-8" alt="Logo 1" />
      <img src={logo2} className="h-8 mr-2" alt= "Logo 2" />
      <img src={logo3} className="h-8" alt="Logo 3" />
    </div>
  </div>
  </div>
</div>
  );
}

export default App;