import { motion } from "framer-motion";
import React from "react";
import { useNavigate } from "react-router-dom";
import {
  FaHome,
  FaBriefcase,
  FaGraduationCap,
  FaUser,
  FaEnvelope,
} from "react-icons/fa"; // Importing icons from react-icons

function SidePanel({
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
    <motion.div
      className={`top-0 right-0 w-full h-full bg-black pl-10 pr-10 absolute text-white h-auto flex flex-col items-start justify-center ease-in-out duration-300`} // Styling for the side panel
      initial={{ x: "100%" }} // Initial animation state (off-screen to the right)
      animate={isSidePanelOpen ? { x: 0 } : { x: "100%" }} // Animation state based on whether the side panel is open or closed
      exit={{ x: "100%", transition: { ease: "ease-in-out", duration: 300 } }} // Exit animation state
      style={{ zIndex: 700 }} // Ensuring the side panel appears on top
    >
      {/* Button for Home navigation */}
      <button className="bg-transparent font-bold flex flex-row text-white p-4 border-b-white rounded-none my-2 w-full">
        <FaHome className="mr-5 mt-[5px]" /> Home
      </button>
      {/* Button for About Me section navigation */}
      <button
        className="bg-transparent font-bold flex flex-row text-white p-4 border-b-white rounded-none my-2 w-full"
        onClick={scrollToAboutMe}
      >
        <FaUser className="mr-5 mt-[5px]" /> About Me
      </button>
      {/* Button for Experience section navigation */}
      <button
        className="bg-transparent font-bold flex flex-row text-white p-4 border-b-white rounded-none my-2 w-full"
        onClick={scrollToExperience}
      >
        <FaBriefcase className="mr-5 mt-[5px]" /> Experience
      </button>
      {/* Button for Projects page navigation */}
      <button
        className="bg-transparent font-bold flex flex-row text-white p-4 border-b-white rounded-none my-2 w-full"
        onClick={navigateToProjects}
      >
        <FaBriefcase className="mr-5 mt-[5px]" /> Projects
      </button>
      {/* Button for Education section navigation */}
      <button
        className="bg-transparent font-bold flex flex-row text-white p-4 border-b-white rounded-none border-b my-2 w-full"
        onClick={scrollToEducation}
      >
        <FaGraduationCap className="mr-5 mt-[5px]" /> Education
      </button>
      {/* Button for Contact page navigation */}
      <button
        className="bg-transparent font-bold flex flex-row text-white border-b-white rounded-none p-4 my-2 w-full"
        onClick={navigateToContact}
      >
        <FaEnvelope className="mr-5 mt-[5px]" /> Contact
      </button>
    </motion.div>
  );
}

export default SidePanel;
