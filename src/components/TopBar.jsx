import React from "react";
import { useNavigate } from "react-router-dom";
import { Squash as Hamburger } from "hamburger-react"; // Importing Hamburger component from hamburger-react library

function Topbar({
  isSidePanelOpen,
  toggleSidePanel,
  scrollToExperience,
  scrollToEducation,
  scrollToAboutMe,
}) {
  const navigate = useNavigate(); // Hook to programmatically navigate to different routes

  // Navigation function to the Contact page
  const navigateToContact = () => {
    navigate("/contact");
  };

  // Navigation function to the Projects page
  const navigateToProjects = () => {
    navigate("/project");
  };

  return (
    <div className="absolute top-0 left-0 w-full h-full z-999">
      <nav className="absolute top-0 right-0 m-4 flex">
        {/* Button for Home navigation */}
        <button className="focus:outline-none bg-transparent font-bold text-white group btn btn-border-underline hidden md:block mr-2 relative">
          Home
          <span className="absolute left-0 right-0 bottom-0 h-1 bg-white transform scale-x-0 transition-transform duration-300 group-hover:scale-x-100"></span>
        </button>
        {/* Button for About Me section navigation */}
        <button
          className="focus:outline-none bg-transparent font-bold text-white group btn btn-border-underline hidden md:block mr-2 relative"
          onClick={scrollToAboutMe}
        >
          About Me
          <span className="absolute left-0 right-0 bottom-0 h-1 bg-white transform scale-x-0 transition-transform duration-300 group-hover:scale-x-100"></span>
        </button>
        {/* Button for Experience section navigation */}
        <button
          className="focus:outline-none bg-transparent font-bold text-white group btn btn-border-underline hidden md:block mr-2 relative"
          onClick={scrollToExperience}
        >
          Experience
          <span className="absolute left-0 right-0 bottom-0 h-1 bg-white transform scale-x-0 transition-transform duration-300 group-hover:scale-x-100"></span>
        </button>
        {/* Button for Projects page navigation */}
        <button
          className="focus:outline-none bg-transparent font-bold text-white group btn btn-border-underline hidden md:block mr-2 relative"
          onClick={navigateToProjects}
        >
          Projects
          <span className="absolute left-0 right-0 bottom-0 h-1 bg-white transform scale-x-0 transition-transform duration-300 group-hover:scale-x-100"></span>
        </button>
        {/* Button for Education section navigation */}
        <button
          className="focus:outline-none bg-transparent font-bold text-white group btn btn-border-underline hidden md:block mr-2 relative"
          onClick={scrollToEducation}
        >
          Education
          <span className="absolute left-0 right-0 bottom-0 h-1 bg-white transform scale-x-0 transition-transform duration-300 group-hover:scale-x-100"></span>
        </button>
        {/* Button for Contact page navigation */}
        <button
          className="focus:outline-none bg-transparent font-bold text-white group btn btn-border-underline hidden md:block mr-2 relative"
          onClick={navigateToContact}
        >
          Contact
          <span className="absolute left-0 right-0 bottom-0 h-1 bg-white transform scale-x-0 transition-transform duration-300 group-hover:scale-x-100"></span>
        </button>
        {/* Hamburger menu button for mobile view */}
        <div className="md:hidden z-[801]">
          <Hamburger
            size={30}
            color="white"
            toggled={isSidePanelOpen}
            toggle={toggleSidePanel}
          />
        </div>
      </nav>
    </div>
  );
}

export default Topbar;
