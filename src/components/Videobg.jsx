import React from "react";
import background from "../videobg/4K_10.mp4";

function Videobg() {
  return (
    <div>
      <video
        autoPlay
        loop
        muted
        playsInline
        className="object-cover w-full h-[600px] lg:h-[700px] xl:h-[800px] transition-all md:pointer-events-none blur-sm"
        id="video"
      >
        <source src={background} type="video/mp4" />
      </video>
    </div>
  );
}

export default Videobg;
