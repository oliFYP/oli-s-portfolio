import React, { useRef, useState } from "react";
import { PacmanLoader } from "react-spinners";

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
import Background from "../components/Videobg";

import logo from "../img/OS.png";

function Home() {
  const [isSidePanelOpen, setSidePanelOpen] = useState(false);
  const [isLoading, setLoading] = useState(true);
  const experienceRef = useRef(null);
  const educationRef = useRef(null);
  const aboutRef = useRef(null);

  setTimeout(() => {
    setLoading(false);
  }, 3000);

  const toggleSidePanel = () => {
    setSidePanelOpen(!isSidePanelOpen);
  };
  const scrollToAboutMe = () => {
    aboutRef.current.scrollIntoView({ behavior: "smooth" });
  };
  const scrollToExperience = () => {
    experienceRef.current.scrollIntoView({ behavior: "smooth" });
  };
  const scrollToEducation = () => {
    educationRef.current.scrollIntoView({ behavior: "smooth" });
  };
  const handleVideoLoad = () => {
    setLoading(false);
  };

  return (
    <div>
      {isLoading ? (
        <div className="absolute top-0 left-0 w-full h-full flex justify-center items-center bg-black">
          <PacmanLoader color="#ffffff" />
        </div>
      ) : (
        <>
          <div className="relative" style={{ overflow: "hidden" }}>
            <Background onVideoLoad={handleVideoLoad} />
            <Presentation />
            <div className="absolute bottom-0 w-full h-22">
              <div className="relative h-50 bg-gradient-to-b from-transparent via-black to-black p-9"></div>
            </div>

            <div>
              <TopBar
                isSidePanelOpen={isSidePanelOpen}
                toggleSidePanel={toggleSidePanel}
                scrollToExperience={scrollToExperience}
                scrollToEducation={scrollToEducation}
                scrollToAboutMe={scrollToAboutMe}
              />

              {isSidePanelOpen && (
                <SidePanel
                  isSidePanelOpen={isSidePanelOpen}
                  toggleSidePanel={toggleSidePanel}
                  scrollToExperience={scrollToExperience}
                  scrollToEducation={scrollToEducation}
                  scrollToAboutMe={scrollToAboutMe}
                />
              )}

              <div className="absolute top-0 left-0 m-4 flex">
                <img
                  src={logo}
                  className="h-8 mt-1 sm:h-9 sm:mt-2"
                  alt="Logo"
                />
              </div>
            </div>
          </div>
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
