import { motion } from "framer-motion";
import React from "react";
import exit from "../icons/exit.png";
import { useNavigate } from "react-router-dom";

function SidePanel({
  isSidePanelOpen,
  toggleSidePanel,
  scrollToExperience,
  scrollToEducation,
}) {
  const navigate = useNavigate();

  const navigateToContact = () => {
    navigate("/contact");
  };

  return (
    <motion.div
      className={`top-0 right-0 w-full h-full bg-black p-20 absolute text-white h-auto  flex flex-col items-center justify-center ease-in-out duration-300 translate-x-0`}
      initial={{ y: "-100%" }}
      animate={isSidePanelOpen ? { y: 0 } : { y: "-100%" }}
      exit={{ y: "-100%" }}
      style={{ zIndex: 999 }}
    >
      <button className="bg-transparent font-bold text-white p-4 group btn btn-border-underline relative my-2 w-full">
        Home
        <span className="absolute left-0 right-0 bottom-0 h-1 bg-white transform scale-x-0 transition-transform duration-300 group-hover:scale-x-100"></span>
      </button>
      <button
        className="bg-transparent font-bold text-white p-4 group btn btn-border-underline relative my-2 w-full"
        onClick={scrollToExperience}
      >
        Experience & Projects
        <span className="absolute left-0 right-0 bottom-0 h-1 bg-white transform scale-x-0 transition-transform duration-300 group-hover:scale-x-100"></span>
      </button>
      <button
        className="bg-transparent font-bold text-white p-4 group btn btn-border-underline relative my-2  w-full"
        onClick={scrollToEducation}
      >
        Education
        <span className="absolute left-0 right-0 bottom-0 h-1 bg-white transform scale-x-0 transition-transform duration-300 group-hover:scale-x-100"></span>
      </button>
      <button className="bg-transparent font-bold text-white p-4 group btn btn-border-underline relative my-2  w-full">
        About Me
        <span className="absolute left-0 right-0 bottom-0 h-1 bg-white transform scale-x-0 transition-transform duration-300 group-hover:scale-x-100"></span>
      </button>
      <button
        className="bg-transparent font-bold text-white p-4 group btn btn-border-underline relative my-2  w-full"
        onClick={navigateToContact}
      >
        Contact
        <span className="absolute left-0 right-0 bottom-0 h-1 bg-white transform scale-x-0 transition-transform duration-300 group-hover:scale-x-100"></span>
      </button>
      <img
        src={exit}
        className="bg-transparent p-4 my-2 w-auto h-20 cursor-pointer"
        onClick={() => toggleSidePanel()}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
      />
    </motion.div>
  );
}

export default SidePanel;
