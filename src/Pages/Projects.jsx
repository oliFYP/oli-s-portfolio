import React, { useState } from "react";
import { PacmanLoader } from "react-spinners";
import ProjectCardSkeleton from "../components/ProjectCardSkeleton";
import Footer from "../components/Footer";
import ProjectList from "../components/ProjectList";

function Project() {
  return (
    <div>
      <ProjectList />
      <Footer />
    </div>
  );
}

export default Project;
