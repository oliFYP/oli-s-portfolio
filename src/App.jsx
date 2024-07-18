import React, { lazy, Suspense } from "react";
import { HashRouter as Router, Route, Routes } from "react-router-dom";
import PacmanLoader from "react-spinners/PacmanLoader";

// Lazy load the components
const Home = lazy(() => import("./Pages/Home"));
const Contact = lazy(() => import("./Pages/Contact"));
const Project = lazy(() => import("./Pages/Projects"));
const AOFitness = lazy(() => import("./Pages/AOfitness"));
const Construction = lazy(() => import("./Pages/construction"));
const Kdevs = lazy(() => import("./Pages/Kdev"));

function App() {
  return (
    <div>
      <Router>
        <Suspense
          fallback={
            <div className="absolute top-0 left-0 w-full h-full flex justify-center items-center bg-black">
              <PacmanLoader color="#ffffff" />
            </div>
          }
        >
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/project" element={<Project />} />
            <Route path="/aofitness" element={<AOFitness />} />
            <Route path="/construction" element={<Construction />} />
            <Route path="/kdevs" element={<Kdevs />} />
          </Routes>
        </Suspense>
      </Router>
    </div>
  );
}

export default App;
