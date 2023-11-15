import React, { useState, useEffect, useRef } from 'react';
import background from '../videobg/4K_10.mp4';
import AOS from 'aos';
import 'aos/dist/aos.css';
import logo from '../img/OS.png';
import logo1 from '../img/insta.png';
import logo2 from '../img/github.png';
import logo3 from '../img/linkedIn.png';
import CV from '../CV/Olivier-Smith-CV-2023.pdf';
import menu from '../img/menu.png';
import SidePanel from "../components/SidePanel";
import Education from "../components/Education";
import Experience from "../components/Experience";
import Ide from "../components/Ide";
import Git from "../components/Git";
import TopBar from "../components/TopBar";
import { PacmanLoader } from "react-spinners";
import Design from "../components/Design";
import Footer from "../components/Footer";
import { motion } from 'framer-motion';

function Home() {
  const [isSidePanelOpen, setSidePanelOpen] = useState(false);
  const [isLoading, setLoading] = useState(true);
  const experienceRef = useRef(null);
  const educationRef = useRef(null);

  setTimeout(() => {
    setLoading(false);
  }, 3000);

  const toggleSidePanel = () => {
    setSidePanelOpen(!isSidePanelOpen);
  };

  useEffect(() => {
    AOS.init({
      duration: 1000,
    });
  }, []);

  const openInstagramProfile = () => {
    
    const instagramProfileURL = "https://www.instagram.com/olismth/";

    window.open(instagramProfileURL, "_blank");
  };
  const openLinkedInProfile = () => {
    
    const instagramProfileURL = "https://www.linkedin.com/in/olivier-smith-2378b8205/";

    
    window.open(instagramProfileURL, "_blank");
  };
  const openGithubProfile = () => {
    
    const githubProfileURL = "https://github.com/oliFYP";


    window.open(githubProfileURL, "_blank");
  };
  

  const scrollToExperience = () => {
    experienceRef.current.scrollIntoView({ behavior: 'smooth' });
  };
  const scrollToEducation = () => {
    educationRef.current.scrollIntoView({ behavior: 'smooth' });
  };

  const downloadCV = () => {
    
    const cvFileName = 'Olivier-Smith-CV-2023.pdf';

  const cvFilePath = CV;

  const anchor = document.createElement('a');
  anchor.download = cvFileName;
  anchor.href = cvFilePath;
  anchor.click();
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
            <TopBar 
            isSidePanelOpen={isSidePanelOpen} 
            toggleSidePanel={toggleSidePanel} 
            scrollToExperience={scrollToExperience} 
            scrollToEducation={scrollToEducation}/>

            {isSidePanelOpen && (
               <SidePanel 
               isSidePanelOpen={isSidePanelOpen} 
               toggleSidePanel={toggleSidePanel} 
               scrollToExperience={scrollToExperience}
               scrollToEducation={scrollToEducation} />
            )}

            <div className="absolute top-0 left-0 m-4 flex">
              <img src={logo} className="h-8 mt-1 sm:h-9 sm:mt-2" alt="Logo" />
            </div>
          </div>

          <div className="absolute top-1/4 sm:right-1/2 transform">
            <div data-aos="fade-up" className="bg-white h-full w-1 absolute top-0 left-0" style={{ marginLeft: '10px' }}></div>
            <div style={{ marginLeft: '10px', marginRight:'15px' }}>
              <h1 data-aos="fade-right" className="select-none text-white font-bold text-4xl md:text-6xl lg:text-6xl max-w-md pl-4">
                Hi there!
              </h1>
              <div data-aos="fade-up" className="select-none text-white font-bold mt-3 text-lg lg:text-3xl lg:mt-10 max-w-md pl-4">
                <p>
                  I'm Olivier, a computer science graduate from Kingston University
                </p>
              </div>
              <button data-aos="fade-left" className="rounded-2xl ml-5 bg-white mt-10 w-40 h-10 font-bold text-black flex items-center justify-center"onClick={downloadCV}>
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
          <Education ref={educationRef} />
          <Footer />

        </>
      )}
    </div>
  );
}

export default Home;