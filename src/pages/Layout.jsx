import React, { Children } from "react";
import Navbar from "../component/ui/Navbar";
import { Outlet } from "react-router-dom";
import Footer from "../component/ui/Footer";
import Container from "../component/ui/Container";
import LendersCarousel from "../component/ui/LendersCarousel";
import ProfileCard from "../component/ui/ProfileCard";

import logo from "../../public/logo.png";

const Layout = () => {
  return (
    <div>
      <div className=" fixed z-[999]  bg-black flex items-center top-0 left-0 h-[75px] w-full">
        <Navbar />
      </div>
      <Container>
        <div className=" fixed z-[950] flex items-center top-[85px] ">
          <div className=" relative">
            <div className="  absolute left-0 bg-white">
              <div className="flex items-center flex-col gap-5 justify-between p-4">
                <img
                  src={logo}
                  alt="Logo"
                  className=" max-w-[250px] aspect-video"
                />
                <button className="bg-black text-white px-4 py-2 flex items-center w-full gap-2 mt-12">
                  APPLY NOW
                  <span className="ml-1">✏️</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </Container>

      <div className=" mt-[75px]">
        <Outlet />
        {/* </Container> */}
        <div className="!z-[980] relative block">
          <ProfileCard />
          <Container>
            <LendersCarousel />
            <Footer />
          </Container>
        </div>
      </div>
      {/* <Container> */}
    </div>
  );
};
export default Layout;
