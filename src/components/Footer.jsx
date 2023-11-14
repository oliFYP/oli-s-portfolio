import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gray-800  py-4 md:py-8">
    <div className="container mx-auto">
      <div className="flex flex-col md:flex-row justify-between items-center">
        <p className="text-sm md:text-base">&copy; 2023 Olivier Smith. All rights reserved.</p>
        <ul className="flex space-x-4 md:space-x-6">
          <li>
            <a className="hover:text-gray-500 hover:cursor-pointer text-white text-sm md:text-base">
              Home
            </a>
          </li>
          <li>
            <a className="hover:text-gray-500 hover:cursor-pointer text-white text-sm md:text-base" >
              About
            </a>
          </li>
         
          <li>
            <a className="hover:text-gray-500 hover:cursor-pointer text-white text-sm md:text-base" >
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