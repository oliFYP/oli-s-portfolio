import React, { useRef, useState, useEffect } from "react";
import { PacmanLoader } from "react-spinners"; // Importing the PacmanLoader component from react-spinners library

import Design from "../components/Design";
import Education from "../components/Education";
import AboutMe from "../components/AboutMe";
import Experience from "../components/Experience";
import Footer from "../components/Footer";
import Git from "../components/Git";
import Ide from "../components/Ide";
import Presentation from "../components/Presentation";
import SidePanel from "../components/SidePanel";
import TopBar from "../components/TopBar";
import Background from "../components/Videobg"; // Importing various components used in the Home component

import logo from "../img/OS.png"; // Importing the logo image

function Home() {
  const [isSidePanelOpen, setSidePanelOpen] = useState(false); // State to track the visibility of the side panel
  const [isLoading, setLoading] = useState(true); // State to track the loading status
  const experienceRef = useRef(null); // Reference to the Experience section
  const educationRef = useRef(null); // Reference to the Education section
  const aboutRef = useRef(null); // Reference to the About Me section

  useEffect(() => {
    // Set a timeout to simulate loading
    const timer = setTimeout(() => {
      setLoading(false);
    }, 3000);
    return () => clearTimeout(timer); // Cleanup the timer on component unmount
  }, []);

  // Function to toggle the side panel visibility
  const toggleSidePanel = () => {
    setSidePanelOpen(!isSidePanelOpen);
  };

  // Function to scroll to the About Me section
  const scrollToAboutMe = () => {
    aboutRef.current.scrollIntoView({ behavior: "smooth" });
  };

  // Function to scroll to the Experience section
  const scrollToExperience = () => {
    experienceRef.current.scrollIntoView({ behavior: "smooth" });
  };

  // Function to scroll to the Education section
  const scrollToEducation = () => {
    educationRef.current.scrollIntoView({ behavior: "smooth" });
  };

  // Function to handle video load event
  const handleVideoLoad = () => {
    setLoading(false);
  };

  return (
    <div>
      {isLoading ? (
        // Display a loading spinner while the page is loading
        <div className="absolute top-0 left-0 w-full h-full flex justify-center items-center bg-black">
          <PacmanLoader color="#ffffff" />
        </div>
      ) : (
        // Main content of the page
        <>
          <div className="relative" style={{ overflow: "hidden" }}>
            <Background onVideoLoad={handleVideoLoad} />
            <Presentation />
            <div className="absolute bottom-0 w-full h-22">
              <div className="relative h-50 bg-gradient-to-b from-transparent via-black to-black p-9"></div>
            </div>

            <div>
              {/* Top bar component */}
              <TopBar
                isSidePanelOpen={isSidePanelOpen}
                toggleSidePanel={toggleSidePanel}
                scrollToExperience={scrollToExperience}
                scrollToEducation={scrollToEducation}
                scrollToAboutMe={scrollToAboutMe}
              />

              {/* Side panel component */}
              {isSidePanelOpen && (
                <SidePanel
                  isSidePanelOpen={isSidePanelOpen}
                  toggleSidePanel={toggleSidePanel}
                  scrollToExperience={scrollToExperience}
                  scrollToEducation={scrollToEducation}
                  scrollToAboutMe={scrollToAboutMe}
                />
              )}

              {/* Logo display */}
              <div className="absolute top-0 left-0 m-4 flex">
                <img
                  src={logo}
                  className="h-8 mt-1 sm:h-9 sm:mt-2"
                  alt="Logo"
                />
              </div>
            </div>
          </div>
          {/* Sections of the page */}
          <div id="aboutMe">
            <AboutMe ref={aboutRef} />
          </div>
          <div id="experience">
            <Experience ref={experienceRef} />
          </div>
          <Ide />
          <Design />
          <Git />
          <div id="education">
            <Education ref={educationRef} />
          </div>
          <Footer />
        </>
      )}
    </div>
  );
}

export default Home;
