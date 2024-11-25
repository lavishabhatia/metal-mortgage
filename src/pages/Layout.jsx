import React from "react";
import Navbar from "../component/ui/Navbar";
import { Outlet } from "react-router-dom";
import Footer from "../component/ui/Footer";
import Container from "../component/ui/Container";
import LendersCarousel from "../component/ui/LendersCarousel";
import ProfileCard from "../component/ui/ProfileCard";

import logo from "../../public/logo.png";

const Layout = () => {
  return (
    <div className="w-full">
      {/* Fixed Navbar */}
      <div className="fixed z-[999] bg-black flex items-center top-0 left-0 h-[60px] sm:h-[75px] w-full">
        <Navbar />
      </div>

      {/* Sidebar Section */}
      <Container>
        <div className="flex w-full lg:fixed z-[950]  items-center lg:top-[65px] ">
          <div className="lg:relative">
            <div className="lg:absolute lg:left-0 bg-white shadow-lg lg:w-[200px] w-full p-4">
              <div className="flex flex-col items-center gap-5 w-full">
                {/* Logo */}
                <img
                  src={logo}
                  alt="Logo"
                  className="w-[300px] lg:max-w-[150px]  aspect-video"
                />
                {/* Apply Now Button */}
                <button className="bg-black text-white px-4 py-2 text-xs sm:text-sm flex items-center w-full gap-2 mt-6 sm:mt-12">
                  APPLY NOW
                  <span className="ml-1">✏️</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </Container>

      {/* Main Content */}
      <div className="mt-[70px] sm:mt-[85px]">
        <Outlet />
        <div className="z-[980] relative block">
          {/* Profile Card */}
          <ProfileCard />
          <Container>
            {/* Lenders Carousel */}
            <LendersCarousel />
            {/* Footer */}
            <Footer />
          </Container>
        </div>
      </div>
    </div>
  );
};

export default Layout;
