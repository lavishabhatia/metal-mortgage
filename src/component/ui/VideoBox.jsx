import React from "react";

const VideoBox = () => {
  return (
    <div className=" w-full flex items-center justify-center">
      {/* Video Box */}
      <div className="w-[900px] h-[600px] bg-gray-200">
        <iframe
          //   width="560"
          //   height="315"
          src="https://www.youtube.com/embed/WE_EgwFRils?si=NHIULPcDXmbt6Xto"
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerPolicy="strict-origin-when-cross-origin"
          allowFullScreen
          className="w-full h-full"
        ></iframe>
      </div>
    </div>
  );
};

export default VideoBox;
