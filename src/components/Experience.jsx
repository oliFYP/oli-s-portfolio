import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { useNavigate } from "react-router-dom";
import icon1 from "../icons/icon1_.png";
import icon2 from "../icons/icon2_.png";
import icon3 from "../icons/icon3_.png";
import icon4 from "../icons/icon4_.png";
import icon5 from "../icons/icon5_.png";
import icon6 from "../icons/icon6_.png";
import icon7 from "../icons/icon7_.png";
import icon8 from "../icons/icon8_.png";
import icon9 from "../icons/icon9_.png";
import icon10 from "../icons/icon10_.png";
import icon19 from "../icons/icon19_.png";

// Component definition using forwardRef
const Experience = React.forwardRef((props, ref) => {
  // Hook for navigation
  const navigate = useNavigate();

  // Function to navigate to project page and scroll to top
  const navigateToProject = () => {
    navigate("/project");
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  // Initialize AOS library on component mount
  useEffect(() => {
    AOS.init({
      duration: 1000,
    });
  }, []);

  // Array of icon sources and corresponding titles
  const iconSources = [
    icon1,
    icon2,
    icon3,
    icon4,
    icon5,
    icon6,
    icon7,
    icon8,
    icon9,
    icon10,
    icon19,
  ];
  const titles = [
    "HTML",
    "CSS",
    "JavaScript",
    "React",
    "Python",
    "Tailwind",
    "Java",
    "Dart",
    "Firebase",
    "MATLAB",
    "Flutter",
  ];

  // JSX structure for the Software Development tools section
  return (
    <div
      // Forwarded ref for scrolling
      ref={ref}
      className="bg-black h-auto p-6"
      style={{ overflow: "hidden", fontFamily: "Titillium" }}
    >
      {/* Container to center content */}
      <div className="max-w-5xl mx-auto">
        {/* Section title */}
        <h1
          // Animate title on fade right
          data-aos="fade-right"
          className="text-3xl mt-5 font-bold mb-4 text-white sm:text-left text-center"
        >
          Software Development tools
        </h1>
        {/* Divider line */}
        <div
          // Animate divider line on fade right
          data-aos="fade-right"
          className="flex justify-center sm:justify-start"
        >
          <div className="bg-white h-1 sm:w-full w-20 mb-6 mt-2"></div>
        </div>
        {/* Container for icons */}
        <div className="flex flex-wrap justify-center">
          {/* Map through icon sources */}
          {iconSources.map((icon, index) => (
            <div key={index} className="w-1/2 md:w-1/4 lg:w-1/5 p-2 ">
              {/* Icon container */}
              <div
                className="w-32 h-32 md:w-40 md:h-40 lg:w-48 lg:h-48 bg-gradient-to-r from-slate-900 to-slate-700 flex flex-col items-center justify-center cursor-pointer rounded-xl mx-auto"
                onClick={navigateToProject}
              >
                {/* Icon */}
                <img
                  src={icon}
                  alt={`Icon ${index + 1}`}
                  // Animate icons on fade up with staggered delays
                  className="w-24 h-24 lg:p-4 lg:pb-0 p-2 sm:pb-0 pb-0 md:w-32 md:h-32 lg:w-40 lg:h-40 object-contain"
                  data-aos={`fade-up-${index * 2}`}
                />
                {/* Icon title */}
                <div className="text-white font-bold text-center  mb-3">
                  {titles[index]}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
});

export default Experience;
