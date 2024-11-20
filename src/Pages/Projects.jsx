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
      <Topbar />

      <ProjectList />
      <Footer />
    </div>
  );
}

export default Project;
