import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import icon1 from '../icons/icon1.png';
import icon2 from '../icons/icon2.png';
import icon3 from '../icons/icon3.png';
import icon4 from '../icons/icon4.png';
import icon5 from '../icons/icon5.png';
import icon6 from '../icons/icon6.png';
import icon7 from '../icons/icon7.png';
import icon8 from '../icons/icon8.png';
import icon9 from '../icons/icon9.png';
import icon10 from '../icons/icon10.png';
import icon19 from '../icons/icon19.png';

const Experience = React.forwardRef((props, ref) => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
    });
  }, []);

  const iconSources = [icon1, icon2, icon3, icon4, icon5, icon6, icon7, icon8, icon9, icon10, icon19];
  const titles = ['CSS', 'Dart', 'React', 'Tailwind', 'Java', 'Python', 'HTML', 'JavaScript', 'Firebase', 'MATLAB', 'Flutter'];

  return (
    <div ref={ref} className="bg-black h-auto p-0 lg:p-6" style={{ overflow: 'hidden' }}>
      <div className="max-w-5xl mx-auto">
        <h1 data-aos="fade-right" className="text-3xl font-bold mb-4 text-white text-center">
          Software Development tools
        </h1>
        <div className="flex flex-wrap justify-center">
          {iconSources.map((icon, index) => (
            <div key={index} className="w-1/2 md:w-1/4 lg:w-1/5 p-2 ">
              <div className="w-32 h-32 md:w-40 md:h-40 lg:w-48 lg:h-48 bg-gray-900 flex flex-col items-center justify-center cursor-pointer rounded-lg mx-auto">
                <img src={icon} alt={`Icon ${index + 1}`} className="w-24 h-24 md:w-32 md:h-32 lg:w-40 lg:h-40 object-contain" data-aos={`fade-up-${index * 2}`} />
                <div className="text-white font-bold text-center mt-1 mb-1">{titles[index]}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
});

export default Experience;