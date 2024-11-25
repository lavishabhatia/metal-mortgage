import React, { useState, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import bannerDefault from "../../public/banner4.jpg";
import bannerScrolled from "../../public/banner5.jpg";
import banner3 from "../../public/banner3.jpg"; // Add more images as needed
import logo from "../../public/logo.png";

const AboutPage = () => {
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
      {/* Sticky Banner Header */}
      <div
        className={`fixed top-0 w-full z-10 transition-all duration-500 ${
          isScrolled ? "bg-white shadow-lg text-black" : "bg-transparent text-white"
        }`}
      >
        <div className="flex items-center justify-between p-4 max-w-7xl mx-auto">
          <img
            src={logo}
            alt="Logo"
            className="w-12 sm:w-16" /* Adjust logo size for responsiveness */
          />
          <button className="bg-black text-white px-3 py-1 sm:px-4 sm:py-2 flex items-center gap-2 text-xs sm:text-sm">
            APPLY NOW
            <span className="material-icons">edit</span>
          </button>
        </div>
      </div>

      {/* Dynamic Banner with Carousel */}
      <div className="w-full">
        <Swiper
          modules={[Navigation, Pagination, Autoplay]}
          navigation
          pagination={{ clickable: true }}
          autoplay={{ delay: 5000 }}
          loop
          className="h-[200px] sm:h-[300px] lg:h-[600px]" /* Adjust banner height */
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

      {/* Footer Section */}
      <div className="absolute bottom-4 right-4 text-[8px] sm:text-xs bg-black text-white py-1 px-2 sm:px-4 flex flex-wrap gap-2 sm:gap-4">
        <span>AGENT LICENSE ID | M13002164</span>
        <span>BROKERAGE LICENSE ID | 13607</span>
      </div>
    </div>
  );
};

export default AboutPage;
