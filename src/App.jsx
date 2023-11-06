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
        className="object-cover w-full h-full transition-all md:pointer-events-none blur-lg"
        id="video"
      >
        <source src={background} type="video/mp4" />
      </video>

      <div className="absolute top-0 right-0 m-4 flex">
        <button className="bg-transparent font-bold text-white hidden sm:block mr-2">Home</button>
        <button className="bg-transparent font-bold text-white hidden sm:block mr-2">Experience</button>
        <button className="bg-transparent font-bold text-white hidden sm:block mr-2">Projects</button>
        <button className="bg-transparent font-bold text-white hidden sm:block mr-2">Contact</button>
        <button className="bg-transparent font-bold text-white hidden sm:block mr-2">About</button>
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
  {isSidePanelOpen && (
    <div className="fixed top-0 right-0 h-full bg-black w-full transition-all flex flex-col items-center justify-center z-50">
      <button className="bg-transparent font-bold text-white p-4 my-2 w-full">Home</button>
      <button className="bg-transparent font-bold text-white p-4 my-2 w-full">Experience</button>
      <button className="bg-transparent font-bold text-white p-4 my-2 w-full">Projects</button>
      <button className="bg-transparent font-bold text-white p-4 my-2 w-full">Contact</button>
      <button className="bg-transparent font-bold text-white p-4 my-2 w-full">About</button>
      <button
        className="bg-transparent rounded-full font-bold text-white p-4 my-2 w-auto"
        onClick={toggleSidePanel}
      >
        X
      </button>
    </div>
  )}
</div>


<div className="absolute top-1/4 right-1/2 transform">
  <div data-aos="fade-up" className="bg-white h-full w-1 absolute top-0 left-0" style={{ marginLeft: '30px' }}></div>
  <div style={{ marginLeft: '30px' }}>
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