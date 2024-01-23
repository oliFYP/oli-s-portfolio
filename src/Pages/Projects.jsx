import React, { useState } from "react";
import SidePanel from "../components/SidePanel2";
import Footer from "../components/Footer";
import ProjectList from "../components/ProjectList";
import Topbar from "../components/TopBar2";

function Project() {
  const [isSidePanelOpen, setSidePanelOpen] = useState(false);

  const toggleSidePanel = () => {
    setSidePanelOpen(!isSidePanelOpen);
  };
  return (
    <div>
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
      <ProjectList />
      <Footer />
    </div>
  );
}

export default Project;
