import { HashRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./Pages/Home";
import Contact from "./Pages/Contact";
import Project from "./Pages/Projects";
import AOFitness from "./Pages/AOfitness";
import Construction from "./Pages/construction";

function App() {
  return (
    <div>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/project" element={<Project />} />
          <Route path="/aofitness" element={<AOFitness />} />
          <Route path="/Construction" element={<Construction />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
