import React, { useEffect } from "react";
import { motion } from "framer-motion";
import AOS from "aos";
import "aos/dist/aos.css"; // Import AOS styles
import {
  Code2,
  Layout,
  Database,
  Terminal,
  Smartphone,
  Server,
  Wrench,
  Zap,
} from "lucide-react";

const skillCategories = [
  {
    title: "Frontend Development",
    icon: <Layout className="w-6 h-6" />,
    color: "indigo",
    skills: ["React", "TypeScript", "JavaScript", "Tailwind CSS", "HTML/CSS"],
  },
  {
    title: "Backend Development",
    icon: <Server className="w-6 h-6" />,
    color: "blue",
    skills: ["Node.js", "Python", "PHP", "FastAPI", "REST APIs"],
  },
  {
    title: "Database & Cloud",
    icon: <Database className="w-6 h-6" />,
    color: "purple",
    skills: ["PostgreSQL", "MongoDB", "Supabase", "Firebase"],
  },
  {
    title: "Mobile Development",
    icon: <Smartphone className="w-6 h-6" />,
    color: "cyan",
    skills: ["Flutter", "Dart", "Mobile UI/UX"],
  },
  {
    title: "DevOps & Tools",
    icon: <Wrench className="w-6 h-6" />,
    color: "green",
    skills: ["Git/GitHub", "Docker", "VS Code", "Postman"],
  },
];

export default function Skills() {
  useEffect(() => {
    AOS.init({
      duration: 1000,
    });
  }, []);

  return (
    <section
      id="skills"
      className="relative py-24 bg-gradient-to-br from-gray-800 via-gray-900 to-gray-800 overflow-hidden"
    >
      {/* Decorative gradient orbs */}
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-blue-600/10 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-cyan-600/10 rounded-full blur-3xl" />

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
            <span className="px-4 py-2 bg-gradient-to-r from-blue-600 to-cyan-600 rounded-full text-sm font-semibold text-white shadow-lg">
              Technical Arsenal
            </span>
          </motion.div>
          <h2 className="text-5xl md:text-6xl font-bold text-white mb-6">
            Skills &{" "}
            <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
              Expertise
            </span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            A comprehensive overview of my technical skills and areas of
            expertise, developed through academic studies at Kingston University
            and personal projects.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
          {skillCategories.map((category, index) => (
            <SkillCategory key={index} category={category} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}

function SkillCategory({ category, index }) {
  const colorClasses = {
    indigo: {
      bg: "bg-indigo-900/50",
      text: "text-indigo-400",
      border: "border-indigo-500/30",
      gradient: "from-indigo-600 to-indigo-800",
      glow: "indigo-500/20",
    },
    blue: {
      bg: "bg-blue-900/50",
      text: "text-blue-400",
      border: "border-blue-500/30",
      gradient: "from-blue-600 to-blue-800",
      glow: "blue-500/20",
    },
    purple: {
      bg: "bg-purple-900/50",
      text: "text-purple-400",
      border: "border-purple-500/30",
      gradient: "from-purple-600 to-purple-800",
      glow: "purple-500/20",
    },
    cyan: {
      bg: "bg-cyan-900/50",
      text: "text-cyan-400",
      border: "border-cyan-500/30",
      gradient: "from-cyan-600 to-cyan-800",
      glow: "cyan-500/20",
    },
    green: {
      bg: "bg-green-900/50",
      text: "text-green-400",
      border: "border-green-500/30",
      gradient: "from-green-600 to-green-800",
      glow: "green-500/20",
    },
  };

  const colors = colorClasses[category.color];

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="group relative"
    >
      <div
        className={`absolute inset-0 bg-gradient-to-r from-${category.color}-600 to-${category.color}-800 rounded-2xl blur-xl opacity-0 group-hover:opacity-30 transition-opacity duration-500`}
      />
      <div
        className={`relative bg-gradient-to-br from-gray-800 to-gray-900 rounded-2xl p-6 border ${colors.border} hover:border-${category.color}-500/50 backdrop-blur-sm transition-all duration-300 hover:shadow-2xl hover:shadow-${colors.glow}`}
      >
        {/* Header */}
        <div className="flex items-center mb-6">
          <div
            className={`p-3 bg-gradient-to-r ${colors.gradient} rounded-xl text-white mr-3 shadow-lg group-hover:scale-110 transition-transform duration-300`}
          >
            {category.icon}
          </div>
          <h3
            className={`text-xl font-bold text-white group-hover:${colors.text} transition-colors duration-300`}
          >
            {category.title}
          </h3>
        </div>

        {/* Skills list */}
        <ul className="space-y-3">
          {category.skills.map((skill, skillIndex) => (
            <motion.li
              key={skillIndex}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.3,
                delay: index * 0.1 + skillIndex * 0.05,
              }}
              className={`flex items-center text-gray-300 hover:${colors.text} transition-colors duration-200`}
            >
              <Code2 className={`w-4 h-4 mr-3 ${colors.text} flex-shrink-0`} />
              <span className="text-sm font-medium">{skill}</span>
            </motion.li>
          ))}
        </ul>
      </div>
    </motion.div>
  );
}
