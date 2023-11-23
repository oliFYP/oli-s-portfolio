import React from 'react';



const Footer = () => {
  
  return (
    <footer className="bg-gray-900  py-4 md:py-8">
    <div className="container mx-auto">
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
    </div>
  </footer>
  );
}

export default Footer;