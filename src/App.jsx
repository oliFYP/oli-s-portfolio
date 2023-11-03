import React, { useState } from 'react';
import background from './videobg/4K_10.mp4';
import logo from './img/OS.png';
import logo1 from './img/insta.png';
import logo2 from './img/github.png';
import logo3 from './img/linkedIn.png';
import menu from './img/menu.png';

function App() {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div className="absolute top-0 left-0 w-full h-full bg-center bg-cover">
      <video
        autoPlay
        loop
        muted
        className={`object-cover w-full h-full transition-all pointer-event-none ${
          isHovered ? 'blur-lg' : 'blur-0'
        }`}
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
        <img src={menu} className="h-8 mr-2 sm:hidden" />
      </div>

      <div className="absolute top-0 left-0 m-4 flex">
        <img src={logo} className="h-8 mt-1 sm:h-9 sm:mt-2" />
      </div>

      <div className="absolute top-1/4 right-1/2 transform">
        <div className="bg-white h-full w-1 absolute top-0 left-0"></div>
        <h1 className="select-none text-white font-bold text-4xl md:text-4xl lg:text-6xl max-w-md pl-4">
          Hi there!
        </h1>
        <p className="select-none text-white font-bold mt-3 text-lg lg:text-3xl lg:mt-10 max-w-md pl-4">
          I'm Olivier, a computer science graduate
        </p>
        <button
          className="rounded-2xl ml-5 bg-white mt-10 w-40 h-10 font-bold text-black flex items-center justify-center transition-all "
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          Download CV
        </button>
        <div className="mt-3 flex">
          <img src={logo1} className="h-8 mr-2 ml-8" />
          <img src={logo2} className="h-8 mr-2" />
          <img src={logo3} className="h-8" />
        </div>
      </div>
    </div>
  );
}

export default App;
