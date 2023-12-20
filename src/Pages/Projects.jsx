import React, { useState } from "react";
import aofitness from "../Projects/ao-fitness.png";
import kdevs from "../Projects/k-devs.png";
import khf from "../Projects/khf.png";
import vm from "../Projects/vm.png";
import Footer from "../components/Footer";
import { PacmanLoader } from "react-spinners";

function Project() {
  const [isLoading, setLoading] = useState(true);
  setTimeout(() => {
    setLoading(false);
  }, 3000);
  const projects = [
    {
      id: 1,
      title: "AO-fitness (on going project)",
      image: aofitness,
    },
    {
      id: 2,
      title: "K-devs CKD project",
      image: kdevs,
    },
    {
      id: 3,
      title: "Kings Health and Fitness mobile app",
      image: khf,
    },
    {
      id: 4,
      title: "Victor Mellet's Portfolio",
      image: vm,
    },
    {
      id: 5,
      title: "Project 1",
      image: aofitness,
    },
    // Add more projects as needed
  ];

  return (
    <div>
      {isLoading ? (
        <div className="absolute top-0 left-0 w-full h-full flex justify-center items-center bg-black">
          <PacmanLoader color="#ffffff" />
        </div>
      ) : (
        <>
          <div className="relative">
            <div className="flex flex-wrap justify-center bg-gradient-to-r from-slate-900 to-slate-900">
              {projects.map((project) => (
                <div
                  key={project.id}
                  className="max-w-xs sm:max-w-sm m-2 rounded-lg transition-transform transform overflow-hidden shadow-lg bg-black text-white hover:scale-110 m-[40px]"
                >
                  <div className="w-full">
                    <img
                      className="w-full h-auto"
                      src={project.image}
                      alt={project.title}
                    />
                  </div>
                  <div className="w-full bg-gradient-to-r from-slate-500 to-slate-800 p-4">
                    <h2 className="text-white font-bold">{project.title}</h2>
                  </div>
                </div>
              ))}
            </div>
            <Footer />
          </div>
        </>
      )}
    </div>
  );
}

export default Project;
