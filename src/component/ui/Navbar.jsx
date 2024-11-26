import React, { useState } from "react";
import Container from "./Container";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <div className="bg-black relative z-50 w-full">
      <Container>
        <nav className="flex items-center justify-between text-white px-6 py-4">

          <div className="flex gap-4">
            <a href="/" className="text-xl font-bold">
              <img src="/logo.png" alt="Logo" className="h-8 w-auto" />
            </a>

            <div className="hidden md:flex items-center space-x-6">
              <a href="/" className="hover:text-gray-400">
                HOME
              </a>
              <a href="/about" className="hover:text-gray-400">
                ABOUT
              </a>
              <a href="/team" className="flex items-center hover:text-gray-400">
                TEAM <span className="ml-1">👥</span>
              </a>
              <a href="/services" className="hover:text-gray-400">
                SERVICES
              </a>
              <a href="/video" className="hover:text-gray-400">
                VIDEO
              </a>
              <a
                href="/contact"
                className="flex items-center hover:text-gray-400"
              >
                CONTACT ME <span className="ml-1">✉️</span>
              </a>
            </div>
          </div>

          <div className="hidden md:block">
            <a
              href="/apply"
              className="flex items-center hover:text-gray-400 text-sm font-semibold"
            >
              APPLY NOW <span className="ml-1">✏️</span>
            </a>
          </div>

         
          <button
            className="block md:hidden text-xl focus:outline-none"
            onClick={toggleMenu}
            aria-label="Toggle Menu"
          >
            {isMenuOpen ? "✖️" : "☰"}
          </button>
        </nav>

        {isMenuOpen && (
          <div className="md:hidden flex flex-col space-y-4 p-4 bg-gray-900 text-white">
            <a href="/" className="hover:text-gray-400">
              HOME
            </a>
            <a href="/about" className="hover:text-gray-400">
              ABOUT
            </a>
            <a href="/team" className="flex items-center hover:text-gray-400">
              TEAM <span className="ml-1">👥</span>
            </a>
            <a href="/services" className="hover:text-gray-400">
              SERVICES
            </a>
            <a href="/video" className="hover:text-gray-400">
              VIDEO
            </a>
            <a
              href="/contact"
              className="flex items-center hover:text-gray-400"
            >
              CONTACT ME <span className="ml-1">✉️</span>
            </a>
            <a href="/apply" className="flex items-center hover:text-gray-400">
              APPLY NOW <span className="ml-1">✏️</span>
            </a>
          </div>
        )}
      </Container>
    </div>
  );
};

export default Navbar;
