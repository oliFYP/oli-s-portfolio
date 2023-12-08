import background from "../videobg/4K_10.mp4";
import React, { useRef, useState } from "react";

const Videobg = ({ onVideoLoad }) => {
  const videoRef = useRef(null);

  const handleVideoLoad = () => {
    // Notify the parent component that the video has loaded
    onVideoLoad();
  };

  return (
    <div>
      <video
        autoPlay
        loop
        muted
        playsInline
        onLoadedData={handleVideoLoad}
        ref={videoRef}
        className="object-cover w-full h-[600px] lg:h-[700px] xl:h-[800px] transition-all md:pointer-events-none blur-sm"
        id="video"
        style={{ zIndex: -1 }}
      >
        <source src={background} type="video/mp4" />
      </video>
    </div>
  );
};

export default Videobg;
