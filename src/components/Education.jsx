import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import kingston from "../img/kingston.jpg";
import briancon from "../img/briancon.jpeg";

// Component definition using forwardRef
const Education = React.forwardRef((props, ref) => {
  // Initialize AOS library on component mount
  useEffect(() => {
    AOS.init({
      duration: 1000,
    });
  }, []);

  // JSX structure for the Education History section
  return (
    <section
      // Forwarded ref for scrolling
      ref={ref}
      className="bg-black h-auto p-6"
      style={{ overflow: "hidden" }}
    >
      {/* Container to center content */}
      <div className="max-w-5xl mx-auto">
        {/* Section title */}
        <h1
          // Animate title on fade right
          data-aos="fade-right"
          className="text-3xl font-bold mb-4 mt-10 mb-15 text-white "
          style={{ fontFamily: "Titillium" }}
        >
          Education History
        </h1>
        {/* Divider line */}
        <div data-aos="fade-right" className="flex">
          <div className="bg-white h-1 w-full mb-6 mt-2"></div>
        </div>
        {/* First education entry */}
        <div className="mb-6 flex flex-col-reverse sm:flex-row items-center">
          {/* Image for desktop view */}
          <div className="w-full sm:w-1/2 h-auto mr-4" data-aos="fade-right">
            <img
              src={kingston}
              alt="Kingston University"
              className="w-full h-auto rounded-lg"
              style={{ opacity: 0.8 }}
            />
          </div>
          {/* Education details */}
          <div className="w-full sm:w-1/2 h-auto">
            {/* Degree title */}
            <h3
              data-aos="fade-left"
              className="text-xl font-bold text-white"
              style={{ maxWidth: "100%", fontFamily: "Titillium" }}
            >
              BSc Computer Science with Honours
            </h3>
            {/* University and date */}
            <p
              className="text-xl font-semibold text-white"
              data-aos="fade-right"
              style={{ maxWidth: "100%", fontFamily: "Titillium" }}
            >
              Kingston University (2020 - 2023)
            </p>
            {/* List of modules */}
            <ul
              className="list-disc pl-6 mt-2 list-none text-white"
              style={{ fontFamily: "Titillium-bold" }}
            >
              <li data-aos="fade-left">
                2020-2021: Computer Fundamentals, Programming, Requirements
                Analysis and Design, Professional Environments.
              </li>
              <li data-aos="fade-right">
                2021-2022: Computing Systems, Programming II, Networking
                Concepts, Professional Environments II.
              </li>
              <li data-aos="fade-left" className="mb-10 sm:mb-5">
                2022-2023: Internet Services and Protocols, Cryptography and
                Network Security, Software Development, Final Year Project.
              </li>
            </ul>
          </div>
        </div>

        {/* Second education entry */}
        <div className="mb-6 flex flex-col-reverse sm:flex-row items-center">
          {/* Image for mobile view */}
          <div
            className="w-full sm:hidden sm:w-1/3 h-auto ml-4"
            data-aos="fade-right"
          >
            <img
              src={briancon}
              alt="Baccalaureat Technologique"
              className="w-full h-auto rounded-lg"
              style={{ opacity: 0.8 }}
            />
          </div>
          {/* Education details */}
          <div className="w-full sm:w-2/3" style={{ overflow: "hidden" }}>
            {/* Degree title */}
            <h3
              data-aos="fade-left"
              className="text-xl font-bold text-white"
              style={{ maxWidth: "100%", fontFamily: "Titillium" }}
            >
              Baccalaureat Technologique in Business Management (With
              Distinction)
            </h3>
            {/* School and date */}
            <p
              data-aos="fade-right"
              className="text-xl font-semibold text-white"
              style={{ maxWidth: "100%", fontFamily: "Titillium" }}
            >
              Lycee d'Altitude Briancon (2017 - 2020)
            </p>
            {/* List of modules */}
            <ul
              data-aos="fade-left"
              className="list-none list-disc pl-6 mt-2 mb-10 text-white"
              style={{ fontFamily: "Titillium-bold" }}
            >
              <li>
                Modules: Law, Economics, Finances, Math, Italian, Management,
                History and Geography, English, French.
              </li>
            </ul>
          </div>
          {/* Image for desktop view */}
          <div
            className="w-full hidden sm:block sm:w-1/3 h-auto ml-4"
            data-aos="fade-left"
          >
            <img
              src={briancon}
              alt="Baccalaureat Technologique"
              className="w-full h-auto rounded-lg"
            />
          </div>
        </div>
      </div>
    </section>
  );
});

export default Education;
