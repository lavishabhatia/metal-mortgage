import React, { useState } from "react";
import Container from "./Container";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <div className={`bg-black relative !z-[9999] w-full`}>
      <Container>
        <nav className="flex items-center justify-between text-white p-4">
          {/* Left Section: Logo */}
          <div>
            <a href="/" className="text-xl font-bold">
              <img src="/logo.png" alt="Logo" className="h-8 w-auto" />
            </a>
          </div>

          {/* Center Section: Links (Hidden on Mobile) */}
          <div className="hidden md:flex items-center space-x-8">
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
            <a href="/contact" className="flex items-center hover:text-gray-400">
              CONTACT ME <span className="ml-1">✉️</span>
            </a>
          </div>

          {/* Right Section: Apply Now (Hidden on Mobile) */}
          <div className="hidden md:block">
            <a href="/apply" className="flex items-center hover:text-gray-400">
              APPLY NOW <span className="ml-1">✏️</span>
            </a>
          </div>

          {/* Hamburger Menu (Visible on Mobile) */}
          <button
            className="block md:hidden text-xl"
            onClick={toggleMenu}
            aria-label="Toggle Menu"
          >
            {isMenuOpen ? "✖️" : "☰"}
          </button>
        </nav>

        {/* Mobile Menu (Visible when isMenuOpen is true) */}
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
            <a href="/contact" className="flex items-center hover:text-gray-400">
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
