import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css"; // Import AOS styles
import { ExternalLink, Github } from "lucide-react";
import ProjectModal from "./ProjectModal";
import ProjectCard from "./ProjectCard";
import aofitness from "../../assets/images/preview.jpeg";
import consentia from "../../assets/images/consentia.png";
import covid from "../../assets/images/covid.svg";
import khf from "../../assets/images/khf-preview.jpeg";
import kdevs1 from "../../assets/images/kdev-preview4.jpeg";
import vm from "../../assets/images/vm.svg";
import fit4u from "../../assets/images/Fit4U.svg";
import ers from "../../assets/images/ERS.png";
import mza from "../../assets/images/MZAmedia.png";

const projects = [
  {
    title: "ERS Media Portal",
    description:
      "A comprehensive media management portal built with React, Tailwind CSS, MongoDB Atlas and Fastapi. Features user authentication, content management, and real-time database synchronization for seamless media organization and delivery.",
    images: [ers],
    tags: [
      "React",
      "Tailwind CSS",
      "Mongo DB",
      "FastAPI",
      "REST API",
      "JWT Authentication",
    ],
    githubUrl: "https://ers-media-mongo-db-fast-a-pi.vercel.app/login",
  },
  {
    title: "MZA Media",
    description:
      "A modern media platform developed with React and Tailwind CSS, delivering a responsive and visually appealing user interface for media content presentation and engagement.",
    images: [mza],
    tags: ["React", "Tailwind CSS"],
    githubUrl: "https://olifyp.github.io/MZA-media/",
  },
  {
    title: "Consentia.uk",
    description:
      "Developed a responsive React-based website for a GDPR consulting service, featuring a clean UI, clear service presentation.",
    images: [consentia],
    tags: ["React", "Tailwind CSS", "Vercel"],
    githubUrl: "https://consentia.uk",
  },
  {
    title: "Website Portfolio",
    description:
      "A modern, responsive portfolio website showcasing creative work through clean design and smooth animations.",
    images: [vm],
    tags: ["React", "CSS", "Responsive Design"],
    githubUrl: "https://olifyp.github.io/victor-mellet-portfolio",
  },
  {
    title: "AO Fitness (in works)",
    description:
      "A comprehensive fitness platform built with React and Firebase, offering personalized workout plans and progress tracking.",
    images: [aofitness],
    tags: ["React", "Tailwind CSS", "Firestore", "Authentication"],
    githubUrl: "https://olifyp.github.io/ao-fitness/",
  },
  {
    title: "Kings Health and Fitness",
    description:
      "A feature-rich mobile application for fitness enthusiasts, built with Flutter and integrated with Firestore for real-time data management.",
    images: [khf],
    tags: ["Flutter", "Dart", "Firestore", "Android Studio"],
    githubUrl: "#",
  },
  {
    title: "K-devs CKD Project",
    description:
      "A healthcare platform designed to support Chronic Kidney Disease patients, featuring an intuitive user interface created in Figma.",
    images: [kdevs1],
    tags: ["Figma", "UI/UX", "Healthcare", "Design"],
    githubUrl: "#",
  },
  {
    title: "Covid Scanner Project",
    description:
      "A healthcare solution designed for efficient COVID-19 test result scanning, featuring an intuitive user interface crafted in Figma.",
    images: [covid],
    tags: ["Figma", "UI/UX", "Healthcare", "Design"],
    githubUrl: "#",
  },

  {
    title: "Fit4U",
    description:
      "A modern fitness application design created in Adobe XD, focusing on user experience and intuitive navigation.",
    images: [fit4u],
    tags: ["Adobe XD", "UI/UX", "Prototyping"],
    githubUrl: "#",
  },
  {
    title: "Weather App",
    description:
      "A Python-based weather application providing real-time weather updates and forecasts with a clean interface.",
    images: [
      "https://images.unsplash.com/photo-1592210454359-9043f067919b?auto=format&fit=crop&q=80&w=800&h=500",
    ],
    tags: ["Python", "API Integration", "Data Visualization"],
    githubUrl: "#",
  },
  {
    title: "Event Manager",
    description:
      "A Java Swing application for managing events and schedules, built with NetBeans for a robust desktop experience.",
    images: [
      "https://images.unsplash.com/photo-1492684223066-81342ee5ff30?auto=format&fit=crop&q=80&w=800&h=500",
    ],
    tags: ["Java", "Swing", "NetBeans"],
    githubUrl: "#",
  },
  {
    title: "Java OO Projects",
    description:
      "A collection of object-oriented models including Bank Account, Citizen Monitoring, and University systems.",
    images: [
      "https://images.unsplash.com/photo-1515879218367-8466d910aaa4?auto=format&fit=crop&q=80&w=800&h=500",
    ],
    tags: ["Java", "OOP", "Software Architecture"],
    githubUrl: "#",
  },
];

export default function Projects() {
  const [selectedProject, setSelectedProject] = React.useState(null);
  useEffect(() => {
    AOS.init({
      duration: 1000, // whether animation should happen only once - while scrolling down
    });
  }, []);

  return (
    <section id="projects" className="py-20 bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div data-aos="fade-up" className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-100 mb-4">
            Featured Projects
          </h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            A showcase of my technical expertise across web, mobile, and
            software development, featuring real-world applications and design
            projects.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <ProjectCard
              key={index}
              project={project}
              index={index}
              onOpenModal={setSelectedProject}
            />
          ))}
        </div>
      </div>
      <ProjectModal
        project={selectedProject}
        isOpen={!!selectedProject}
        onClose={() => setSelectedProject(null)}
      />
    </section>
  );
}
