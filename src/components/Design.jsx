import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import icon11 from "../icons/icon11.png";
import icon12 from "../icons/icon12.png";

function Design() {
  // Initialize AOS library on component mount
  useEffect(() => {
    AOS.init({
      duration: 1000,
    });
  }, []);

  // Array of icon sources and corresponding titles
  const iconSources = [icon11, icon12];
  const titles = ["Adobe XD", "Figma"];

  return (
    // Section for Design & Prototyping tools
    <section
      className="bg-black h-auto p-0 p-6"
      style={{ overflow: "hidden", fontFamily: "Titillium" }}
    >
      {/* Container to center content */}
      <div className="max-w-5xl mx-auto">
        {/* Section title */}
        <h1
          // Animate title on fade right
          data-aos="fade-right"
          className="text-3xl mt-10 font-bold mb-4 text-white sm:text-left text-center"
        >
          Design & Prototyping tools
        </h1>
        {/* Divider line */}
        <div
          // Animate divider line on fade right
          data-aos="fade-right"
          className="flex justify-center sm:justify-start"
        >
          <div className="bg-white h-1 w-20 sm:w-full mb-6 mt-2"></div>
        </div>
        {/* Container for icons */}
        <div className="flex flex-wrap justify-center">
          {/* Map through icon sources */}
          {iconSources.map((icon, index) => (
            <div key={index} className="w-1/2 md:w-1/4 lg:w-1/5 p-2 ">
              {/* Icon container */}
              <div className="w-32 h-32 md:w-40 md:h-40 lg:w-48 lg:h-48 bg-gradient-to-r from-slate-900 to-slate-700 flex flex-col items-center justify-center cursor-pointer rounded-xl mx-auto">
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
    </section>
  );
}

export default Design;
