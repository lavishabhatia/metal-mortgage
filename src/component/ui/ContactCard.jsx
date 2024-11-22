import React from "react";
import { useLocation } from "react-router-dom";
import profile from "../../../public/profile.png";

const ContactCard = () => {
  const location = useLocation();
  const showContactCard = location.pathname.includes("team");
  
  return (
    <div className="flex items-center border p-4 shadow-md max-w-md mx-auto">

      <div className="w-24 h-24 mr-4">
        <img
          src={profile}
          alt="Daniel Char"
          className="w-full h-full object-cover rounded-full"
        />
      </div>

      <div className="flex-1">
        <h2 className="text-xl font-bold text-blue-500 mb-2">Daniel Char</h2>
        <p className="text-sm">
          <span className="font-medium">Phone:</span>{" "}
          <span className="text-black">647.748.9010</span>
        </p>
        <p className="text-sm">
          <span className="font-medium">Email:</span>{" "}
          <a
            href="mailto:example@example.com"
            className="text-blue-500 underline"
          >
            Click Here
          </a>
        </p>
        {showContactCard && <ContactCard />}
      </div>
    </div>
  );
};

export default ContactCard;
