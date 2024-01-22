import React from "react";

const ProjectCardSkeleton = () => {
  return (
    <div className="sm:w-[384px] sm:h-[540px] w-[320px] h-[473px] m-2 rounded-lg overflow-hidden bg-gradient-to-r from-slate-800 to-slate-500 text-white  hover:cursor-pointer m-[30px]">
      <div className="w-full sm:h-[401px] h-[320px] bg-gray-500 animate-pulse"></div>
      <div className="w-full bg-gradient-to-r from-slate-800 to-slate-500 p-4">
        <h2 className="text-white font-bold mb-2 h-6 bg-gray-500 animate-pulse"></h2>
        <div className="flex flex-wrap gap-2 mt-2">
          <div className="bg-blue-500 text-white px-2 py-1 rounded animate-pulse"></div>
          <div className="bg-blue-500 text-white px-2 py-1 rounded animate-pulse"></div>
        </div>
      </div>
    </div>
  );
};

export default ProjectCardSkeleton;
