import React, { useState, useEffect, useRef } from 'react';
import background from '../videobg/4K_10.mp4';
import AOS from 'aos';
import 'aos/dist/aos.css';
import logo from '../img/OS.png';
import logo1 from '../img/insta.png';
import logo2 from '../img/github.png';
import logo3 from '../img/linkedIn.png';
import menu from '../img/menu.png';
import SidePanel from "../components/SidePanel";
import Education from "../components/Education";
import Experience from "../components/Experience";
import Ide from "../components/Ide";
import Git from "../components/Git";
import TopBar from "../components/TopBar";
import { PacmanLoader } from "react-spinners";
import Design from "../components/Design";

function Home() {
  const [isSidePanelOpen, setSidePanelOpen] = useState(false);
  const [isLoading, setLoading] = useState(true);

  setTimeout(() => {
    setLoading(false);
  }, 3000); // Change the timeout duration as needed

  const toggleSidePanel = () => {
    setSidePanelOpen(!isSidePanelOpen);
  };

  useEffect(() => {
    AOS.init({
      duration: 1000,
    });
  }, []);

  const openInstagramProfile = () => {
    // Replace 'username' with the actual Instagram username you want to link to
    const instagramProfileURL = "https://www.instagram.com/olismth/";

    // Open the Instagram profile in a new tab or window
    window.open(instagramProfileURL, "_blank");
  };
  const openLinkedInProfile = () => {
    // Replace 'username' with the actual Instagram username you want to link to
    const instagramProfileURL = "https://www.linkedin.com/in/olivier-smith-2378b8205/";

    // Open the Instagram profile in a new tab or window
    window.open(instagramProfileURL, "_blank");
  };
  const openGithubProfile = () => {
    // Replace 'username' with the actual Instagram username you want to link to
    const githubProfileURL = "https://github.com/oliFYP";

    // Open the Instagram profile in a new tab or window
    window.open(githubProfileURL, "_blank");
  };
  const experienceRef = useRef(null);

  // Function to scroll to the Experience section
  const scrollToExperience = () => {
    experienceRef.current.scrollIntoView({ behavior: 'smooth' });
  };
  return (
    <div className="absolute top-0 left-0 w-full h-full bg-center bg-cover">
      {isLoading ? (
        <div className="absolute top-0 left-0 w-full h-full flex justify-center items-center bg-black">
          <PacmanLoader color="#ffffff" />
        </div>
      ) : (
        <>
          <video
            autoPlay
            loop
            muted
            playsInline
            data-aos="fade-up"
            className="object-cover w-full h-full transition-all md:pointer-events-none blur-sm"
            id="video"
          >
            <source src={background} type="video/mp4" />
          </video>

          <div>
            <TopBar isSidePanelOpen={isSidePanelOpen} toggleSidePanel={toggleSidePanel} />

            {isSidePanelOpen && (
               <SidePanel isSidePanelOpen={isSidePanelOpen} toggleSidePanel={toggleSidePanel} />
            )}

            <div className="absolute top-0 left-0 m-4 flex">
              <img src={logo} className="h-8 mt-1 sm:h-9 sm:mt-2" alt="Logo" />
            </div>
          </div>

          <div className="absolute top-1/4 sm:right-1/2 transform">
            <div data-aos="fade-up" className="bg-white h-full w-1 absolute top-0 left-0" style={{ marginLeft: '10px' }}></div>
            <div style={{ marginLeft: '10px', marginRight:'15px' }}>
              <h1 data-aos="fade-right" className="select-none text-white font-bold text-4xl md:text-4xl lg:text-6xl max-w-md pl-4">
                Hi there!
              </h1>
              <div data-aos="fade-up" className="select-none text-white font-bold mt-3 text-lg lg:text-3xl lg:mt-10 max-w-md pl-4">
                <p>
                  I'm Olivier, a computer science graduate from Kingston University
                </p>
              </div>
              <button data-aos="fade-left" className="rounded-2xl ml-5 bg-white mt-10 w-40 h-10 font-bold text-black flex items-center justify-center">
                Download CV
              </button>
              <div className="mt-3 flex">
                <img src={logo1} className="h-8 mr-2 ml-8 cursor-pointer" alt="Logo 1" onClick={openInstagramProfile} />
                <img src={logo2} className="h-8 mr-2 cursor-pointer" alt= "Logo 2" onClick={openGithubProfile}/>
                <img src={logo3} className="h-8 cursor-pointer" alt="Logo 3"  onClick={openLinkedInProfile} />
              </div>
            </div>
          </div>

          <Experience ref={experienceRef} />
          <Ide />
          <Design />
          <Git />
          <Education />
         

        </>
      )}
    </div>
  );
}

export default Home;