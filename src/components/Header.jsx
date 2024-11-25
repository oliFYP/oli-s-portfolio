import React from "react";
import { motion } from "framer-motion";
import { Github, Linkedin, Mail, Code2 } from "lucide-react";

export default function Header() {
  return (
    <motion.header
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      className="fixed top-0 left-0 right-0 z-50 bg-gray-900/80 backdrop-blur-md border-b border-gray-800"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          <motion.div
            className="flex items-center space-x-2"
            whileHover={{ scale: 1.05 }}
          >
            <Code2 className="w-8 h-8 text-indigo-400" />
            <span className="text-xl font-bold text-gray-100">Olivier</span>
          </motion.div>

          <nav className="hidden md:flex items-center space-x-8">
            <NavLink href="#about">About</NavLink>
            <NavLink href="#projects">Projects</NavLink>
            <NavLink href="#skills">Skills</NavLink>
            <NavLink href="#contact">Contact</NavLink>
          </nav>

          <div className="flex items-center space-x-4">
            <SocialLink href="https://github.com/oliFYP" icon={<Github />} />
            <SocialLink
              href="https://www.linkedin.com/in/olivier-smith-92a825300"
              icon={<Linkedin />}
            />
            <SocialLink
              href="mailto:oliviergsmith@outlook.com"
              icon={<Mail />}
            />
          </div>
        </div>
      </div>
    </motion.header>
  );
}

function NavLink({ href, children }) {
  return (
    <motion.a
      href={href}
      className="text-gray-400 hover:text-indigo-400 transition-colors"
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.95 }}
    >
      {children}
    </motion.a>
  );
}

function SocialLink({ href, icon }) {
  return (
    <motion.a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="text-gray-400 hover:text-indigo-400 transition-colors"
      whileHover={{ scale: 1.2, rotate: 10 }}
      whileTap={{ scale: 0.9 }}
    >
      {icon}
    </motion.a>
  );
}
