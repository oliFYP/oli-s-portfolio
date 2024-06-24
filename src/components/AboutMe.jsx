import React, { useState, useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import oli from "../img/oliprofile.png";
import olibox from "../img/oli-boxing.jpg";
import oliski from "../img/oliski.jpeg";

// Array of images
const images = [oli, olibox, oliski];

// Component definition using forwardRef
const AboutMe = React.forwardRef((props, ref) => {
  // State to manage current image index
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  // Initialize AOS library on component mount
  useEffect(() => {
    AOS.init({
      duration: 1000,
    });
  }, []);

  // Auto change image every 5 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 5000);

    // Cleanup function
    return () => {
      clearInterval(interval);
    };
  }, []);

  // JSX structure for the About Me section
  return (
    <div
      // Forwarded ref for scrolling
      ref={ref}
      className="bg-black text-white p-8 sm:pr-4 sm:pl-4 pr-0 pl-0 relative"
      style={{ overflow: "hidden" }}
    >
      <div className="bg-gradient-to-r from-slate-900 to-slate-700 m-5 sm:m-8 p-5 sm:p-8 rounded-xl relative">
        {/* Title */}
        <h1
          data-aos="fade"
          className="text-3xl font-bold mb-10 text-white text-center md:text-left "
          style={{ fontFamily: "Titillium" }}
        >
          About Me
        </h1>

        {/* Image carousel and description */}
        <div className="mb-6 flex flex-col md:flex-row items-center">
          {/* Map through images */}
          {images.map((image, index) => (
            <img
              key={index}
              src={image}
              alt="oli"
              // Conditional styling to show current image
              className={`rounded-xl w-[200px] mb-10 h-auto md:mr-7 sm:w-auto shadow-xl sm:h-[300px] md:mt-[60px] absolute transition-opacity duration-500 ease-in-out ${
                index === currentImageIndex ? "opacity-100" : "opacity-0"
              }`}
              style={{ transition: "opacity 0.5s ease-in-out" }}
            />
          ))}
          {/* Text description */}
          <div className="flex flex-col md:ml-[250px] sm:mt-[320px] mt-[290px] md:mt-auto text-center sm:text-left">
            {/* Personal introduction */}
            <p
              data-aos="fade"
              className="text-lg "
              style={{ fontFamily: "Titillium-bold" }}
            >
              Hey there! I'm Olivier Smith, a Computer Science enthusiast from
              Briançon, France, with three years of UK-based academic experience
              in the tech realm. My passion lies in software development,
              particularly Front-end development, where I channel my creativity
              into crafting seamless digital experiences.
            </p>
            {/* Career aspirations */}
            <p
              data-aos="fade"
              className="text-lg mt-5"
              style={{ fontFamily: "Titillium-bold" }}
            >
              Driven by a genuine desire to contribute to innovative projects,
              collaborate with like-minded individuals, and bring a unique
              perspective to the tech landscape, I am ready to dive into the
              world of Front-end development.
            </p>
            {/* Personal interests */}
            <p
              data-aos="fade"
              className="text-lg mt-5"
              style={{ fontFamily: "Titillium-bold" }}
            >
              On a personal note, I've also spent five years honing my skills in
              boxing, participating in several bouts, and embracing the thrill
              of competition. Additionally, skiing has been a lifelong passion,
              marked by victories in regional races and the honor of opening the
              British Army ski race. These experiences have only fueled my
              commitment to excellence and continuous learning.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
});

export default AboutMe;
