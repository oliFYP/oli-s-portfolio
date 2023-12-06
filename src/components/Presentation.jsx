import React, { useEffect } from "react";
import logo1 from "../img/insta.png";
import logo2 from "../img/github.png";
import oli from "../img/oli.jpg";
import CV from "../CV/Olivier-Smith-CV-2023.pdf";
import logo3 from "../img/linkedIn.png";
import AOS from "aos";
import "aos/dist/aos.css";

function Presentation() {
  useEffect(() => {
    AOS.init({
      duration: 1000,
    });
  }, []);

  const openInstagramProfile = () => {
    const instagramProfileURL = "https://www.instagram.com/olismth/";
    window.open(instagramProfileURL, "_blank");
  };
  const openLinkedInProfile = () => {
    const linkedInProfileURL =
      "https://www.linkedin.com/in/olivier-smith-2378b8205/";
    window.open(linkedInProfileURL, "_blank");
  };
  const openGithubProfile = () => {
    const githubProfileURL = "https://github.com/oliFYP";
    window.open(githubProfileURL, "_blank");
  };
  const downloadCV = () => {
    const cvFileName = "Olivier-Smith-CV-2023.pdf";
    const cvFilePath = CV;
    const anchor = document.createElement("a");
    anchor.download = cvFileName;
    anchor.href = cvFilePath;
    anchor.click();
  };

  return (
    <div className="absolute top-0 left-0 w-full h-full flex sm:flex-row flex-col items-center justify-center text-white">
      <div className="sm:w-1/2 sm:hidden  block ml-0 sm:ml-[20px]">
        <img
          src={oli}
          alt="Oli"
          data-aos="fade-down-left"
          className="rounded-full sm:ml-[40px] lg:ml-[150px] w-[150px] h-auto mb-4 ml-0 sm:w-auto  sm:h-[300px]"
        />
      </div>
      <div className="sm:w-1/2 text-center ml-0 md-[70px] lg:ml-[100px] sm:text-left ">
        <h1
          data-aos="fade-down-right"
          className="select-none text-white font-bold text-4xl md:text-6xl lg:text-6xl max-w-md sm:pl-4"
        >
          Hi there!
        </h1>
        <div
          data-aos="fade-left"
          className="select-none text-white font-bold mt-3 text-lg lg:text-3xl lg:mt-10 max-w-md sm:pl-4"
        >
          <p>
            I'm Olivier, a computer science graduate from Kingston University
          </p>
        </div>
        <div className="flex items-center sm:justify-start justify-center">
          <button
            data-aos="fade-right"
            data-aos-offset="0"
            className="rounded-2xl ml-0 sm:ml-5 bg-white mt-5 sm:mt-10 w-40 h-10 font-bold text-black flex items-center justify-center"
            onClick={downloadCV}
            style={{ zIndex: 699 }}
          >
            Download CV
          </button>
        </div>
        <div className="mt-3 flex items-center justify-center  sm:justify-start">
          <img
            src={logo1}
            className="h-8 mr-2 sm:ml-8 ml-0 cursor-pointer transition duration-500 ease-in-out transform hover:scale-110 hover:shadow-white"
            alt="Logo 1"
            onClick={openInstagramProfile}
            style={{ zIndex: 698 }}
          />
          <img
            src={logo2}
            className="h-8 mr-2 cursor-pointer transition duration-500 ease-in-out transform hover:scale-110 hover:shadow-white"
            alt="Logo 2"
            onClick={openGithubProfile}
            style={{ zIndex: 697 }}
          />
          <img
            src={logo3}
            className="h-8 cursor-pointer transition duration-500 ease-in-out transform hover:scale-110 hover:shadow-white-xl"
            alt="Logo 3"
            onClick={openLinkedInProfile}
            style={{ zIndex: 696 }}
          />
        </div>
      </div>
      <div className="sm:w-1/2 sm:ml-[20px] ml-0 sm:block hidden">
        <img
          src={oli}
          alt="Oli"
          className="rounded-full sm:ml-[40px] lg:ml-[150px] w-[150px] h-auto ml-[0px] sm:w-auto  sm:h-[300px]"
        />
      </div>
    </div>
  );
}

export default Presentation;
