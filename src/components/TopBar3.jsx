import React from "react";
import { useNavigate } from "react-router-dom";
import { Squash as Hamburger } from "hamburger-react"; // Importing the Hamburger component from hamburger-react library
import logo from "../img/OS.png"; // Importing the logo image

function Topbar3({ isSidePanelOpen, toggleSidePanel }) {
  const navigate = useNavigate(); // Hook to programmatically navigate to different routes

  // Navigation functions to different routes
  const navigateToHome = () => {
    navigate("/"); // Navigate to the Home page
  };

  const navigateToContact = () => {
    navigate("/contact"); // Navigate to the Contact page
  };
  const navigateToProjects = () => {
    navigate("/project"); // Navigate to the Projects page
  };

  return (
    <div
      // Styling the background color of the top bar
      className="relative w-full h-100 z-999 flex bg-[#1B1C1E] justify-between items-center" // Applying utility classes for layout and positioning
    >
      <div className="relative m-4 flex">
        {" "}
        {/* Container for the logo */}
        <img src={logo} className="h-8 mt-1 sm:h-9 sm:mt-2" alt="Logo" />{" "}
        {/* Logo image */}
      </div>
      <nav className="top-0 right-0 flex" style={{ fontFamily: "Titillium" }}>
        {" "}
        {/* Navigation container */}
        {/* Button for Home navigation */}
        <button
          className="focus:outline-none bg-transparent font-bold text-white group btn btn-border-underline hidden md:block mr-2 relative"
          onClick={navigateToHome}
        >
          Home
          <span className="absolute left-0 right-0 bottom-0 h-1 bg-white transform scale-x-0 transition-transform duration-300 group-hover:scale-x-100"></span>{" "}
          {/* Underline effect */}
        </button>
        {/* Button for Projects navigation */}
        <button
          className="focus:outline-none bg-transparent font-bold text-white group btn btn-border-underline hidden md:block mr-2 relative"
          onClick={navigateToProjects}
        >
          Projects
          <span className="absolute left-0 right-0 bottom-0 h-1 bg-white transform scale-x-0 transition-transform duration-300 group-hover:scale-x-100"></span>{" "}
          {/* Underline effect */}
        </button>
        {/* Button for Contact navigation */}
        <button
          className="focus:outline-none bg-transparent font-bold text-white group btn btn-border-underline hidden md:block mr-2 relative"
          onClick={navigateToContact}
        >
          Contact
          <span className="absolute left-0 right-0 bottom-0 h-1 bg-white transform scale-x-0 transition-transform duration-300 group-hover:scale-x-100"></span>{" "}
          {/* Underline effect */}
        </button>
        {/* Hamburger menu for mobile view */}
        <div className="md:hidden z-[801] mr-4">
          <Hamburger
            size={30}
            color="white"
            toggled={isSidePanelOpen}
            toggle={toggleSidePanel} // Toggle function for the side panel
          />
        </div>
      </nav>
    </div>
  );
}

export default Topbar3;
