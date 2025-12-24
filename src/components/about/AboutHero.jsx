import React from "react";
import { motion } from "framer-motion";
import { MapPin, Code2, GraduationCap, Sparkles } from "lucide-react";
import portfolio from "../../assets/images/oli.jpg";

export default function AboutHero() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className="relative group"
    >
      <div className="absolute inset-0 bg-gradient-to-r from-indigo-600 to-purple-600 rounded-2xl blur-xl opacity-20 group-hover:opacity-30 transition-opacity duration-500" />
      <div className="relative bg-gradient-to-br from-gray-800 to-gray-900 rounded-2xl p-8 border border-gray-700/50 backdrop-blur-sm">
        <div className="flex flex-col md:flex-row items-center gap-8">
          {/* Image Section */}
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="relative flex-shrink-0"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-2xl blur-md opacity-50" />
            <img
              src={portfolio}
              alt="Olivier Smith"
              className="relative w-40 h-40 rounded-2xl object-cover border-4 border-gray-700 shadow-2xl"
            />
            <div className="absolute -bottom-2 -right-2 bg-gradient-to-r from-indigo-600 to-purple-600 rounded-full p-2 shadow-lg">
              <Sparkles className="w-5 h-5 text-white" />
            </div>
          </motion.div>

          {/* Info Section */}
          <div className="flex-1 text-center md:text-left">
            <motion.h3
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="text-4xl font-bold text-white mb-2"
            >
              Olivier Smith
            </motion.h3>
            <motion.p
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="text-gray-400 mb-6 text-lg"
            >
              Building the future, one line of code at a time
            </motion.p>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              <InfoBadge
                icon={<Code2 className="w-5 h-5" />}
                label="Full Stack Developer"
                delay={0.5}
              />
              <InfoBadge
                icon={<MapPin className="w-5 h-5" />}
                label="Briançon, France"
                delay={0.6}
              />
              <InfoBadge
                icon={<GraduationCap className="w-5 h-5" />}
                label="Computer Science"
                delay={0.7}
              />
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

function InfoBadge({ icon, label, delay }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay }}
      className="flex items-center justify-center md:justify-start gap-2 px-4 py-2 bg-gray-800/50 rounded-lg border border-gray-700/50 hover:border-indigo-500/50 transition-colors duration-300"
    >
      <span className="text-indigo-400">{icon}</span>
      <span className="text-sm text-gray-300 font-medium">{label}</span>
    </motion.div>
  );
}
