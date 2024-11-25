import React from "react";

const VideoBox = () => {
  return (
    <div className="w-full flex items-center justify-center px-4 sm:px-8">
      {/* Video Box */}
      <div className="w-full max-w-3xl aspect-w-16 aspect-h-9 bg-gray-200">
        <iframe
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
