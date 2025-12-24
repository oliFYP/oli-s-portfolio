import React from "react";
import { motion } from "framer-motion";
import { Monitor, Globe, Brain, Zap } from "lucide-react";

export default function AboutExperience() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: 0.1 }}
      className="relative group"
    >
      <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-2xl blur-xl opacity-20 group-hover:opacity-30 transition-opacity duration-500" />
      <div className="relative bg-gradient-to-br from-gray-800 to-gray-900 rounded-2xl p-8 border border-gray-700/50 backdrop-blur-sm">
        <div className="flex items-center gap-3 mb-6">
          <div className="p-2 bg-gradient-to-r from-indigo-600 to-purple-600 rounded-lg">
            <Zap className="w-6 h-6 text-white" />
          </div>
          <h3 className="text-3xl font-bold text-white">
            Professional Journey
          </h3>
        </div>

        <p className="text-gray-300 text-lg leading-relaxed mb-8">
          I'm a Computer Science enthusiast with three years of UK-based
          academic experience in software development. I specialize in full
          stack development, building complete applications from responsive
          front-end interfaces to robust back-end systems. My expertise spans
          both client-side and server-side technologies.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <ExperienceCard
            icon={<Monitor className="w-6 h-6" />}
            title="Full Stack Development"
            description="Complete solutions from front-end UI to back-end architecture"
            delay={0.2}
          />
          <ExperienceCard
            icon={<Globe className="w-6 h-6" />}
            title="Full Ecosystem Experience"
            description="3 years across web, mobile, and server-side technologies"
            delay={0.3}
          />
          <ExperienceCard
            icon={<Brain className="w-6 h-6" />}
            title="Continuous Learning"
            description="Committed to mastering new frameworks and best practices"
            delay={0.4}
          />
        </div>
      </div>
    </motion.div>
  );
}

function ExperienceCard({ icon, title, description, delay }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay }}
      className="group/card relative overflow-hidden bg-gray-800/50 p-6 rounded-xl border border-gray-700/50 hover:border-indigo-500/50 transition-all duration-300 hover:shadow-lg hover:shadow-indigo-500/10"
    >
      <div className="absolute inset-0 bg-gradient-to-br from-indigo-600/5 to-purple-600/5 opacity-0 group-hover/card:opacity-100 transition-opacity duration-300" />
      <div className="relative">
        <div className="p-3 bg-gradient-to-r from-indigo-600 to-purple-600 rounded-lg text-white w-fit mb-4 shadow-lg group-hover/card:scale-110 transition-transform duration-300">
          {icon}
        </div>
        <h4 className="text-lg font-bold text-white mb-2 group-hover/card:text-indigo-400 transition-colors duration-300">
          {title}
        </h4>
        <p className="text-gray-400 text-sm leading-relaxed">{description}</p>
      </div>
    </motion.div>
  );
}
