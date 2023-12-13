import React from "react";
import aofitness from "../Projects/ao-fitness.png";
import kdevs from "../Projects/k-devs.png";
import khf from "../Projects/khf.png";
import Footer from "../components/Footer";

function Project() {
  const projects = [
    {
      id: 1,
      title: "AO-fitness (on going project)",
      image: aofitness, // Replace this URL with your actual image URL
    },
    {
      id: 2,
      title: "K-devs CKD project",
      image: kdevs, // Replace this URL with your actual image URL
    },
    {
      id: 3,
      title: "Kings Health and Fitness mobile app",
      image: khf, // Replace this URL with your actual image URL
    },
    {
      id: 4,
      title: "Project 1",
      image: aofitness, // Replace this URL with your actual image URL
    },
    {
      id: 5,
      title: "Project 1",
      image: aofitness, // Replace this URL with your actual image URL
    },
    // Add more projects as needed
  ];

  return (
    <div className="relative">
      <div className="flex flex-wrap justify-center  bg-grey">
        {projects.map((project) => (
          <div
            key={project.id}
            className="max-w-xs m-2 rounded-lg overflow-hidden shadow-lg bg-black text-white"
          >
            <div className="w-full">
              <img
                className="w-auto h-full"
                src={project.image}
                alt={project.title}
              />
            </div>
            <div className="w-full bg-gradient-to-r from-slate-900 to-slate-700 p-4">
              <h2 className="text-white font-bold">{project.title}</h2>
            </div>
          </div>
        ))}
      </div>
      <Footer />
    </div>
  );
}

export default Project;
