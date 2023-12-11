import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import oli from "../img/oliprofile.jpeg";

const AboutMe = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
    });
  }, []);
  return (
    <div className="bg-black text-white p-8 sm:pr-4 sm:pl-4 pr-0 pl-0 ">
      <div className="bg-gradient-to-r from-slate-900 to-slate-700 m-8 p-8 rounded-xl">
        <h1
          data-aos="fade-right"
          className="text-3xl font-bold mb-4 text-white text-center"
        >
          About Me
        </h1>
        <div data-aos="fade-left" className="flex items-center justify-center">
          <div className="bg-white h-1 w-20 mb-6 mt-2"></div>
        </div>
        <div className="mb-6 flex flex-col sm:flex-row items-center">
          <img
            src={oli}
            alt="oli"
            className="rounded-xl w-[200px] mb-5 h-auto mr-7 sm:w-auto  sm:h-[300px] transition-transform duration-500 ease-in-out transform hover:scale-110"
          />
          <div className="flex flex-col ">
            <p data-aos="fade-right" className="text-lg font-bold">
              Hey there! I'm Olivier Smith, originally from Briançon, France. I
              spent a solid three years in the UK diving headfirst into Computer
              Science – you know, the whole tech shebang.
            </p>
            <p data-aos="fade-left" className="text-lg font-bold mt-5">
              While kicking it in the academic world, I found myself hooked on
              the whole software development gig, especially the cool stuff
              happening in Front-end development. It's like painting, but with
              code, you know?
            </p>
            <p data-aos="fade-right" className="text-lg font-bold mt-5">
              I'm not your typical tech geek. I'm all about keeping things real
              and staying hungry to learn. I'm not just into coding for the sake
              of it – I want to craft digital experiences that just make sense.
            </p>
            <p data-aos="fade-left" className="text-lg font-bold mt-5">
              I'm all about the endless possibilities tech brings to the table.
              Ready to throw myself into the wild world of Front-end
              development, team up with some cool folks, and sprinkle a bit of
              my own flavor on the whole innovation scene.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutMe;
