import { HashRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./Pages/Home";
import Contact from "./Pages/Contact";
import Project from "./Pages/Projects";
import AOFitness from "./Pages/AOfitness";
import KDevs from "./Pages/Kdevs";
import KHF from "./Pages/Khf";
import VM from "./Pages/Vm";
import Fran from "./Pages/Fran";
import Fit4U from "./Pages/Fit4U";
import Matlab from "./Pages/Matlab";
import Weather from "./Pages/Weather";
import EventManager from "./Pages/EventManager";
import BankAccount from "./Pages/BankAccount";
import CitizenMonitoring from "./Pages/CitizenMonitoring";
import CustomerRelationship from "./Pages/CustomerRelationship";
import OOM from "./Pages/OOM";
import UOOM from "./Pages/UOOM";
import BA from "./Pages/BA";

function App() {
  return (
    <div>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/project" element={<Project />} />
          <Route path="/aofitness" element={<AOFitness />} />
          <Route path="/kdevs" element={<KDevs />} />
          <Route path="/khf" element={<KHF />} />
          <Route path="/vm" element={<VM />} />
          <Route path="/Fran" element={<Fran />} />
          <Route path="/Fit4U" element={<Fit4U />} />
          <Route path="/Matlab" element={<Matlab />} />
          <Route path="/Weather" element={<Weather />} />
          <Route path="/Event-Manager" element={<EventManager />} />
          <Route path="/Bank-account-oo" element={<BankAccount />} />
          <Route path="/Citizen-Monitoring" element={<CitizenMonitoring />} />
          <Route
            path="/Customer-Relationship"
            element={<CustomerRelationship />}
          />
          <Route path="/Object-Oriented-Modeling" element={<OOM />} />
          <Route path="/University-Object-Oriented-Model" element={<UOOM />} />
          <Route path="/Bank-account" element={<BA />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
