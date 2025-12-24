import React from "react";
import { motion } from "framer-motion";
import { ArrowRight, Code2, Server, Sparkles } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-900 via-gray-800 to-indigo-950 overflow-hidden">
      {/* Animated gradient orbs */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-indigo-600/20 rounded-full blur-3xl animate-pulse" />
      <div
        className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-600/20 rounded-full blur-3xl animate-pulse"
        style={{ animationDelay: "1s" }}
      />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-center">
          <motion.div
            initial={{ scale: 0, rotate: -180 }}
            animate={{ scale: 1, rotate: 0 }}
            transition={{ duration: 0.8, type: "spring" }}
            className="flex justify-center items-center gap-6 mb-8"
          >
            <div className="relative">
              <div className="absolute inset-0 bg-indigo-600 rounded-2xl blur-xl opacity-50" />
              <div className="relative p-4 bg-gradient-to-br from-indigo-600 to-indigo-800 rounded-2xl shadow-2xl">
                <Code2 className="w-16 h-16 text-white" />
              </div>
            </div>
            <div className="relative">
              <div className="absolute inset-0 bg-purple-600 rounded-2xl blur-xl opacity-50" />
              <div className="relative p-4 bg-gradient-to-br from-purple-600 to-purple-800 rounded-2xl shadow-2xl">
                <Server className="w-16 h-16 text-white" />
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.6 }}
            className="mb-6"
          >
            <h1 className="text-6xl md:text-8xl font-bold mb-2">
              <span className="bg-gradient-to-r from-white via-gray-100 to-gray-300 bg-clip-text text-transparent">
                Olivier Smith
              </span>
              <span className="inline-block animate-pulse">
                <span className="bg-gradient-to-r from-indigo-400 to-purple-400 bg-clip-text text-transparent">
                  .
                </span>
              </span>
            </h1>
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: 0.5, duration: 0.5 }}
              className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-indigo-600/20 to-purple-600/20 rounded-full border border-indigo-500/30 backdrop-blur-sm"
            >
              <Sparkles className="w-4 h-4 text-indigo-400" />
              <span className="text-indigo-300 text-sm font-semibold">
                Full Stack Developer
              </span>
            </motion.div>
          </motion.div>

          <motion.p
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.6 }}
            className="text-xl md:text-2xl text-gray-300 mb-12 max-w-3xl mx-auto leading-relaxed"
          >
            Passionate about building complete solutions from front-end to
            back-end.
            <span className="text-indigo-300 font-semibold">
              {" "}
              Kingston University graduate
            </span>{" "}
            bringing technical expertise, innovative thinking, and comprehensive
            development skills.
          </motion.p>

          <motion.div
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.7, duration: 0.6 }}
            className="flex justify-center gap-4"
          >
            <motion.a
              href="#projects"
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
              className="group relative inline-flex items-center px-8 py-4 overflow-hidden rounded-xl font-semibold text-white"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-indigo-600 to-purple-600" />
              <div className="absolute inset-0 bg-gradient-to-r from-indigo-500 to-purple-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <span className="relative flex items-center gap-2">
                View Projects
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
              </span>
            </motion.a>
            <motion.a
              href="#contact"
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
              className="inline-flex items-center px-8 py-4 rounded-xl font-semibold text-white border-2 border-indigo-500/50 hover:border-indigo-500 hover:bg-indigo-500/10 transition-all duration-300"
            >
              Get in Touch
            </motion.a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
