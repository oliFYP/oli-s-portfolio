import React, { useEffect } from "react";
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
    <section id="skills" className="py-20 bg-gray-800 overflow-x-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div data-aos="fade-up" className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-100 mb-4">
            Skills & Expertise
          </h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            A comprehensive overview of my technical skills and areas of
            expertise, developed through academic studies at Kingston University
            and personal projects.
          </p>
        </div>

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
    },
    blue: {
      bg: "bg-blue-900/50",
      text: "text-blue-400",
      border: "border-blue-500/30",
    },
    purple: {
      bg: "bg-purple-900/50",
      text: "text-purple-400",
      border: "border-purple-500/30",
    },
    cyan: {
      bg: "bg-cyan-900/50",
      text: "text-cyan-400",
      border: "border-cyan-500/30",
    },
    green: {
      bg: "bg-green-900/50",
      text: "text-green-400",
      border: "border-green-500/30",
    },
  };

  const colors = colorClasses[category.color];

  return (
    <div
      data-aos="fade-up"
      data-aos-delay={index * 100}
      className={`bg-gray-900 rounded-xl shadow-xl p-6 border ${colors.border} hover:border-${category.color}-500/50 transition-all duration-300 hover:shadow-2xl hover:scale-105`}
    >
      {/* Header */}
      <div className="flex items-center mb-6">
        <div className={`p-3 ${colors.bg} rounded-lg ${colors.text} mr-3`}>
          {category.icon}
        </div>
        <h3 className="text-xl font-bold text-gray-100">{category.title}</h3>
      </div>

      {/* Skills list */}
      <ul className="space-y-3">
        {category.skills.map((skill, skillIndex) => (
          <li
            key={skillIndex}
            data-aos="fade-right"
            data-aos-delay={index * 100 + skillIndex * 50}
            className="flex items-center text-gray-300"
          >
            <Code2 className={`w-4 h-4 mr-3 ${colors.text} flex-shrink-0`} />
            <span className="text-sm font-medium">{skill}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}
