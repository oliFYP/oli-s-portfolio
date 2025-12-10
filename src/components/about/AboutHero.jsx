import React from "react";
import { MapPin, Code2, GraduationCap } from "lucide-react";
import portfolio from "../portfolioimg/oli.jpg";

export default function AboutHero() {
  return (
    <div
      data-aos="fade-right"
      data-aos-duration="1000"
      className="lg:col-span-5 bg-gray-900 rounded-lg p-6 border border-gray-700 flex flex-col items-center justify-center"
    >
      <div className="flex flex-col items-center">
        <div className="flex-shrink-0">
          <img
            src={portfolio}
            alt="Olivier Smith"
            className="w-24 h-24 rounded-lg object-cover"
          />
        </div>
        <div className="mt-4 text-center">
          <h3 className="text-2xl font-bold text-gray-100">Olivier Smith</h3>
          <div className="flex items-center justify-center text-gray-400 mt-2">
            <MapPin className="w-4 h-4 mr-2" />
            <span>Briançon, France</span>
          </div>
          <div className="flex items-center justify-center text-gray-400 mt-2">
            <Code2 className="w-4 h-4 mr-2" />
            <span>Full Stack Developer</span>
          </div>
          <div className="flex items-center justify-center text-gray-400 mt-2">
            <GraduationCap className="w-4 h-4 mr-2" />
            <span>Computer Science Graduate</span>
          </div>
        </div>
      </div>
    </div>
  );
}
