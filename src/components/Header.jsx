import React from "react";
import { Github, Linkedin, Mail, Code2 } from "lucide-react";
import "aos/dist/aos.css"; // Import AOS CSS
import AOS from "aos";
import { scrollToTop } from "../utils/scroll";

AOS.init();

export default function Header() {
  return (
    <header
      data-aos="fade-down"
      data-aos-duration="1000"
      className="fixed top-0 left-0 right-0 z-50 bg-gray-900/80 backdrop-blur-md border-b border-gray-800"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          <div
            data-aos="zoom-in"
            data-aos-duration="1000"
            className="flex items-center space-x-2 cursor-pointer"
            onClick={scrollToTop}
          >
            <Code2 className="w-8 h-8 text-indigo-400" />
            <span className="text-xl font-bold text-gray-100">Olivier</span>
          </div>

          <nav className="hidden md:flex items-center space-x-8">
            <NavLink href="#about">About</NavLink>
            <NavLink href="#projects">Projects</NavLink>
            <NavLink href="#skills">Skills</NavLink>
            <NavLink href="#contact">Contact</NavLink>
          </nav>

          <div className="flex items-center space-x-4">
            <SocialLink href="https://github.com" icon={<Github />} />
            <SocialLink href="https://linkedin.com" icon={<Linkedin />} />
            <SocialLink href="mailto:your.email@example.com" icon={<Mail />} />
          </div>
        </div>
      </div>
    </header>
  );
}

function NavLink({ href, children }) {
  return (
    <a
      href={href}
      className="text-gray-400 hover:text-indigo-400 transition-colors"
      data-aos="zoom-in"
      data-aos-duration="1000"
    >
      {children}
    </a>
  );
}

function SocialLink({ href, icon }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="text-gray-400 hover:text-indigo-400 transition-colors"
      data-aos="zoom-in"
      data-aos-duration="1000"
    >
      {icon}
    </a>
  );
}
