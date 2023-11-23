import React, { useRef, useState } from 'react';
import background from '../videobg/4K_10.mp4';

import { PacmanLoader } from "react-spinners";
import Design from "../components/Design";
import Education from "../components/Education";
import Experience from "../components/Experience";
import Footer from "../components/Footer";
import Git from "../components/Git";
import Ide from "../components/Ide";
import Presentation from '../components/Presentation';
import SidePanel from "../components/SidePanel";
import TopBar from "../components/TopBar";
import logo from '../img/OS.png';

function Home() {
  const [isSidePanelOpen, setSidePanelOpen] = useState(false);
  const [isLoading, setLoading] = useState(true);
  const experienceRef = useRef(null);
  const educationRef = useRef(null);

  setTimeout(() => {
    setLoading(false);
  }, 3000);

  const toggleSidePanel = () => {
    setSidePanelOpen(!isSidePanelOpen);
  };

 

  

  const scrollToExperience = () => {
    experienceRef.current.scrollIntoView({ behavior: 'smooth' });
  };
  const scrollToEducation = () => {
    educationRef.current.scrollIntoView({ behavior: 'smooth' });
  };

 

  return (
    <div>
    
    {isLoading ? (
      
        <div className="absolute top-0 left-0 w-full h-full flex justify-center items-center bg-black">
          <PacmanLoader color="#ffffff" />
        </div>
      ) : (
        <>
         <div className="relative" style={{ overflow: 'hidden' }}>
        <video
  autoPlay
  loop
  muted
  playsInline
 
  className="object-cover w-full h-[600px] lg:h-[700px] xl:h-[800px] transition-all md:pointer-events-none blur-sm"
  id="video"
>
  <source src={background} type="video/mp4" />
</video>
<div className="absolute bottom-0 w-full h-22">
          <div className="relative h-50 bg-gradient-to-b from-transparent via-black to-black p-9">
          </div>
        </div>

          <div>
            <TopBar 
            isSidePanelOpen={isSidePanelOpen} 
            toggleSidePanel={toggleSidePanel} 
            scrollToExperience={scrollToExperience} 
            scrollToEducation={scrollToEducation}/>

            {isSidePanelOpen && (
               <SidePanel 
               isSidePanelOpen={isSidePanelOpen} 
               toggleSidePanel={toggleSidePanel} 
               scrollToExperience={scrollToExperience}
               scrollToEducation={scrollToEducation} />
            )}

            <div className="absolute top-0 left-0 m-4 flex">
              <img src={logo} className="h-8 mt-1 sm:h-9 sm:mt-2" alt="Logo" />
            </div>
          </div>

          <Presentation/>
          </div>
          <Experience ref={experienceRef} />
          <Ide />
          <Design />
          <Git />
          <Education ref={educationRef} />
          <Footer />

        </>
      )}
     
   
    
    </div>
  );
}

export default Home;