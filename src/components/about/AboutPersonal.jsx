import React from "react";

import { Dumbbell, Mountain, Trophy } from "lucide-react";
export default function AboutPersonal() {
  return (
    <div
      data-aos="fade-left"
      data-aos-duration="1000"
      className="lg:col-span-12 bg-gray-900 rounded-lg p-6 border border-gray-700"
    >
      <h3 className="text-xl font-bold text-gray-100 mb-4">Beyond the Code</h3>
      <p className="text-gray-300 mb-6">
        My journey extends beyond technology. I've spent five years honing my
        skills in boxing, participating in several bouts, and embracing the
        thrill of competition. Additionally, skiing has been a lifelong passion,
        marked by victories in regional races and the honor of opening the
        British Army ski race.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <Achievement
          icon={<Dumbbell className="w-6 h-6" />}
          title="Boxing"
          description="5 years of dedicated training and competitive bouts"
        />
        <Achievement
          icon={<Mountain className="w-6 h-6" />}
          title="Skiing"
          description="Regional race victories and British Army ski race opener"
        />
        <Achievement
          icon={<Trophy className="w-6 h-6" />}
          title="Competitive Spirit"
          description="Driven by excellence in both sports and technology"
        />
      </div>
    </div>
  );
}

function Achievement({ icon, title, description }) {
  return (
    <div className="flex items-start space-x-4">
      <div className="p-2 bg-indigo-900/50 rounded-lg text-indigo-400">
        {icon}
      </div>
      <div>
        <h4 className="text-lg font-semibold text-gray-100 mb-1">{title}</h4>
        <p className="text-gray-400">{description}</p>
      </div>
    </div>
  );
}
