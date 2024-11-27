import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { ExternalLink, Github } from "lucide-react";

export default function ProjectCard({ project, index, onOpenModal }) {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <div
      data-aos="fade-up"
      data-aos-delay={index * 100}
      className="bg-gray-800 rounded-lg shadow-xl overflow-hidden border border-gray-700 hover:border-indigo-500 transition-colors duration-300"
    >
      <div
        className="relative h-48 overflow-hidden group cursor-pointer"
        onClick={() => onOpenModal(project)}
      >
        <img
          src={project.images[0]}
          alt={project.title}
          className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
          <span className="text-white bg-black/50 px-4 py-2 rounded-full transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
            View Gallery
          </span>
        </div>
      </div>
      <div className="p-6">
        <h3 className="text-xl font-bold text-gray-100 mb-2">
          {project.title}
        </h3>
        <p className="text-gray-300 mb-4 line-clamp-2">{project.description}</p>
        <div className="flex flex-wrap gap-2 mb-4">
          {project.tags.map((tag, tagIndex) => (
            <span
              key={tagIndex}
              className="px-3 py-1 bg-indigo-900/50 text-indigo-300 rounded-full text-sm border border-indigo-700"
            >
              {tag}
            </span>
          ))}
        </div>
        <div className="flex space-x-4">
          <a
            href={project.githubUrl}
            className="flex items-center text-gray-300 hover:text-indigo-400 transition-transform duration-300 transform hover:scale-105 active:scale-95"
          >
            <Github className="w-5 h-5 mr-2" />
            Code
          </a>
          <a
            href={project.liveUrl}
            className="flex items-center text-gray-300 hover:text-indigo-400 transition-transform duration-300 transform hover:scale-105 active:scale-95"
          ></a>
        </div>
      </div>
    </div>
  );
}
