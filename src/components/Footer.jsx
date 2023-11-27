import React from 'react';
import ReactL from '../icons/icon3.png';
import Vite from '../icons/icon20.png';
import Tailwind from '../icons/icon4.png'


const Footer = () => {
  
  return (
    <footer className="bg-gray-900  py-4 md:py-8">
      
      
    <div className="container mx-auto">
    <div  className="flex items-center flex-col justify-center">
    <p className="font-bold">This website is made with:</p>
    <div  className="flex items-center flex-row justify-center">
    <img src={ReactL} className="h-10 m-10 mt-5" alt="ReactL"/>
    <p className="font-bold mb-5">+</p>
    <img src={Vite} className="h-10 m-10 mt-5" alt="Vite" />
    <p className="font-bold mb-5">+</p>
    <img src={Tailwind} className="h-10 m-10 mt-5" alt="Tailwind" />
    </div>

    </div>
      
    </div>
   
    <div className="flex items-center justify-center">
  <div className="bg-white h-1 w-20 mb-5 mt-5"></div>
</div>
    <div className="flex flex-col md:flex-row justify-between items-center">
        <p  className="text-sm text-white md:text-base ml-0 lg:ml-5 ">&copy; 2023 Olivier Smith. All rights reserved.</p>
        <ul className="flex space-x-4 md:space-x-6">
          <li>
            <a className="hover:text-gray-500 hover:cursor-pointer text-white font-bold text-sm md:text-base">
              Home
            </a>
          </li>
          <li>
            <a className="hover:text-gray-500 hover:cursor-pointer text-white font-bold text-sm md:text-base" >
              About Me
            </a>
          </li>
         
          <li>
            <a className="hover:text-gray-500 hover:cursor-pointer text-white  font-bold text-sm md:text-base mr-0 lg:mr-5" >
              Contact
            </a>
          </li>
        </ul>
      </div>
  </footer>
  );
}

export default Footer;