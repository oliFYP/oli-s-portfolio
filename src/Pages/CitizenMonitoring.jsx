import React, { useState } from "react";
import Topbar from "../components/TopBar2";
import Footer from "../components/Footer";
import worker from "../icons/worker.png";

function CitizenMonitoring() {
  const [isSidePanelOpen, setSidePanelOpen] = useState(false);

  const toggleSidePanel = () => {
    setSidePanelOpen(!isSidePanelOpen);
  };
  return (
    <section
      className="relative min-h-screen bg-black"
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
      <div className="flex flex-col justify-center items-center min-h-screen bg-black px-4">
        <img
          src={worker}
          alt="Worker Icon"
          className="w-24 h-24 sm:w-32 sm:h-32"
        />
        <p className="text-white text-center text-sm sm:text-lg mt-4">
          Work in Progress
        </p>
      </div>
      <Footer />
    </section>
  );
}

export default CitizenMonitoring;
