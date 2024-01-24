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

const Experience = React.forwardRef((props, ref) => {
  const navigate = useNavigate();

  const navigateToProject = () => {
    navigate("/project");
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };
  useEffect(() => {
    AOS.init({
      duration: 1000,
    });
  }, []);

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

  return (
    <div
      ref={ref}
      className="bg-black h-auto p-6"
      style={{ overflow: "hidden" }}
    >
      <div className="max-w-5xl mx-auto">
        <h1
          data-aos="fade-right"
          className="text-3xl mt-5 font-bold mb-4 text-white sm:text-left text-center"
        >
          Software Development tools
        </h1>
        <div
          data-aos="fade-right"
          className="flex justify-center sm:justify-start"
        >
          <div className="bg-white h-1 sm:w-full w-20 mb-6 mt-2"></div>
        </div>

        <div className="flex flex-wrap justify-center">
          {iconSources.map((icon, index) => (
            <div key={index} className="w-1/2 md:w-1/4 lg:w-1/5 p-2 ">
              <div
                className="w-32 h-32 md:w-40 md:h-40 lg:w-48 lg:h-48 bg-gradient-to-r from-slate-900 to-slate-700 flex flex-col items-center justify-center cursor-pointer rounded-xl mx-auto"
                onClick={navigateToProject}
              >
                <img
                  src={icon}
                  alt={`Icon ${index + 1}`}
                  className="w-24 h-24 sm:p-4 p-2 sm:pb-0 md:w-32 md:h-32 lg:w-40 lg:h-40 object-contain"
                  data-aos={`fade-up-${index * 2}`}
                />
                <div className="text-white font-bold text-center mt-1 mb-3">
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
