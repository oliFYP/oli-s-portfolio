import React, { useState, useEffect, useRef } from "react";
import Topbar from "../components/TopBar2";
import SidePanel from "../components/SidePanel2";
import aofitness from "../icons/aofitness-icon.png";
import preview from "../img/preview.png";
import dev from "../img/dev.png";
import Footer from "../components/Footer";

function Aofitness() {
  const [isSidePanelOpen, setSidePanelOpen] = useState(false);
  const [containerHeight, setContainerHeight] = useState("auto");
  const textContainerRef = useRef(null);

  useEffect(() => {
    if (textContainerRef.current) {
      setContainerHeight(textContainerRef.current.offsetHeight);
    }
  }, []);

  const toggleSidePanel = () => {
    setSidePanelOpen(!isSidePanelOpen);
  };
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <section
      className="relative h-auto bg-black"
      style={{ overflow: "hidden", zIndex: 200 }}
    >
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
      <div className="flex flex-wrap items-center justify-center h-full">
        <div
          className="max-w-md p-8 bg-black mb-4 md:mr-4 rounded-lg flex justify-center items-center"
          style={{ height: containerHeight }}
        >
          <img
            src={aofitness}
            className="w-auto"
            alt="Aofitness Icon"
            style={{ maxHeight: "100%", maxWidth: "100%" }}
          />
        </div>
        <div
          ref={textContainerRef}
          className="max-w-md p-8 bg-[#27292B] mb-4 rounded-xl"
          style={{ marginBottom: "20px" }}
        >
          <h1 className="text-3xl font-bold mb-4">About This Project</h1>
          <p>
            The new design of AO Fitness incorporates a sleek and modern
            aesthetic with a sophisticated color palette. The primary colors,
            dark charcoal (27292B) and ebony (1B1C1E), provide a strong, bold
            background and add depth, reflecting our dedication and focus on
            users' fitness journeys. Accented with sandy gold (C4AE78), the
            design introduces sophistication and warmth, highlighting key
            elements for an intuitive user experience. This visual overhaul not
            only enhances the platform's appeal but also ensures a more engaging
            and user-friendly interface, aligning with our commitment to
            high-quality service.
          </p>
        </div>
      </div>
      <div className="flex flex-wrap items-center justify-center h-full">
        <div
          className="max-w-md p-8 bg-[#27292B] mb-4 rounded-xl"
          style={{ marginBottom: "20px" }}
        >
          <h1 className="text-3xl font-bold mb-4">Current Design</h1>
          <p>
            AO fitness is a fitness platform that personalises your fitness
            journey by matching you with a coach tailored to your specific needs
            and goals. Whether you're interested in boxing, general strength
            training, or weight loss, the platform promises to guide you towards
            the right coach to help you achieve your aspirations. With a
            commitment to your success, the platform emphasises its dedication,
            passion, and expertise to support and elevate your fitness
            endeavours, ensuring your journey starts on the right path.
          </p>
        </div>
        <div className="max-w-md p-8 bg-black mb-4 md:mr-4 rounded-lg flex justify-center items-center">
          <img
            src={preview}
            className="w-auto"
            alt="Preview img"
            style={{ height: "250px" }}
          />
        </div>
      </div>
      <div className="flex flex-wrap items-center justify-center h-full">
        <div
          className="max-w-md p-8 bg-black mb-4 md:mr-4 rounded-lg flex justify-center items-center"
          style={{ height: containerHeight }}
        >
          <img
            src={dev}
            className="w-auto"
            alt="Aofitness Icon"
            style={{ maxHeight: "100%", maxWidth: "100%" }}
          />
        </div>
        <div
          ref={textContainerRef}
          className="max-w-md p-8 bg-[#27292B] mb-4 rounded-xl"
          style={{ marginBottom: "20px" }}
        >
          <h1 className="text-3xl font-bold mb-4">
            Project Technology Stack Overview
          </h1>
          <p>
            This project was developed using React for building a dynamic and
            responsive user interface, ensuring a seamless and engaging user
            experience. Tailwind CSS was employed to streamline the styling
            process, allowing for efficient and customisable design
            implementation that aligns with our modern aesthetic. Firebase was
            integrated to handle backend functionalities, providing a robust and
            scalable database solution, as well as authentication and hosting
            services. This technology stack ensures that the AO Fitness platform
            is not only visually appealing but also highly functional, secure,
            and capable of scaling with user growth.
          </p>
        </div>
      </div>
      <Footer />
    </section>
  );
}

export default Aofitness;
