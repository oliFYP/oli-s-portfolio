import React, { useState } from "react";
import { PacmanLoader } from "react-spinners";
import ProjectCardSkeleton from "../components/ProjectCardSkeleton";
import Footer from "../components/Footer";
import ProjectList from "../components/ProjectList";
import Topbar from "../components/TopBar2";

function Project() {
  return (
    <div>
      <Topbar />
      <ProjectList />
      <Footer />
    </div>
  );
}

export default Project;
