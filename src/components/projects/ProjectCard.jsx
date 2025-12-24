import React, { useEffect } from "react";
import { motion } from "framer-motion";
import AOS from "aos";
import "aos/dist/aos.css";
import { ExternalLink, Code2, Eye } from "lucide-react";

export default function ProjectCard({ project, index, onOpenModal }) {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="group relative"
    >
      <div className="absolute inset-0 bg-gradient-to-r from-violet-600 to-fuchsia-600 rounded-2xl blur-xl opacity-0 group-hover:opacity-30 transition-opacity duration-500" />
      <div className="relative bg-gradient-to-br from-gray-800 to-gray-900 rounded-2xl overflow-hidden border border-gray-700/50 hover:border-violet-500/50 backdrop-blur-sm transition-all duration-300 hover:shadow-2xl">
        <div
          className="relative h-56 overflow-hidden cursor-pointer"
          onClick={() => onOpenModal(project)}
        >
          <img
            src={project.images[0]}
            alt={project.title}
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/50 to-transparent opacity-60 group-hover:opacity-80 transition-opacity duration-300" />
          <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300">
            <motion.div
              initial={{ scale: 0.8, y: 20 }}
              whileHover={{ scale: 1, y: 0 }}
              className="flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-violet-600 to-fuchsia-600 rounded-full text-white font-semibold shadow-2xl"
            >
              <Eye className="w-5 h-5" />
              View Gallery
            </motion.div>
          </div>
        </div>
        <div className="p-6">
          <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-violet-400 transition-colors duration-300">
            {project.title}
          </h3>
          <p className="text-gray-300 mb-4 line-clamp-2 leading-relaxed">
            {project.description}
          </p>
          <div className="flex flex-wrap gap-2 mb-6">
            {project.tags.map((tag, tagIndex) => (
              <span
                key={tagIndex}
                className="px-3 py-1 bg-violet-900/30 text-violet-300 rounded-full text-xs font-medium border border-violet-700/30 hover:border-violet-500/50 transition-colors duration-200"
              >
                {tag}
              </span>
            ))}
          </div>
          <div className="flex space-x-4">
            <a
              href={project.githubUrl}
              className="flex items-center gap-2 text-gray-300 hover:text-violet-400 transition-all duration-300 transform hover:scale-105"
            >
              <Code2 className="w-5 h-5" />
              <span className="font-medium">View Project</span>
            </a>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
