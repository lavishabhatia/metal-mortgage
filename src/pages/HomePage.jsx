import React, { useState, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import bannerDefault from "../../public/banner.png";
import bannerScrolled from "../../public/banner2.png";
import banner3 from "../../public/banner3.jpg"; 
import logo from "../../public/logo.png";

const HomePage = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 100);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className="relative w-full flex flex-col items-center">
    
      <div
        className={`fixed top-0 w-full z-10 transition-all duration-500 ${
          isScrolled ? "bg-white shadow-lg text-black" : "bg-transparent text-white"
        }`}
      >
        <div className="flex items-center justify-between px-4 md:px-8 py-2 md:py-4">
       
          <img
            src={logo}
            alt="Logo"
            className="w-12 md:w-16 lg:w-20"
          />

          <button className="bg-black text-white px-3 py-1 md:px-4 md:py-2 flex items-center gap-2 text-xs md:text-sm lg:text-base">
            APPLY NOW
            <span className="material-icons">edit</span>
          </button>
        </div>
      </div>

  
      <div className="w-full">
        <Swiper
          modules={[Navigation, Pagination, Autoplay]}
          navigation
          pagination={{ clickable: true }}
          autoplay={{ delay: 5000 }}
          loop
          className="h-[400px] md:h-[500px] lg:h-[600px]"
        >
          <SwiperSlide>
            <img
              src={bannerDefault}
              alt="Banner 1"
              className="w-full h-full object-cover"
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              src={bannerScrolled}
              alt="Banner 2"
              className="w-full h-full object-cover"
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              src={banner3}
              alt="Banner 3"
              className="w-full h-full object-cover"
            />
          </SwiperSlide>
        </Swiper>
      </div>

  
      <div className="absolute bottom-4 right-4 text-xs md:text-sm bg-black text-white py-1 px-2 md:py-2 md:px-4 flex flex-col md:flex-row gap-2 md:gap-4 items-center md:items-start">
        <span>AGENT LICENSE ID | M13002164</span>
        <span>BROKERAGE LICENSE ID | 13607</span>
      </div>
    </div>
  );
};

export default HomePage;
