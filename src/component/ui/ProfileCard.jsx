import React from "react";
import { CiSquarePlus } from "react-icons/ci";
import profile from "../../../public/profile.png";
import Container from "./Container";
import ContactCard from "./ContactCard";
import { useLocation } from "react-router-dom";
import MortgageOptions from "./MortgageOptions";
import VideoBox from "./VideoBox";
import Welcome from "./Welcome";

const ProfileCard = () => {
  const location = useLocation();
  const showContactCard = location.pathname.includes("team");
  const showMortgageOptions = location.pathname.includes("services");
  const showVideoBox = location.pathname.includes("video");
  const showWelcome = location.pathname.includes("/");
  
  return (
    <div className="  flex flex-col items-center w-full">
      {/* Main Container */}
      <Container>
        <div className="shadow-md  w-full rounded-lg overflow-hidden">
          {/* Header Section */}
          <div className="flex flex-col bg-gray-200  md:flex-row items-center md:items-start">
            {/* Image Section */}
            <div className="bg-gray-200 w-[25%] flex justify-center items-center">
              <img
                src={profile}
                alt="Daniel Char"
                className="w-full h-full object-cover"
              />
            </div>

            {/* Info Section */}
            <div className="w-[75%] p-6">
              <h2 className="text-2xl font-bold">Daniel Char</h2>
              <p className="text-gray-600 text-lg mb-4">Principal Broker</p>
              <div className="space-y-2">
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

          {/* Sidebar Section */}
          <div className="flex flex-col md:flex-row bg-gray-50">
            {/* Sidebar */}
            <div className="w-[25%] space-y-1 border-2 border-white">
              <button className="block w-full bg-black hover:bg-white text-white hover:text-black p-3 text-left ">
                ARRANGE A CALL BACK
              </button>
              <button className="block w-full bg-black hover:bg-white text-white hover:text-black p-3 text-left">
                CONTACT ME
              </button>
              <div>
                <button className=" w-full bg-black hover:bg-white text-white hover:text-black p-3 text-left flex justify-between">
                  CALCULATORS <CiSquarePlus className="w-7 h-7" />
                </button>
              </div>
              <div>
                <button className="flex justify-between w-full bg-black hover:bg-white text-white hover:text-black p-3 text-left">
                  DOCUMENTS <CiSquarePlus className="w-7 h-7" />
                </button>
              </div>
            </div>

            {/* Description Section */}
            <div className="w-[75%] p-6 text-gray-700">
              {showContactCard && <ContactCard />}
              {showMortgageOptions && <MortgageOptions />}
              {showVideoBox && <VideoBox />}
              {showWelcome && <Welcome />}

              {/* <p className="text-lg font-bold mb-4">
                Welcome to Metal Mortgage
              </p>
              <p className="mb-4">
                Finding the right financing solution for your business can be a
                daunting task, especially if you've faced rejections from
                traditional banks. But fear not, because you're in the right
                place.
              </p>
              <p className="mb-4">
                At Metal Mortgage, we specialize in helping business owners like
                you navigate the complex world of mortgages. Whether you're
                looking to purchase your first property or refinance existing
                mortgages, our team is here to turn your dreams into reality.
              </p>
              <p className="mb-4">
                We understand the unique challenges you face, and we're
                committed to finding tailored solutions that suit your needs.
                With our extensive network of lenders and our expertise in
                mortgage brokering, we'll work tirelessly to secure the
                financing you deserve.
              </p>
              <p>
                Welcome aboard, let's unlock the doors to your financial success
                together!
              </p> */}
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default ProfileCard;
