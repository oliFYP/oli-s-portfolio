import React from 'react';
import { motion } from 'framer-motion';
import { Code2, Layout, Palette, Terminal } from 'lucide-react';

const skills = [
  {
    category: 'Frontend Development',
    icon: <Layout className="w-6 h-6" />,
    items: ['React', 'HTML', 'CSS', 'JavaScript', 'Tailwind CSS']
  },
  {
    category: 'Mobile Development',
    icon: <Code2 className="w-6 h-6" />,
    items: ['Flutter', 'Dart', 'Firebase']
  },
  {
    category: 'Programming Languages',
    icon: <Terminal className="w-6 h-6" />,
    items: ['Java', 'Python', 'PHP', 'MATLAB']
  },
  {
    category: 'Design Tools',
    icon: <Palette className="w-6 h-6" />,
    items: ['Figma', 'Adobe XD', 'UI/UX Design', 'Responsive Design']
  }
];

export default function Skills() {
  return (
    <section id="skills" className="py-20 bg-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-gray-100 mb-4">Skills & Expertise</h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            A comprehensive overview of my technical skills and areas of expertise, developed through academic studies at Kingston University and personal projects.
          </p>
        </motion.div>

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
    <motion.div
      initial={{ y: 20, opacity: 0 }}
      whileInView={{ y: 0, opacity: 1 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1 }}
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
          <motion.li
            key={itemIndex}
            initial={{ x: -10, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1 + itemIndex * 0.1 }}
            className="flex items-center text-gray-300"
          >
            <Code2 className="w-4 h-4 mr-2 text-indigo-400" />
            {item}
          </motion.li>
        ))}
      </ul>
    </motion.div>
  );
}