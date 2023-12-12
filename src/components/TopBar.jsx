import React from "react";
import { useNavigate } from "react-router-dom";

import { Squash as Hamburger } from "hamburger-react";

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
  return (
    <div className="absolute top-0 left-0 w-full h-full z-999">
      <nav className="absolute top-0 right-0 m-4 flex">
        <button className="focus:outline-none bg-transparent font-bold text-white group btn btn-border-underline hidden md:block mr-2 relative">
          Home
          <span className="absolute left-0 right-0 bottom-0 h-1 bg-white transform scale-x-0 transition-transform duration-300 group-hover:scale-x-100"></span>
        </button>
        <button
          className="focus:outline-none bg-transparent font-bold text-white group btn btn-border-underline  hidden md:block mr-2 relative"
          onClick={scrollToAboutMe}
        >
          About Me
          <span className="absolute left-0 right-0 bottom-0 h-1 bg-white transform scale-x-0 transition-transform duration-300 group-hover:scale-x-100"></span>
        </button>
        <button
          className="focus:outline-none bg-transparent font-bold text-white group btn btn-border-underline hidden md:block mr-2 relative"
          onClick={scrollToExperience}
        >
          Experience & Projects
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
