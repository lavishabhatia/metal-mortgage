import React from "react";
import profile from "../../../public/profile.png";

const ContactCard = () => {
  return (
    <div className="flex flex-col md:flex-row items-center md:items-start py-4 mx-auto gap-4 max-w-2xl">

      <div className="w-28 h-28 sm:w-32 sm:h-32 flex-shrink-0">
        <img
          src={profile}
          alt="Daniel Char"
          className="w-full h-full object-cover rounded-full"
        />
      </div>

   
      <div className="flex flex-col items-center md:items-start text-center md:text-left">
        <h2 className="text-xl sm:text-2xl text-blue-500 font-semibold">
          Daniel Char
        </h2>

        {/* Phone Info */}
        <p className="flex flex-col sm:flex-row items-center gap-2 border-b border-gray-300 py-3 w-full sm:w-[300px] md:w-[400px]">
          <span className="text-gray-500 text-base sm:text-lg">Phone:</span>
          <span className="text-black text-sm sm:text-base">
            647.748.9010
          </span>
        </p>

        {/* Email Info */}
        <p className="flex flex-col sm:flex-row items-center gap-2 border-b border-gray-300 py-3 w-full sm:w-[300px] md:w-[400px]">
          <span className="text-gray-500 text-base sm:text-lg">Email:</span>
          <a
            href="mailto:example@example.com"
            className="text-blue-500 underline text-sm sm:text-base"
          >
            Click Here
          </a>
        </p>
      </div>
    </div>
  );
};

export default ContactCard;
