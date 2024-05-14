import React from "react";

// Skeleton layout for project cards
const ProjectCardSkeleton = () => {
  return (
    <div
      style={{ backgroundColor: "#27292B" }}
      className="sm:w-[384px] sm:h-[540px] w-[320px] h-[473px] m-2 rounded-lg overflow-hidden text-white  hover:cursor-pointer m-[30px]"
    >
      {/* Skeleton for the image placeholder */}
      <div className="w-full sm:h-[401px] h-[320px] bg-gray-500 animate-pulse"></div>
      {/* Container for project details */}
      <div style={{ backgroundColor: "#27292B" }} className="w-full  p-4">
        {/* Skeleton for project title */}
        <h2 className="text-white font-bold mb-2 h-6 bg-gray-500 animate-pulse"></h2>
        {/* Skeleton for tags */}
        <div className="flex flex-wrap gap-2 mt-2">
          <div className="bg-blue-500 text-white px-2 py-1 rounded animate-pulse"></div>
          <div className="bg-blue-500 text-white px-2 py-1 rounded animate-pulse"></div>
        </div>
      </div>
    </div>
  );
};

export default ProjectCardSkeleton;
