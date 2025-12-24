import React from "react";
import { motion } from "framer-motion";
import AboutHero from "./AboutHero";
import AboutExperience from "./AboutExperience";
import AboutPersonal from "./AboutPersonal";

export default function About() {
  return (
    <section
      id="about"
      className="relative py-24 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 overflow-hidden"
    >
      {/* Decorative gradient orbs */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-indigo-600/10 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-purple-600/10 rounded-full blur-3xl" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ y: 30, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="inline-block mb-4"
          >
            <span className="px-4 py-2 bg-gradient-to-r from-indigo-600 to-purple-600 rounded-full text-sm font-semibold text-white shadow-lg">
              Get to know me
            </span>
          </motion.div>
          <h2 className="text-5xl md:text-6xl font-bold text-white mb-6">
            About{" "}
            <span className="bg-gradient-to-r from-indigo-400 to-purple-400 bg-clip-text text-transparent">
              Me
            </span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Passionate developer crafting digital experiences, competitive
            athlete pushing boundaries, and dedicated learner exploring new
            horizons.
          </p>
        </motion.div>

        <div className="space-y-8">
          <AboutHero />
          <AboutExperience />
          <AboutPersonal />
        </div>
      </div>
    </section>
  );
}
