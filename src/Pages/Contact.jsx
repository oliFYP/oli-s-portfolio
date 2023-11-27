import React, { useState, useEffect } from 'react';
import logo1 from '../img/insta.png';
import logo2 from '../img/github.png';
import logo3 from '../img/linkedIn.png';
import { PacmanLoader } from "react-spinners";
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useNavigate } from 'react-router-dom';
import logo from '../img/OS.png';

function Contact() {
    const [isLoading, setLoading] = useState(true);
    const navigate = useNavigate();

    const navigateToHome = () => {
      
      navigate('/');
    };
    

    useEffect(() => {
        AOS.init({
          duration: 1000,
        });
      }, []);

    setTimeout(() => {
        setLoading(false);
      }, 3000);
    
  return (
    <div>
    
    {isLoading ? (
      
        <div className="absolute top-0 left-0 w-full h-full flex justify-center items-center bg-black">
          <PacmanLoader color="#ffffff" />
        </div>
      ) : (
        <>
    <div className="flex h-screen">
      {/* Left side with title and logos */}
      <div className="flex flex-col items-center justify-center w-1/2 bg-black">
      <img src={logo} className="h-15 mt-9 sm:h-16 sm:mb-10" onClick={navigateToHome} alt="Logo" />
        <div className="flex space-x-4">
        
          <img src={logo1} alt="Instagram" className="h-8 w-8" />
          <img src={logo2} alt="GitHub" className="h-8 w-8" />
          <img src={logo3} alt="LinkedIn" className="h-8 w-8" />
        </div>
      </div>

      <div className="w-1 h-full bg-white"></div>

    
      <div className="flex justify-center items-center w-1/2 bg-black p-8 rounded shadow-md">
        <form className="w-96">
        <h1  data-aos="flip-right" className="text-4xl font-bold text-white mb-8">Contact Me!</h1>
          <div className="mb-4">
            <label htmlFor="name" className="block text-sm font-medium text-white">
              Your Name
            </label>
            <input
            data-aos="flip-right"
              type="text"
              id="name"
              name="name"
              className="mt-1 p-2 w-full border rounded-md"
              placeholder="John Doe"
              required
            />
          </div>
          <div className="mb-4">
            <label htmlFor="email" className="block text-sm font-medium text-white">
              Email
            </label>
            <input
            data-aos="flip-left"
              type="email"
              id="email"
              name="email"
              className="mt-1 p-2 w-full border rounded-md"
              placeholder="john@example.com"
              required
            />
          </div>
          <div className="mb-4">
            <label htmlFor="message" className="block text-sm font-medium text-white">
              Message
            </label>
            <textarea
            data-aos="flip-right"
              id="message"
              name="message"
              rows="4"
              className="mt-1 p-2 w-full border rounded-md"
              placeholder="How can we help you?"
              required
            ></textarea>
          </div>
        
          <button
          data-aos="flip-right"
            type="submit"
            className="bg-gradient-to-r from-slate-500 to-slate-800 text-white px-4 py-2  rounded-md "
           
          >
            Submit
          </button>
      
        </form>
      </div>
    </div>
    </>
      )}
    </div>
      
  );
}

export default Contact;