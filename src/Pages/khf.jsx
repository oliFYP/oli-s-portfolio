import React, { useState, useEffect, useRef } from "react";
import Topbar from "../components/TopBar5";
import SidePanel from "../components/SidePanel2";
import khf from "../icons/Khf-logo.png";
import preview from "../img/khf-preview.png";
import preview1 from "../img/khf-preview1.png";
import preview2 from "../img/khf-preview2.png";
import preview3 from "../img/khf-preview3.png";

import v1 from "../img/khf-prototype.png";
import dev from "../icons/khf-dev.png";
import Footer from "../components/Footer3";
import AOS from "aos";
import "../fonts/fonts.css";
function Khf() {
  const [isSidePanelOpen, setSidePanelOpen] = useState(false);
  const [containerHeight, setContainerHeight] = useState("auto");
  const textContainerRef = useRef(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [currentIndexV, setCurrentIndexV] = useState(0);

  useEffect(() => {
    if (textContainerRef.current) {
      setContainerHeight(textContainerRef.current.offsetHeight);
    }
    AOS.init({
      duration: 1000,
    });
  }, []);

  const toggleSidePanel = () => {
    setSidePanelOpen(!isSidePanelOpen);
  };

  const images = [preview, preview1, preview2, preview3];
  const imageTitles = [
    "Home",
    "Client Login",
    "Client Register",
    "Email Verification",
    "Client Details",
    "Client Home",
  ];
  const prototype = [v1];
  const prototypeTitles = ["Prototype 1"];

  const prevPrototype = () => {
    setCurrentIndexV((prevIndex) =>
      prevIndex === 0 ? prototype.length - 1 : prevIndex - 1
    );
  };

  const nextPrototype = () => {
    setCurrentIndexV((prevIndex) =>
      prevIndex === prototype.length - 1 ? 0 : prevIndex + 1
    );
  };

  const prevImage = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  const nextImage = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
  };

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <section>
      <Topbar
        isSidePanelOpen={isSidePanelOpen}
        toggleSidePanel={toggleSidePanel}
      />

      {isSidePanelOpen && (
        <SidePanel
          isSidePanelOpen={isSidePanelOpen}
          toggleSidePanel={toggleSidePanel}
        />
      )}
      <div className="bg-gradient-to-r from-black to-gray-600">
        <div className="flex flex-wrap items-center justify-center h-full">
          <div
            data-aos="fade"
            className="max-w-md p-8 bg-opacity-0 mb-4 md:mr-4 rounded-lg flex justify-center items-center"
          >
            <img
              src={khf}
              className="w-auto"
              alt="Aofitness Icon"
              style={{ maxHeight: "100%", maxWidth: "100%" }}
            />
          </div>
          <div
            data-aos="fade"
            ref={textContainerRef}
            className="max-w-md p-8 bg-white mb-4 rounded-xl m-2"
            style={{ marginBottom: "20px" }}
          >
            <h1
              className="text-3xl font-extrabold italic text-[#666666] mb-4"
              style={{ fontFamily: "Rubik-extrabold" }}
            >
              About This Project
            </h1>
            <p className="text-black" style={{ fontFamily: "Rubik-semibold" }}>
              For my 3rd-year degree Final Year Project, I developed a
              boxing-focused app to enhance users self-confidence, health, and
              motivation. Unlike general fitness apps, this platform is tailored
              for boxing enthusiasts, offering session bookings with coaches,
              tutorials, videos, and class timetables. The app emphasizes boxing
              as an effective exercise for improving physical strength, mental
              health, and stress relief, combining the convenience of digital
              access with the personalized attention of traditional training.
            </p>
          </div>
        </div>
        <div className="flex flex-wrap-reverse items-center justify-center h-full">
          <div
            data-aos="fade"
            className="max-w-md p-8 bg-[#FFFFFF] mb-4 rounded-xl m-2"
            style={{ marginBottom: "20px" }}
          >
            <h1
              className="text-3xl font-extrabold italic text-[#666666] mb-4"
              style={{ fontFamily: "Rubik-extrabold" }}
            >
              Current Design
            </h1>
            <p className="text-black" style={{ fontFamily: "Rubik-semibold" }}>
              I designed the app's interface with a sleek and modern look,
              featuring a prominent "KHF" (King's Health & Fitness) logo at the
              top. The overall design is set against a smooth black gradient
              background that transitions subtly to a lighter shade, adding
              depth and elegance. The color scheme blends black, white, and
              subtle orange accents, creating a professional and polished
              appearance. This design choice ensures a clean and engaging user
              experience, with a minimalist aesthetic that highlights the app's
              functionality while maintaining strong visual appeal.
            </p>
          </div>
          <div
            data-aos="fade"
            className="max-w-lg p-8 bg-opacity-0 mb-4 md:mr-4 rounded-lg flex flex-col justify-center items-center relative"
          >
            <button
              onClick={prevImage}
              className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-[#FFFFFF] text-[#000000] select-none ml-2 p-2 rounded-full"
            >
              &lt;
            </button>
            <img
              src={images[currentIndex]}
              className="w-full"
              alt="Preview img"
              style={{
                maxHeight: "600px",
                maxWidth: "600px",
                objectFit: "contain",
              }}
            />
            <button
              onClick={nextImage}
              className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-[#FFFFFF] text-[#000000] select-none mr-2 p-2 rounded-full"
            >
              &gt;
            </button>
            <p className="text-[#FFFFF] mt-4" style={{ fontFamily: "Tactic" }}>
              {imageTitles[currentIndex]}
            </p>
          </div>
        </div>
        <div className="flex flex-wrap items-center justify-center h-full">
          <div
            data-aos="fade"
            className="max-w-md p-8 bg-opacity-0 mb-4 md:mr-4 rounded-lg flex justify-center items-center"
          >
            <img
              src={dev}
              className="w-auto"
              alt="Dev icons"
              style={{ maxHeight: "100%", maxWidth: "100%" }}
            />
          </div>
          <div
            data-aos="fade"
            ref={textContainerRef}
            className="max-w-md p-8 bg-[#FFFFFF] mb-4 rounded-xl m-2"
            style={{ marginBottom: "20px" }}
          >
            <h1
              className="text-3xl font-extrabold italic text-[#666666] mb-4"
              style={{ fontFamily: "Rubik-extrabold" }}
            >
              Project Technology Stack Overview
            </h1>
            <p className="text-black" style={{ fontFamily: "Rubik-semibold" }}>
              For the project, I utilized a robust technology stack to ensure a
              high-quality app. The front-end was developed using Flutter and
              Dart, providing a smooth, cross-platform experience with a single
              codebase.Figma was employed for UI/UX design, enabling a polished
              and intuitive interface. Android Studio served as the primary
              development environment, offering powerful tools for testing and
              debugging. Finally, Firebase was integrated for backend services,
              including authentication, real-time data management, and cloud
              storage, ensuring the app is secure, scalable, and responsive.
            </p>
          </div>
        </div>
        <div className="flex flex-wrap-reverse items-center justify-center h-full">
          <div
            data-aos="fade"
            className="max-w-md p-8 bg-[#FFFFFF] mb-4 rounded-xl m-2"
            style={{ marginBottom: "20px" }}
          >
            <h1
              className="text-3xl font-extrabold italic text-[#666666] mb-4"
              style={{ fontFamily: "Rubik-extrabold" }}
            >
              Previous Prototypes
            </h1>
            <p className="text-black" style={{ fontFamily: "Rubik-semibold" }}>
              The previous prototype of AO Fitness focused on matching users
              with coaches for specific fitness goals like boxing, strength
              training, and weight loss, emphasizing personalization and
              dedication. However, we are transitioning to a new design to
              enhance the overall user experience, improve navigation, and
              create a more visually appealing and modern interface, making the
              platform more intuitive and engaging for our users.
            </p>
          </div>
          <div
            data-aos="fade"
            className="max-w-md p-8 bg-opacity-0 mb-4 md:mr-4 rounded-lg flex flex-col justify-center items-center relative"
          >
            <button
              onClick={prevPrototype}
              className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-[#FFFFFF] text-[#000000] select-none ml-2 p-2 rounded-full"
            >
              &lt;
            </button>
            <img
              src={prototype[currentIndexV]}
              className="w-auto"
              alt="Preview img"
              style={{ maxHeight: "100%", maxWidth: "100%" }}
            />
            <button
              onClick={nextPrototype}
              className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-[#FFFFFF] text-[#000000] select-none p-2 mr-2 rounded-full"
            >
              &gt;
            </button>
            <p className="text-[#FFFFF] mt-4" style={{ fontFamily: "Tactic" }}>
              {prototypeTitles[currentIndexV]}
            </p>
          </div>
        </div>
      </div>
      <Footer />
    </section>
  );
}

export default Khf;
