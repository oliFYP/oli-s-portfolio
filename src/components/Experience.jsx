import React, { useState, useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import icon1 from '../img/icon1.png';
import icon2 from '../img/icon2.png';
import icon3 from '../img/icon3.png';
import icon4 from '../img/icon4.png';
import icon5 from '../img/icon5.png';
import icon6 from '../img/icon6.png';
import icon7 from '../img/icon7.png';
import icon8 from '../img/icon8.png';
import icon9 from '../img/icon9.png';
import icon10 from '../img/icon10.png';

function Experience() {
  useEffect(() => {
    AOS.init({
      duration: 1000,
    });
  }, []);

  const iconSources = [icon1, icon2, icon3, icon4, icon5, icon6, icon7, icon8, icon9, icon10];
  const titles = ['CSS', 'Dart', 'React', 'Tailwind','Python', 'Java', 'HTML', 'JavaScript', 'Firebase', 'MATLAB'];

  return (
    <div className="bg-black h-auto p-6">
      <div className="max-w-5xl mx-auto">
        <h1 data-aos="fade-down" className="text-2xl font-bold mb-4">
          Experience
        </h1>
        <div className="flex flex-wrap  justify-center">
          {iconSources.map((icon, index) => (
            <div key={index} className="  md:w-1/4 lg:w-1/5 p-2">
              <div className="w-24 h-24 bg-gray-800 flex flex-col items-center justify-center rounded-lg">
                <img src={icon} alt={`Icon ${index + 1}`} className="w-16 h-16 object-contain" data-aos={`fade-up-${index * 2}`}/>
                <div className="text-white font-bold text-center mt-1 mb-1">{titles[index]}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Experience;
