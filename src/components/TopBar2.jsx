import React from "react";
import { useNavigate } from "react-router-dom";

import { Squash as Hamburger } from "hamburger-react";
import logo from "../img/OS.png";

function Topbar({
  isSidePanelOpen,
  toggleSidePanel,
  scrollToExperience,
  scrollToEducation,
  scrollToAboutMe,
}) {
  const navigate = useNavigate();

  const navigateToContact = () => {
    navigate("/contact");
  };
  const navigateToProjects = () => {
    navigate("/project");
  };
  return (
    <div className="relative bg-gradient-to-b from-neutral-900 to-slate-900 w-full h-100 z-999 flex justify-between items-center">
      <div className="relative m-4 flex">
        <img src={logo} className="h-8 mt-1 sm:h-9 sm:mt-2" alt="Logo" />
      </div>
      <nav className="top-0 right-0 flex">
        <button className="focus:outline-none bg-transparent font-bold text-white group btn btn-border-underline hidden md:block mr-2 relative">
          Home
          <span className="absolute left-0 right-0 bottom-0 h-1 bg-white transform scale-x-0 transition-transform duration-300 group-hover:scale-x-100"></span>
        </button>

        <button
          className="focus:outline-none bg-transparent font-bold text-white group btn btn-border-underline hidden md:block mr-2 relative"
          onClick={scrollToAboutMe}
        >
          About Me
          <span className="absolute left-0 right-0 bottom-0 h-1 bg-white transform scale-x-0 transition-transform duration-300 group-hover:scale-x-100"></span>
        </button>

        <button
          className="focus:outline-none bg-transparent font-bold text-white group btn btn-border-underline hidden md:block mr-2 relative"
          onClick={scrollToExperience}
        >
          Experience
          <span className="absolute left-0 right-0 bottom-0 h-1 bg-white transform scale-x-0 transition-transform duration-300 group-hover:scale-x-100"></span>
        </button>
        <button
          className="focus:outline-none bg-transparent font-bold text-white group btn btn-border-underline hidden md:block mr-2 relative"
          onClick={navigateToProjects}
        >
          Projects
          <span className="absolute left-0 right-0 bottom-0 h-1 bg-white transform scale-x-0 transition-transform duration-300 group-hover:scale-x-100"></span>
        </button>
        <button
          className="focus:outline-none bg-transparent font-bold text-white group btn btn-border-underline hidden md:block mr-2 relative"
          onClick={scrollToEducation}
        >
          Education
          <span className="absolute left-0 right-0 bottom-0 h-1 bg-white transform scale-x-0 transition-transform duration-300 group-hover:scale-x-100"></span>
        </button>

        <button
          className="focus:outline-none bg-transparent font-bold text-white group btn btn-border-underline hidden md:block mr-2 relative"
          onClick={navigateToContact}
        >
          Contact
          <span className="absolute left-0 right-0 bottom-0 h-1 bg-white transform scale-x-0 transition-transform duration-300 group-hover:scale-x-100"></span>
        </button>

        <div className="md:hidden z-[801] ">
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
