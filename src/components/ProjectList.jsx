// ProjectList.js
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import ProjectCardSkeleton from "./ProjectCardSkeleton";
import aofitness from "../Projects/ao-fitness.png";
import kdevs from "../Projects/k-devs.png";
import khf from "../Projects/khf.png";
import vm from "../Projects/vm.png";
import Fran from "../Projects/Fran.png";
import Matlab from "../Projects/matlab.png";
import Weather from "../Projects/weather.png";
import Fit4U from "../Projects/Fit4U.png";
import java from "../Projects/java-BankOO.png";

function ProjectList() {
  const [isLoading, setLoading] = useState(true);
  const [selectedTech, setSelectedTech] = useState("All");
  const navigate = useNavigate();

  setTimeout(() => {
    setLoading(false);
  }, 2000);

  const projects = [
    {
      id: 1,
      title: "AO-fitness (on going project)",
      image: aofitness,
      technologies: ["React", "Tailwind CSS", "Firestore", "VS Code"],
      route: "/aofitness",
    },
    {
      id: 2,
      title: "K-devs CKD project",
      image: kdevs,
      technologies: ["Figma"],
      route: "/kdevs",
    },
    {
      id: 3,
      title: "Kings Health and Fitness mobile app",
      image: khf,
      technologies: ["Figma", "Flutter", "Dart", "Firestore", "Android Studio"],
      route: "/Construction",
    },
    {
      id: 4,
      title: "Victor Mellet's Portfolio",
      image: vm,
      technologies: ["React", "CSS", "VS Code"],
      route: "/Construction",
    },
    {
      id: 5,
      title: "Francisco's Portfolio",
      image: Fran,
      technologies: ["HTML", "CSS", "VS Code"],
      route: "/Construction",
    },
    {
      id: 6,
      title: "Fit4U",
      image: Fit4U,
      technologies: ["Adobe XD"],
      route: "/Construction",
    },
    {
      id: 7,
      title: "5G vs 4G",
      image: Matlab,
      technologies: ["MATLAB"],
      route: "/Construction",
    },
    {
      id: 8,
      title: "Weather App",
      image: Weather,
      technologies: ["Python"],
      route: "/Construction",
    },
    {
      id: 9,
      title: "Event Manager",
      image: java,
      technologies: ["Java Swing", "Java", "NetBeans"],
      route: "/Construction",
    },
    {
      id: 10,
      title: "Bank account Object Oriented Model",
      image: java,
      technologies: ["Java", "NetBeans"],
      route: "/Construction",
    },
    {
      id: 11,
      title: "Citizen Monitoring Object Oriented Model",
      image: java,
      technologies: ["Java", "NetBeans"],
      route: "/Construction",
    },
    {
      id: 12,
      title: "Customer Relationship Object Oriented Model",
      image: java,
      technologies: ["Java", "NetBeans"],
      route: "/Construction",
    },
    {
      id: 13,
      title: "Simple Object Oriented Modeling",
      image: java,
      technologies: ["Java", "NetBeans"],
      route: "/Construction",
    },
    {
      id: 14,
      title: "University Object Oriented Model",
      image: java,
      technologies: ["Java", "NetBeans"],
      route: "/Construction",
    },
    {
      id: 15,
      title: "Bank account",
      image: java,
      technologies: ["Java", "NetBeans"],
      route: "/Construction",
    },
  ];

  const filteredProjects =
    selectedTech === "All"
      ? projects
      : projects.filter((project) =>
          project.technologies.includes(selectedTech)
        );

  const handleProjectClick = (route) => {
    navigate(route);
  };

  return (
    <div>
      <div className="relative">
        <div className="flex sm:justify-end justify-center bg-black ">
          <div className="sm:mr-5 mr-0">
            <select
              value={selectedTech}
              onChange={(e) => setSelectedTech(e.target.value)}
              className="bg-black p-2 rounded-md shadow-md"
              style={{ fontFamily: "Titillium" }}
            >
              <option value="All">All Technologies</option>
              {[
                ...new Set(projects.flatMap((project) => project.technologies)),
              ].map((tech, index) => (
                <option key={index} value={tech}>
                  {tech}
                </option>
              ))}
            </select>
          </div>
        </div>
        <div className="flex bg-black flex-wrap justify-center">
          {isLoading
            ? projects.map((project) => (
                <ProjectCardSkeleton key={project.id} />
              ))
            : filteredProjects.map((project) => (
                <div
                  key={project.id}
                  style={{ backgroundColor: "#27292B" }}
                  className="max-w-xs sm:max-w-sm m-2 rounded-lg transition-transform transform overflow-hidden shadow-lg text-white hover:cursor-pointer m-[30px]"
                  onClick={() => handleProjectClick(project.route)}
                >
                  <div className="w-full">
                    <img
                      className="w-full h-auto"
                      src={project.image}
                      alt={project.title}
                    />
                  </div>
                  <div
                    style={{ backgroundColor: "#27292B" }}
                    className="w-full p-4"
                  >
                    <h2
                      className="text-white font-bold"
                      style={{ fontFamily: "Titillium" }}
                    >
                      {project.title}
                    </h2>
                    {project.technologies && (
                      <div className="flex flex-wrap gap-2 mt-2">
                        {project.technologies.map((tech, index) => (
                          <button
                            key={index}
                            className="bg-blue-500 text-white px-2 py-1 rounded hover:bg-blue-600 focus:outline-none focus:shadow-outline-blue active:bg-blue-800"
                            style={{ fontFamily: "Titillium-bold" }}
                          >
                            {tech}
                          </button>
                        ))}
                      </div>
                    )}
                  </div>
                </div>
              ))}
        </div>
      </div>
    </div>
  );
}

export default ProjectList;
