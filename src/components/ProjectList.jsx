import React, { useState } from "react";
import ProjectCardSkeleton from "./ProjectCardSkeleton";
import aofitness from "../Projects/ao-fitness.png";
import kdevs from "../Projects/k-devs.png";
import khf from "../Projects/khf.png";
import vm from "../Projects/vm.png";
import Fran from "../Projects/Fran.png";
import Matlab from "../Projects/matlab.png";
import Fit4U from "../Projects/Fit4U.png";
import java from "../Projects/java-BankOO.png";

function ProjectList() {
  const [isLoading, setLoading] = useState(true);
  setTimeout(() => {
    setLoading(false);
  }, 10000);

  const projects = [
    {
      id: 1,
      title: "AO-fitness (on going project)",
      image: aofitness,
      technologies: ["React", "Tailwind CSS", "Firestore", "VS Code"],
    },
    {
      id: 2,
      title: "K-devs CKD project",
      image: kdevs,
      technologies: ["Figma"],
    },
    {
      id: 3,
      title: "Kings Health and Fitness mobile app",
      image: khf,
      technologies: ["Figma", "Flutter", "Dart", "Firestore", "Android Studio"],
    },
    {
      id: 4,
      title: "Victor Mellet's Portfolio",
      image: vm,
      technologies: ["React", "CSS", "VS Code"],
    },
    {
      id: 5,
      title: "Francisco's Portfolio",
      image: Fran,
      technologies: ["HTML", "CSS", "VS Code"],
    },
    {
      id: 6,
      title: "Fit4U",
      image: Fit4U,
      technologies: ["Adobe XD"],
    },
    {
      id: 7,
      title: "5G vs 4G",
      image: Matlab,
      technologies: ["MATLAB"],
    },
    {
      id: 8,
      title: "Event Manager",
      image: java,
      technologies: ["Java Swing", "Java", "NetBeans"],
    },
    {
      id: 9,
      title: "Bank account Object Oriented Model",
      image: java,
      technologies: ["Java", "NetBeans"],
    },
    {
      id: 10,
      title: "Citizen Monitoring Object Oriented Model",
      image: java,
      technologies: ["Java", "NetBeans"],
    },
    {
      id: 11,
      title: "Customer Relationship Object Oriented Model",
      image: java,
      technologies: ["Java", "NetBeans"],
    },
    {
      id: 12,
      title: "Simple Object Oriented Modeling",
      image: java,
      technologies: ["Java", "NetBeans"],
    },
    {
      id: 13,
      title: "University Object Oriented Model",
      image: java,
      technologies: ["Java", "NetBeans"],
    },
    {
      id: 14,
      title: "Bank account",
      image: java,
      technologies: ["Java", "NetBeans"],
    },
  ];

  return (
    <div>
      <div className="relative">
        <div className="flex flex-wrap justify-center bg-gradient-to-r from-slate-900 to-slate-900">
          {projects.map((project) =>
            isLoading ? (
              <ProjectCardSkeleton key={project.id} />
            ) : (
              <div
                key={project.id}
                className="max-w-xs sm:max-w-sm m-2 rounded-lg transition-transform transform overflow-hidden shadow-lg bg-gradient-to-r from-slate-800 to-slate-500 text-white  hover:cursor-pointer m-[30px]"
              >
                <div className="w-full">
                  <img
                    className="w-full h-auto"
                    src={project.image}
                    alt={project.title}
                  />
                </div>
                <div className="w-full bg-gradient-to-r from-slate-800 to-slate-500 p-4">
                  <h2 className="text-white font-bold">{project.title}</h2>
                  {project.technologies && (
                    <div className="flex flex-wrap gap-2 mt-2">
                      {project.technologies.map((tech, index) => (
                        <button
                          key={index}
                          className="bg-blue-500 text-white px-2 py-1 rounded hover:bg-blue-600 focus:outline-none focus:shadow-outline-blue active:bg-blue-800"
                        >
                          {tech}
                        </button>
                      ))}
                    </div>
                  )}
                </div>
              </div>
            )
          )}
        </div>
      </div>
    </div>
  );
}

export default ProjectList;
