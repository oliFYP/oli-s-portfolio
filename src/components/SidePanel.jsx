import { motion } from "framer-motion";
import React from "react";
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
      className={`top-0 right-0 w-full h-full bg-black p-20 absolute text-white h-auto flex flex-col items-center justify-center ease-in-out duration-300`}
      initial={{ x: "100%" }}
      animate={isSidePanelOpen ? { x: 0 } : { x: "100%" }}
      exit={{ x: "100%", transition: { ease: "ease-in-out", duration: 300 } }}
      style={{ zIndex: 700 }}
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
    </motion.div>
  );
}

export default SidePanel;
