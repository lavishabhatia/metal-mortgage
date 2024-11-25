import React from "react";

const VideoBox = () => {
  return (
    <div className="relative w-full max-w-xl mx-auto">
      {/* Video Box */}
      <div className="aspect-w-16 aspect-h-9 bg-gray-200">
        <iframe
          width="560"
          height="315"
          src="https://www.youtube.com/embed/WE_EgwFRils?si=NHIULPcDXmbt6Xto"
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerPolicy="strict-origin-when-cross-origin"
          allowFullScreen
          className="w-full h-full"
        ></iframe>
      </div>
      {/* More Videos Section */}
      <div className="absolute bottom-0 left-0 w-full bg-black bg-opacity-90 text-white py-3 px-4">
        <h3 className="text-sm font-semibold mb-2">More videos</h3>
        <div className="flex gap-2 overflow-x-auto">
          {/* Example thumbnails */}
          <div className="w-28 h-16 bg-gray-300 flex-shrink-0"></div>
          <div className="w-28 h-16 bg-gray-300 flex-shrink-0"></div>
          <div className="w-28 h-16 bg-gray-300 flex-shrink-0"></div>
          <div className="w-28 h-16 bg-gray-300 flex-shrink-0"></div>
          <div className="w-28 h-16 bg-gray-300 flex-shrink-0"></div>
        </div>
      </div>
    </div>
  );
};

export default VideoBox;
