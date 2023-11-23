import AOS from 'aos';
import 'aos/dist/aos.css';
import React, { useEffect } from 'react';
import icon15 from '../icons/icon15.png';
import icon16 from '../icons/icon16.png';
import icon17 from '../icons/icon17.png';
import icon18 from '../icons/icon18.png';

function Ide(){
    useEffect(() => {
        AOS.init({
          duration: 1000,
        });
      }, []);
    
      const iconSources = [icon15, icon16, icon17, icon18];
      const titles = ['VS Code', 'VS', 'Netbeans', 'Android Studio'];
    return(
        <div className="bg-black h-auto p-0 lg:p-6" style={{ overflow: 'hidden' }}>
        <div className="max-w-5xl mx-auto">
          <h1 data-aos="fade-left" className="text-3xl mt-10 font-bold mb-4 text-white text-center">
            Design & Prototyping tools
          </h1>
          <div data-aos="fade-left" className="flex items-center justify-center">
  <div className="bg-white h-1 w-20 mb-6 mt-2"></div>
</div>
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
    

}

export default Ide;