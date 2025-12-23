import React from "react";
import { motion } from "framer-motion";
import AboutHero from "./AboutHero";
import AboutExperience from "./AboutExperience";
import AboutPersonal from "./AboutPersonal";

export default function About() {
  return (
    <section id="about" className="py-20 bg-gray-800 overflow-x-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-gray-100 mb-4">About Me</h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Software developer, sports enthusiast, and lifelong learner.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          <AboutHero />
          <AboutExperience />
          <AboutPersonal />
        </div>
      </div>
    </section>
  );
}
