import React from "react";
import { CiSquarePlus } from "react-icons/ci";
import profile from "../../../public/profile.png";
import Container from "./Container";
import ContactCard from "./ContactCard";
import { useLocation } from "react-router-dom";
import MortgageOptions from "./MortgageOptions";
import VideoBox from "./VideoBox";
import Welcome from "./Welcome";
import ContactInfo from "./ContactInfo";

const ProfileCard = () => {
  const location = useLocation();
  const showContactCard = location.pathname.includes("team");
  const showMortgageOptions = location.pathname.includes("services");
  const showVideoBox = location.pathname.includes("video");
  const showWelcome = location.pathname.includes("/");
  const showContact = location.pathname.includes("/contact");

  return (
    <div className="flex flex-col items-center w-full">

      <Container>
        <div className="shadow-md w-full rounded-lg overflow-hidden">
     
          <div className="flex flex-col md:flex-row bg-gray-200 items-center md:items-start">
    
            <div className="w-full md:w-[25%] bg-gray-200 flex justify-center items-center">
              <img
                src={profile}
                alt="Daniel Char"
                className="w-[150px] h-[150px] sm:w-[200px] sm:h-[200px] md:w-full md:h-full object-cover"
              />
            </div>

         
            <div className="w-full md:w-[75%] p-4 sm:p-6">
              <h2 className="text-xl sm:text-2xl font-bold">Daniel Char</h2>
              <p className="text-gray-600 text-md sm:text-lg mb-2 sm:mb-4">
                Principal Broker
              </p>
              <div className="space-y-1 sm:space-y-2">
                <p>
                  <span className="font-medium">Office:</span>{" "}
                  <a
                    href="#"
                    className="text-blue-500 underline hover:text-blue-700"
                  >
                    Metal Mortgage
                  </a>
                </p>
                <p>
                  <span className="font-medium">Phone:</span> 647.748.9010
                </p>
                <p>
                  <span className="font-medium">Email:</span>{" "}
                  <a
                    href="mailto:daniel@metalmortgage.ca"
                    className="text-blue-500 underline hover:text-blue-700"
                  >
                    daniel@metalmortgage.ca
                  </a>
                </p>
                <p>
                  <span className="font-medium">Address:</span> 38 Iannuzzi
                  Street, Toronto, Ontario
                </p>
              </div>
            </div>
          </div>

          <div className="flex flex-col md:flex-row bg-gray-50">
      
            <div className="w-full md:w-[25%] space-y-1 border-2 border-white">
              <button className="block w-full bg-black hover:bg-white text-white hover:text-black p-3 text-center md:text-left">
                ARRANGE A CALL BACK
              </button>
              <button className="block w-full bg-black hover:bg-white text-white hover:text-black p-3 text-center md:text-left">
                CONTACT ME
              </button>
              <div>
                <button className="flex justify-between items-center w-full bg-black hover:bg-white text-white hover:text-black p-3 text-center md:text-left">
                  CALCULATORS <CiSquarePlus className="w-6 h-6" />
                </button>
              </div>
              <div>
                <button className="flex justify-between items-center w-full bg-black hover:bg-white text-white hover:text-black p-3 text-center md:text-left">
                  DOCUMENTS <CiSquarePlus className="w-6 h-6" />
                </button>
              </div>
            </div>


            <div className="w-full md:w-[75%] p-4 sm:p-6 text-gray-700">
              {showContactCard && <ContactCard />}
              {showMortgageOptions && <MortgageOptions />}
              {showVideoBox && <VideoBox />}
              {showWelcome && <Welcome />}
              {showContact && <ContactInfo />}
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default ProfileCard;
