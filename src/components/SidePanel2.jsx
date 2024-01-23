import { motion } from "framer-motion";
import React from "react";
import { useNavigate } from "react-router-dom";

import {
  FaHome,
  FaBriefcase,
  FaGraduationCap,
  FaUser,
  FaEnvelope,
} from "react-icons/fa";

function SidePanel({ isSidePanelOpen, toggleSidePanel }) {
  const navigate = useNavigate();

  const navigateToHome = () => {
    navigate("/");
  };
  const navigateToAboutMe = () => {
    navigate("/#about");
  };
  const navigateToExperience = () => {
    navigate("/#experience");
  };
  const navigateToEducation = () => {
    navigate("/#education");
  };
  const navigateToContact = () => {
    navigate("/contact");
  };
  const navigateToProjects = () => {
    navigate("/project");
  };
  return (
    <motion.div
      className={`top-0 right-0 w-full h-full bg-black pl-10 pr-10 absolute text-white h-auto flex flex-col items-start justify-center ease-in-out duration-300`}
      initial={{ x: "100%" }}
      animate={isSidePanelOpen ? { x: 0 } : { x: "100%" }}
      exit={{ x: "100%", transition: { ease: "ease-in-out", duration: 300 } }}
      style={{ zIndex: 700 }}
    >
      <button
        className="bg-transparent font-bold flex flex-row text-white p-4 border-b-white rounded-none my-2  w-full"
        onClick={navigateToHome}
      >
        <FaHome className="mr-5 mt-[5px]" /> Home
      </button>
      <button
        className="bg-transparent font-bold flex flex-row text-white p-4 border-b-white rounded-none my-2  w-full"
        onClick={navigateToAboutMe}
      >
        <FaUser className="mr-5 mt-[5px]" /> About Me
      </button>
      <button
        className="bg-transparent font-bold flex flex-row text-white p-4 border-b-white rounded-none  my-2 w-full"
        onClick={navigateToExperience}
      >
        <FaBriefcase className="mr-5 mt-[5px]" /> Experience
      </button>
      <button
        className="bg-transparent font-bold flex flex-row text-white p-4 border-b-white rounded-none  my-2 w-full"
        onClick={navigateToProjects}
      >
        <FaBriefcase className="mr-5 mt-[5px]" />
        Projects
      </button>
      <button
        className="bg-transparent font-bold flex flex-row text-white p-4 border-b-white rounded-none border-b my-2  w-full "
        onClick={navigateToEducation}
      >
        <FaGraduationCap className="mr-5 mt-[5px]" /> Education
      </button>

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
