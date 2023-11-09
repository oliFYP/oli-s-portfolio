import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import kingston from '../img/kingston.jpg';
import briancon from '../img/briancon.jpeg';

function Education() {
  useEffect(() => {
    AOS.init({
      duration: 1000,
    });
  }, []);

  return (
    <div className="bg-black h-auto p-6" style={{ overflow: 'hidden' }}>
      <div className="max-w-5xl mx-auto">
        <h1 data-aos="fade-down" className="text-2xl font-bold mb-4">
          Education History
        </h1>

        <div className="mb-6 flex flex-col-reverse sm:flex-row items-center">
          <div
            className="w-full sm:w-1/2 h-auto mr-4"
            data-aos="fade-right"
     
          >
            <img
              src={kingston}
              alt="Kingston University"
              className="w-full h-auto rounded-lg"
              style={{ opacity: 0.8 }}
            />
          </div>
          <div className="w-full sm:w-1/2 h-auto">
            <h3 data-aos="fade-left" className="text-xl font-semibold" style={{ maxWidth: '100%' }}>
              BSc Computer Science with Honours
            </h3>
            <p data-aos="fade-right" style={{ maxWidth: '100%' }}>Kingston University (2020 - 2023)</p>

            <ul className="list-disc pl-6 mt-2">
              <li data-aos="fade-left">
                2020-2021: Computer Fundamentals, Programming, Requirements Analysis and Design, Professional Environments.
              </li>
              <li data-aos="fade-right">
                2021-2022: Computing Systems, Programming II, Networking Concepts, Professional Environments II.
              </li>
              <li data-aos="fade-left" className="mb-10 sm:mb-5">
                2022-2023: Internet Services and Protocols, Cryptography and Network Security, Software Development, Final Year Project.
              </li>
            </ul>
          </div>
        </div>

        <div className="mb-6 flex flex-col-reverse sm:flex-row items-center">
          <div
            className="w-full sm:hidden sm:w-1/3 h-auto ml-4"
            data-aos="fade-bottom"
            
          >
            <img
              src={briancon}
              alt="Baccalaureat Technologique"
              className="w-full h-auto rounded-lg"
              style={{ opacity: 0.8 }}
            />
          </div>
          <div className="w-full sm:w-2/3" data-aos="fade-right" style={{ overflow: 'hidden' }}>
            <h3 className="text-xl font-semibold" style={{ maxWidth: '100%' }}>
              Baccalaureat Technologique in Business Management
            </h3>
            <p style={{ maxWidth: '100%' }}>Lycee d'Altitude Briancon (2017 - 2020)</p>

            <ul className="list-disc pl-6 mt-2 mb-10">
              <li>
                Modules: Law, Economics, Finances, Math, Italian, Management, History and Geography, English, Italian.
              </li>
            </ul>
          </div>
          <div
            className="w-full hidden sm:block sm:w-1/3 h-auto ml-4"
            data-aos="fade-left"
           
          >
            <img
              src={briancon}
              alt="Baccalaureat Technologique"
              className="w-full h-auto rounded-lg"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Education;