import React from "react";
import profile from "../../../public/profile.png";

const ContactCard = () => {
  
  
  return (
    <div className="flex items-center  py-4 mx-auto">

      <div className="w-28 h-32 mr-4">
        <img
          src={profile}
          alt="Daniel Char"
          className="w-full h-full object-cover "
        />
      </div>

      <div className="flex flex-col">
        <h2 className="text-2xl  text-blue-500 ">Daniel Char</h2>
        <p className="flex items-center gap-5 border-gray-300 w-[400px] border-b py-3">
          <span className=" text-gray-500 text-xl">Phone:</span>{" "}
          <span className="text-black text-base">647.748.9010</span>
        </p>
        <p className="flex items-center gap-5 border-gray-300 w-[400px] border-b py-3">
          <span className="text-gray-500 text-xl">Email:</span>{" "}
          <a
            href="mailto:example@example.com"
            className="text-blue-500 underline"
          >
            Click Here
          </a>
        </p>
      
      </div>
    </div>
  );
};

export default ContactCard;
