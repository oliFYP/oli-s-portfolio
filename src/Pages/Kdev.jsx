import React, { useState, useEffect, useRef } from "react";
import Topbar from "../components/TopBar4";
import SidePanel from "../components/SidePanel2";
import kdev from "../icons/kdevimg.png";
import preview from "../img/kdev-preview.png";
import preview1 from "../img/kdev-preview1.png";
import preview2 from "../img/kdev-preview2.png";
import preview3 from "../img/kdev-preview3.png";
import preview4 from "../img/kdev-preview4.png";

import dev from "../icons/figma-icon.png";
import Footer from "../components/Footer2";
import AOS from "aos";
import "../fonts/fonts.css";

function Kdevs() {
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

  const images = [preview, preview1, preview2, preview3, preview4];
  const imageTitles = [
    "Home",
    "Client Login",
    "Client Register",
    "Email Verification",

    "Client Home",
  ];

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
      <div className="bg-gradient-to-b from-customBlueStart to-customBlueEnd">
        <div className="flex flex-wrap items-center justify-center h-full">
          <div
            data-aos="fade"
            className="max-w-md p-8 bg-opacity-0 mb-4 md:mr-4 rounded-lg flex justify-center items-center"
          >
            <img
              src={kdev}
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
              className="text-3xl text-[#25466E] mb-4"
              style={{ fontFamily: "Rubik-extrabold" }}
            >
              About This Project
            </h1>
            <p
              className="text-[#25466E]"
              style={{ fontFamily: "Rubik-semibold" }}
            >
              Kdevs "CKD Project" is a web-based application developed as a
              university group project aimed at assisting doctors in managing
              patients with Chronic Kidney Disease (CKD) and empowering patients
              to monitor their own health. As the Analyst Designer, I was
              responsible for gathering requirements from healthcare
              professionals and patients, designing the system architecture, and
              creating detailed use case diagrams and wireframes. The
              application features dashboards for both doctors and patients,
              allowing for efficient data entry, real-time CKD status updates,
              and comprehensive data analysis. This project underscores the
              importance of user-centric design and collaboration in creating
              effective healthcare solutions.
            </p>
          </div>
        </div>
        <div className="flex flex-wrap-reverse items-center justify-center h-full">
          <div
            data-aos="fade"
            className="max-w-md p-8 bg-white mb-4 rounded-xl m-2"
            style={{ marginBottom: "20px" }}
          >
            <h1
              className="text-3xl font-bold text-[#25466E] mb-4"
              style={{ fontFamily: "Rubik-extrabold" }}
            >
              Current Design
            </h1>
            <p
              className="text-[#25466E]"
              style={{ fontFamily: "Rubik-semibold" }}
            >
              The design of the CKD Tracker is distinguished by a clean and
              professional aesthetic, complemented by a color palette that
              transitions seamlessly from a deep navy blue to a vibrant sky blue
              gradient. This color scheme imbues the interface with a sense of
              calm and reliability, ideal for a medical application. The
              typography plays a crucial role in maintaining clarity and
              readability, with the Rubik font family chosen for its modern and
              straightforward appeal. Combined with intuitive navigation and
              strategically placed interactive elements, the design ensures a
              user-friendly experience tailored to the needs of both doctors and
              patients.
            </p>
          </div>
          <div
            data-aos="fade"
            className="max-w-md p-8 bg-opacity-0 mb-4 md:mr-4 rounded-lg flex flex-col justify-center items-center relative"
          >
            <button
              onClick={prevImage}
              className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-white text-[#25466E] select-none ml-2 p-2 rounded-full"
            >
              &lt;
            </button>
            <img
              src={images[currentIndex]}
              className="w-auto"
              alt="Preview img"
              style={{ maxHeight: "100%", maxWidth: "100%" }}
            />
            <button
              onClick={nextImage}
              className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-white text-[#25466E] select-none mr-2 p-2 rounded-full"
            >
              &gt;
            </button>
            <p
              className="text-white mt-4"
              style={{ fontFamily: "Rubik-extrabold" }}
            >
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
            className="max-w-md p-8 bg-white mb-4 rounded-xl m-2"
            style={{ marginBottom: "20px" }}
          >
            <h1
              className="text-3xl font-bold text-[#25466E] mb-4"
              style={{ fontFamily: "Rubik-extrabold" }}
            >
              Project Technology Stack Overview
            </h1>
            <p
              className="text-[#25466E]"
              style={{ fontFamily: "Rubik-semibold" }}
            >
              Figma served as our primary design tool for developing the CKD
              project, offering a robust platform that facilitated collaborative
              and efficient project workflows. Its cloud-based nature allowed
              our team to seamlessly work together in real-time, regardless of
              our physical locations, which was particularly advantageous for a
              group project conducted remotely. Figma's extensive library of
              design components and its intuitive interface enabled us to
              swiftly create wireframes, prototypes, and high-fidelity mockups.
              This collaborative capability not only streamlined our design
              process but also encouraged continuous feedback and iteration,
              ensuring that our final product met both functional and aesthetic
              requirements effectively.
            </p>
          </div>
        </div>
      </div>
      <Footer />
    </section>
  );
}

export default Kdevs;
