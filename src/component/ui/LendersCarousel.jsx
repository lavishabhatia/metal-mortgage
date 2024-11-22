import React, { useState } from "react";

import pic1 from "../../../public/pic1.png";
import pic2 from "../../../public/pic2.png";
import pic3 from "../../../public/pic3.png";
import pic4 from "../../../public/pic4.png";
import pic5 from "../../../public/pic5.png";
import pic6 from "../../../public/pic6.png";
import pic7 from "../../../public/pic7.png";
import pic8 from "../../../public/pic8.png";
import pic9 from "../../../public/pic9.png";
import pic10 from "../../../public/pic10.png";
import pic11 from "../../../public/pic11.png";
import pic12 from "../../../public/pic12.png";
import pic13 from "../../../public/pic13.png";
import pic14 from "../../../public/pic14.png";
import pic15 from "../../../public/pic15.png";
import pic16 from "../../../public/pic16.png";
import pic17 from "../../../public/pic17.png";
import pic18 from "../../../public/pic18.png";
import pic19 from "../../../public/pic19.png";
import pic20 from "../../../public/pic20.png";
import pic21 from "../../../public/pic21.png";
import pic22 from "../../../public/pic22.png";
import pic23 from "../../../public/pic23.png";

const lendersData = [
  {
    pic: pic1,
  },
  {
    pic: pic2,
  },
  {
    pic: pic3,
  },
  {
    pic: pic4,
  },
  {
    pic: pic5,
  },
  {
    pic: pic6,
  },
  {
    pic: pic7,
  },
  {
    pic: pic8,
  },
  {
    pic: pic9,
  },
  {
    pic: pic10,
  },
  {
    pic: pic11,
  },
  {
    pic: pic12,
  },
  {
    pic: pic13,
  },
  {
    pic: pic14,
  },
  {
    pic: pic15,
  },
  {
    pic: pic16,
  },
  {
    pic: pic17,
  },
  {
    pic: pic18,
  },
  {
    pic: pic19,
  },
  {
    pic: pic20,
  },
  {
    pic: pic21,
  },
  {
    pic: pic22,
  },
  {
    pic: pic23,
  },
];

const LendersCarousel = () => {

  const itemsPerPage = 6;
  const [currentPage, setCurrentPage] = useState(1);
  const totalPages = Math.ceil(lendersData?.length / itemsPerPage);
  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  const currentLenders = lendersData?.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );
  return (
    <div className="w-full px-4 py-6">
    {/* Pagination */}
    <div className="flex items-start justify-start space-x-4 mb-6">
      <h3 className="font-bold text-2xl text-gray-800 text-start">MY LENDERS</h3>
      {[...Array(totalPages)].map((_, index) => (
        <button
          key={index}
          className={`w-8 h-8 flex items-center justify-center border rounded-full 
            ${
              currentPage === index + 1
                ? "bg-black text-white"
                : "bg-gray-200 text-black"
            }`}
          onClick={() => handlePageChange(index + 1)}
        >
          {index + 1}
        </button>
      ))}
    </div>

    {/* Lenders */}
    <div className="flex flex-wrap justify-center gap-8">
      {currentLenders.map((lender) => (
        <div
          key={lender.id}
          className="flex justify-center items-center w-44 h-36 "
        >
          <img
            src={lender.pic}
            alt={lender.name}
            className=" object-cover"
          />
        </div>
      ))}
    </div>
  </div>
  );
};

export default LendersCarousel;
