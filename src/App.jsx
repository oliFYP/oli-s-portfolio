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
import UOOM from "./Pages/University";
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
          <Route path="/fran" element={<Fran />} />
          <Route path="/fit4u" element={<Fit4U />} />
          <Route path="/5g-vs-4g" element={<Matlab />} />
          <Route path="/weather" element={<Weather />} />
          <Route path="/event-manager" element={<EventManager />} />
          <Route path="/bank-account-oo" element={<BankAccount />} />
          <Route path="/citizen-monitoring" element={<CitizenMonitoring />} />
          <Route
            path="/customer-relationship"
            element={<CustomerRelationship />}
          />
          <Route path="/object-oriented-modeling" element={<OOM />} />
          <Route path="/university-object-oriented-model" element={<UOOM />} />
          <Route path="/bank-account" element={<BA />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
