import React from "react";

import { Monitor, Globe, Brain } from "lucide-react";

export default function AboutExperience() {
  return (
    <div
      data-aos="fade-up"
      data-aos-duration="1000"
      className="lg:col-span-7 bg-gray-900 rounded-lg p-6 border border-gray-700 "
    >
      <h3 className="text-xl font-bold text-gray-100 mb-4">
        Professional Journey
      </h3>
      <p className="text-gray-300 mb-6">
        I'm a Computer Science enthusiast with three years of UK-based academic
        experience in software development. I specialize in full stack
        development, building complete applications from responsive front-end
        interfaces to robust back-end systems. My expertise spans both
        client-side and server-side technologies.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <ExperienceCard
          icon={<Monitor className="w-6 h-6" />}
          title="Full Stack Development"
          description="Complete solutions from front-end UI to back-end architecture"
        />
        <ExperienceCard
          icon={<Globe className="w-6 h-6" />}
          title="Full Ecosystem Experience"
          description="3 years across web, mobile, and server-side technologies"
        />
        <ExperienceCard
          icon={<Brain className="w-6 h-6" />}
          title="Continuous Learning"
          description="Committed to mastering new frameworks and best practices"
        />
      </div>
    </div>
  );
}

function ExperienceCard({ icon, title, description }) {
  return (
    <div className="bg-gray-800 p-4 rounded-lg border border-gray-700">
      <div className="p-2 bg-indigo-900/50 rounded-lg text-indigo-400 w-fit mb-3">
        {icon}
      </div>
      <h4 className="text-lg font-semibold text-gray-100 mb-2">{title}</h4>
      <p className="text-gray-400 text-sm">{description}</p>
    </div>
  );
}
