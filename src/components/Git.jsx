import AOS from "aos";
import "aos/dist/aos.css";
import React, { useEffect } from "react";

import icon13 from "../icons/icon13.png";
import icon14 from "../icons/icon14.png";

function Git() {
  useEffect(() => {
    AOS.init({
      duration: 1000,
    });
  }, []);

  const iconSources = [icon13, icon14];
  const titles = ["Github", "GitLab"];

  return (
    <div className="bg-black h-auto p-6" style={{ overflow: "hidden" }}>
      <div className="max-w-5xl mx-auto">
        <h1
          data-aos="fade-left"
          className="text-3xl font-bold mt-10 mb-4 text-white sm:text-left text-center"
        >
          Version Control
        </h1>
        <div
          data-aos="fade-left"
          className="flex justify-center sm:justify-start"
        >
          <div className="bg-white h-1 sm:w-full w-20 dm:w-full mb-6 mt-2"></div>
        </div>
        <div className="flex flex-wrap justify-center">
          {iconSources.map((icon, index) => (
            <div key={index} className="w-1/2 md:w-1/4 lg:w-1/5 p-2 ">
              <div className="w-32 h-32 md:w-40 md:h-40 lg:w-48 lg:h-48 bg-gradient-to-r from-slate-900 to-slate-700 flex flex-col items-center justify-center cursor-pointer rounded-xl mx-auto">
                <img
                  src={icon}
                  alt={`Icon ${index + 1}`}
                  className="w-24 h-24 lg:p-4 lg:pb-0 p-2 sm:pb-0 pb-0 md:w-32 md:h-32 lg:w-40 lg:h-40 object-contain"
                  data-aos={`fade-up-${index * 2}`}
                />
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
}

export default Git;
