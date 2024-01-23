import background from "../videobg/4K_10.mp4";
import React, { useRef, useState } from "react";

const Videobg = ({ onVideoLoad }) => {
  const handleVideoLoad = () => {
    onVideoLoad(); // Call the parent component's callback
  };

  return (
    <div>
      <video
        autoPlay
        loop
        muted
        playsInline
        className="object-cover w-full h-[600px] lg:h-[700px] xl:h-[800px] transition-all md:pointer-events-none blur-sm"
        id="video"
        style={{ zIndex: -1 }}
        onLoadedData={handleVideoLoad}
      >
        <source src={background} type="video/mp4" />
      </video>
    </div>
  );
};

export default Videobg;
