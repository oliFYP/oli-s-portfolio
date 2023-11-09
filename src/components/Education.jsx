import React, { useState, useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';



function Education() {
 
    useEffect(() => {
        AOS.init({
          
          duration: 1000, 
        });
      }, []);

  return (
    
  <div  className="bg-black h-auto p-6">
      <div className="max-w-3xl mx-auto">
        <h2 data-aos="fade-down" className="text-2xl font-bold mb-4">Education History</h2>

        <div  className="mb-6">
          <h3 data-aos="fade-left" className="text-xl font-semibold">
            BSc Computer Science with Honours
          </h3>
          <p data-aos="fade-right" >Kingston University (2020 - 2023)</p>

          <ul className="list-disc pl-6 mt-2">
            <li data-aos="fade-left">2020-2021: Computer Fundamentals, Programming, Requirements Analysis and Design, Professional Environments.</li>
            <li data-aos="fade-right">2021-2022: Computing Systems, Programming II, Networking Concepts, Professional Environments II.</li>
            <li data-aos="fade-left">2022-2023: Internet Services and Protocols, Cryptography and Network Security, Software Development, Final Year Project.</li>
          </ul>
        </div>

        <div className="mb-6">
          <h3 data-aos="fade-right" className="text-xl font-semibold ">Baccalaureat Technologique in Business Management</h3>
          <p data-aos="fade-left">Lycee d'Altitude Briancon (2017 - 2020)</p>

          <ul data-aos="fade-right" className="list-disc pl-6 mt-2">
            <li>Modules: Law, Economics, Finances, Math, Italian, Management, History and Geography, English, Italian.</li>
          </ul>
        </div>
      </div>
    </div>

  );
}

export default Education;