import React from "react";
import { motion } from "framer-motion";
import { Dumbbell, Mountain, Trophy, Heart } from "lucide-react";

export default function AboutPersonal() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: 0.2 }}
      className="relative group"
    >
      <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-pink-600 rounded-2xl blur-xl opacity-20 group-hover:opacity-30 transition-opacity duration-500" />
      <div className="relative bg-gradient-to-br from-gray-800 to-gray-900 rounded-2xl p-8 border border-gray-700/50 backdrop-blur-sm">
        <div className="flex items-center gap-3 mb-6">
          <div className="p-2 bg-gradient-to-r from-purple-600 to-pink-600 rounded-lg">
            <Heart className="w-6 h-6 text-white" />
          </div>
          <h3 className="text-3xl font-bold text-white">Beyond the Code</h3>
        </div>

        <p className="text-gray-300 text-lg leading-relaxed mb-8">
          My journey extends beyond technology. I've spent five years honing my
          skills in boxing, participating in several bouts, and embracing the
          thrill of competition. Additionally, skiing has been a lifelong
          passion, marked by victories in regional races and the honor of
          opening the British Army ski race.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <Achievement
            icon={<Dumbbell className="w-6 h-6" />}
            title="Boxing"
            description="5 years of dedicated training and competitive bouts"
            delay={0.3}
            gradient="from-red-600 to-orange-600"
          />
          <Achievement
            icon={<Mountain className="w-6 h-6" />}
            title="Skiing"
            description="Regional race victories and British Army ski race opener"
            delay={0.4}
            gradient="from-blue-600 to-cyan-600"
          />
          <Achievement
            icon={<Trophy className="w-6 h-6" />}
            title="Competitive Spirit"
            description="Driven by excellence in both sports and technology"
            delay={0.5}
            gradient="from-yellow-600 to-amber-600"
          />
        </div>
      </div>
    </motion.div>
  );
}

function Achievement({ icon, title, description, delay, gradient }) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay }}
      className="group/achievement relative overflow-hidden"
    >
      <div className="flex flex-col items-center text-center p-6 bg-gray-800/50 rounded-xl border border-gray-700/50 hover:border-purple-500/50 transition-all duration-300 hover:shadow-lg hover:shadow-purple-500/10">
        <div className="absolute inset-0 bg-gradient-to-br from-purple-600/5 to-pink-600/5 opacity-0 group-hover/achievement:opacity-100 transition-opacity duration-300" />
        <div
          className={`relative p-4 bg-gradient-to-r ${gradient} rounded-xl text-white mb-4 shadow-lg group-hover/achievement:scale-110 transition-transform duration-300`}
        >
          {icon}
        </div>
        <h4 className="relative text-xl font-bold text-white mb-2 group-hover/achievement:text-purple-400 transition-colors duration-300">
          {title}
        </h4>
        <p className="relative text-gray-400 leading-relaxed">{description}</p>
      </div>
    </motion.div>
  );
}
