import logo from "../assets/logo.png";
import { useState } from "react";

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="relative flex justify-between items-center px-4 sm:px-8 md:px-12 lg:px-16 xl:px-20 2xl:px-24 3xl:px-32 4xl:px-40 py-4 sm:py-5 md:py-6 lg:py-7 xl:py-8 2xl:py-10 3xl:py-12 4xl:py-14 5xl:py-16">
      <div className="logo">
        <img
          src={logo}
          alt="ICP"
          className="h-8 sm:h-10 lg:h-12 xl:h-14 2xl:h-16 3xl:h-20 4xl:h-24 5xl:h-28"
        />
      </div>

      {/* Desktop Menu */}
      <div className="hidden lg:flex grow justify-center space-x-4 lg:space-x-6 xl:space-x-8 2xl:space-x-10 3xl:space-x-12 4xl:space-x-16 text-lg lg:text-xl xl:text-2xl 2xl:text-3xl 3xl:text-4xl 4xl:text-5xl 5xl:text-6xl">
        <button className="hover:text-blue-600 hover:scale-105 cursor-pointer transition-all duration-300 font-medium relative group">
          Find Jobs
          <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-blue-600 transition-all duration-300 group-hover:w-full"></span>
        </button>
        <button className="hover:text-blue-600 hover:scale-105 cursor-pointer transition-all duration-300 font-medium relative group">
          Find Work
          <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-blue-600 transition-all duration-300 group-hover:w-full"></span>
        </button>
        <button className="hover:text-blue-600 hover:scale-105 cursor-pointer transition-all duration-300 font-medium relative group">
          Messages
          <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-blue-600 transition-all duration-300 group-hover:w-full"></span>
        </button>
      </div>

      {/* Desktop Get Started Button - Black Background */}
      <button className="hidden lg:block bg-black hover:bg-gray-800 text-white px-8 lg:px-10 xl:px-12 2xl:px-14 3xl:px-16 4xl:px-20 5xl:px-24 py-3 lg:py-4 xl:py-5 2xl:py-6 3xl:py-7 4xl:py-8 5xl:py-10 rounded-full font-semibold text-sm lg:text-base xl:text-xl 2xl:text-2xl 3xl:text-3xl 4xl:text-4xl 5xl:text-5xl transition-all duration-300 transform hover:-translate-y-0.5">
        Join ICP Work
      </button>

      {/* Mobile Menu Button */}
      <button
        className="lg:hidden flex flex-col justify-center items-center w-8 h-8 p-1"
        onClick={() => setIsMenuOpen(!isMenuOpen)}
      >
        <span
          className={`w-5 h-0.5 bg-black transition-all duration-300 ${
            isMenuOpen ? "rotate-45 translate-y-1.5" : "mb-1"
          }`}
        ></span>
        <span
          className={`w-5 h-0.5 bg-black transition-all duration-300 ${
            isMenuOpen ? "opacity-0" : "mb-1"
          }`}
        ></span>
        <span
          className={`w-5 h-0.5 bg-black transition-all duration-300 ${
            isMenuOpen ? "-rotate-45 -translate-y-1.5" : ""
          }`}
        ></span>
      </button>

      {/* Mobile Menu Overlay */}
      {isMenuOpen && (
        <div className="lg:hidden absolute top-full right-0 w-1/2 bg-white shadow-lg border-t border-l z-65">
          <div className="flex flex-col p-4">
            <button className="text-base font-medium hover:text-blue-600 hover:bg-gray-50 cursor-pointer py-3 border-b border-gray-200 text-left transition-all duration-300">
              Find Jobs
            </button>
            <button className="text-base font-medium hover:text-blue-600 hover:bg-gray-50 cursor-pointer py-3 border-b border-gray-200 text-left transition-all duration-300">
              Find Work
            </button>
            <button className="text-base font-medium hover:text-blue-600 hover:bg-gray-50 cursor-pointer py-3 border-b border-gray-200 text-left transition-all duration-300">
              Messages
            </button>
            <button className="bg-black hover:bg-gray-800 text-white rounded-full px-6 py-3 text-center text-sm font-semibold transition-all duration-300 transform hover:-translate-y-0.5 mt-4">
              Get Started
            </button>
          </div>
        </div>
      )}
    </nav>
  );
}

export default Navbar;
