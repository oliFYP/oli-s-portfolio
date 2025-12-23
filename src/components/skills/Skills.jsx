import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css"; // Import AOS styles
import { Code2, Layout, Palette, Terminal } from "lucide-react";

const skills = [
  {
    category: "Frontend Development",
    icon: <Layout className="w-6 h-6" />,
    items: ["React", "TypeScript", "HTML", "CSS", "JavaScript", "Tailwind CSS"],
  },
  {
    category: "Backend Development",
    icon: <Terminal className="w-6 h-6" />,
    items: ["Node.js", "Express", "PHP", "Python", "PostgreSQL", "Supabase"],
  },
  {
    category: "Mobile Development",
    icon: <Code2 className="w-6 h-6" />,
    items: ["Flutter", "Dart", "Firebase", "Mobile Architecture"],
  },
  {
    category: "Full Stack Tools",
    icon: <Palette className="w-6 h-6" />,
    items: ["REST APIs", "Git", "Docker", "Database Management", "Supabase"],
  },
];

export default function Skills() {
  useEffect(() => {
    AOS.init({
      duration: 1000, // whether animation should happen only once - while scrolling down
    });
  }, []);

  return (
    <section id="skills" className="py-20 bg-gray-800">
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

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {skills.map((skill, index) => (
            <SkillCard key={index} skill={skill} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}

function SkillCard({ skill, index }) {
  return (
    <div
      data-aos="fade-up"
      data-aos-delay={index * 100}
      className="bg-gray-900 rounded-lg shadow-xl p-6 border border-gray-700"
    >
      <div className="flex items-center mb-4">
        <div className="p-2 bg-indigo-900/50 rounded-lg text-indigo-400 mr-3">
          {skill.icon}
        </div>
        <h3 className="text-xl font-bold text-gray-100">{skill.category}</h3>
      </div>
      <ul className="space-y-2">
        {skill.items.map((item, itemIndex) => (
          <li
            key={itemIndex}
            data-aos="fade-right"
            data-aos-delay={index * 100 + itemIndex * 100}
            className="flex items-center text-gray-300"
          >
            <Code2 className="w-4 h-4 mr-2 text-indigo-400" />
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
}
