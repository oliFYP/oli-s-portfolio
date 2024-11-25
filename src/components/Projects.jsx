import React from "react";
import { motion } from "framer-motion";
import { ExternalLink, Github } from "lucide-react";
import aofitness from "../Projects/ao-fitness.jpeg";
import kdevs from "../Projects/k-devs.jpeg";
import khf from "../Projects/khf.jpeg";
import vm from "../Projects/vm.png";
import Fran from "../Projects/Fran.png";
import Matlab from "../Projects/matlab.png";
import Weather from "../Projects/weather.png";
import Fit4U from "../Projects/Fit4U.png";
import java from "../Projects/java-BankOO.png";

const projects = [
  {
    title: "AO Fitness",
    description:
      "A comprehensive fitness platform built with React and Firebase, offering personalized workout plans and progress tracking.",
    image: aofitness,
    tags: ["React", "Tailwind CSS", "Firestore", "Authentication"],
    githubUrl: "#",
  },
  {
    title: "Kings Health and Fitness",
    description:
      "A feature-rich mobile application for fitness enthusiasts, built with Flutter and integrated with Firestore for real-time data management.",
    image: khf,
    tags: ["Flutter", "Dart", "Firestore", "Android Studio"],
    githubUrl: "#",
    liveUrl: "#",
  },
  {
    title: "K-devs CKD Project",
    description:
      "A healthcare platform designed to support Chronic Kidney Disease patients, featuring an intuitive user interface created in Figma.",
    image: kdevs,
    tags: ["Figma", "UI/UX", "Healthcare", "Design System"],
    githubUrl: "#",
    liveUrl: "#",
  },
  {
    title: "Victor Mellets Portfolio",
    description:
      "A modern, responsive portfolio website showcasing creative work through clean design and smooth animations.",
    image:
      "https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?auto=format&fit=crop&q=80&w=800&h=500",
    tags: ["React", "CSS", "Responsive Design"],
    githubUrl: "#",
    liveUrl: "#",
  },
  {
    title: "Francisco Portfolio",
    description:
      "A sleek portfolio website built with pure HTML and CSS, demonstrating strong fundamentals in web development.",
    image:
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=800&h=500",
    tags: ["HTML", "CSS", "Web Design"],
    githubUrl: "#",
    liveUrl: "#",
  },
  {
    title: "Fit4U",
    description:
      "A modern fitness application design created in Adobe XD, focusing on user experience and intuitive navigation.",
    image:
      "https://images.unsplash.com/photo-1476480862126-209bfaa8edc8?auto=format&fit=crop&q=80&w=800&h=500",
    tags: ["Adobe XD", "UI/UX", "Prototyping"],
    githubUrl: "#",
    liveUrl: "#",
  },
  {
    title: "Weather App",
    description:
      "A Python-based weather application providing real-time weather updates and forecasts with a clean interface.",
    image:
      "https://images.unsplash.com/photo-1592210454359-9043f067919b?auto=format&fit=crop&q=80&w=800&h=500",
    tags: ["Python", "API Integration", "Data Visualization"],
    githubUrl: "#",
    liveUrl: "#",
  },
  {
    title: "Event Manager",
    description:
      "A Java Swing application for managing events and schedules, built with NetBeans for a robust desktop experience.",
    image:
      "https://images.unsplash.com/photo-1492684223066-81342ee5ff30?auto=format&fit=crop&q=80&w=800&h=500",
    tags: ["Java", "Swing", "NetBeans"],
    githubUrl: "#",
    liveUrl: "#",
  },
  {
    title: "Java OO Projects",
    description:
      "A collection of object-oriented models including Bank Account, Citizen Monitoring, and University systems.",
    image:
      "https://images.unsplash.com/photo-1515879218367-8466d910aaa4?auto=format&fit=crop&q=80&w=800&h=500",
    tags: ["Java", "OOP", "Software Architecture"],
    githubUrl: "#",
    liveUrl: "#",
  },
];

export default function Projects() {
  return (
    <section id="projects" className="py-20 bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-gray-100 mb-4">
            Featured Projects
          </h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            A showcase of my technical expertise across web, mobile, and
            software development, featuring real-world applications and design
            projects.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <ProjectCard key={index} project={project} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}

function ProjectCard({ project, index }) {
  return (
    <motion.div
      initial={{ y: 20, opacity: 0 }}
      whileInView={{ y: 0, opacity: 1 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1 }}
      className="bg-gray-800 rounded-lg shadow-xl overflow-hidden border border-gray-700 hover:border-indigo-500 transition-colors duration-300"
    >
      <div className="relative h-48 overflow-hidden group">
        <img
          src={project.image}
          alt={project.title}
          className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
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
          <motion.a
            href={project.githubUrl}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="flex items-center text-gray-300 hover:text-indigo-400"
          >
            <Github className="w-5 h-5 mr-2" />
            Code
          </motion.a>
          <motion.a
            href={project.liveUrl}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="flex items-center text-gray-300 hover:text-indigo-400"
          ></motion.a>
        </div>
      </div>
    </motion.div>
  );
}
