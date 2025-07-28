import logo from "../assets/logo.png";
import { useState } from "react";

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="relative flex justify-between items-center px-4 sm:px-8 md:px-12 lg:px-16 xl:px-[4rem] 2xl:px-[5rem] 3xl:px-[6rem] 4xl:px-[8rem] py-2 sm:py-3 lg:py-4 xl:py-5 2xl:py-6">
      <div className="logo">
        <img
          src={logo}
          alt="ICP"
          className="h-8 sm:h-10 lg:h-12 xl:h-14 2xl:h-16 3xl:h-20 4xl:h-24"
        />
      </div>

      {/* Desktop Menu */}
      <div className="hidden lg:flex grow justify-center space-x-4 lg:space-x-6 xl:space-x-8 2xl:space-x-10 3xl:space-x-12 4xl:space-x-16 text-sm lg:text-base xl:text-lg 2xl:text-xl 3xl:text-2xl 4xl:text-3xl">
        <div className="hover:text-gray-600 cursor-pointer">Product</div>
        <div className="hover:text-gray-600 cursor-pointer">Services</div>
        <div className="hover:text-gray-600 cursor-pointer">About us</div>
        <div className="hover:text-gray-600 cursor-pointer">Research</div>
      </div>

      {/* Desktop Get Started Button */}
      <a
        href="#"
        className="hidden lg:block bg-black text-white rounded-[20px] lg:rounded-[24px] xl:rounded-[28px] 2xl:rounded-[32px] 3xl:rounded-[36px] 4xl:rounded-[40px] p-2 lg:p-3 xl:p-4 2xl:p-5 3xl:p-6 4xl:p-7 px-4 lg:px-5 xl:px-6 2xl:px-7 3xl:px-8 4xl:px-10 text-xs lg:text-sm xl:text-base 2xl:text-lg 3xl:text-xl 4xl:text-2xl hover:bg-gray-800 transition-colors"
      >
        Get Started
      </a>

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
            <div className="text-base font-medium hover:text-gray-600 cursor-pointer py-3 border-b border-gray-200">
              Product
            </div>
            <div className="text-base font-medium hover:text-gray-600 cursor-pointer py-3 border-b border-gray-200">
              Services
            </div>
            <div className="text-base font-medium hover:text-gray-600 cursor-pointer py-3 border-b border-gray-200">
              About us
            </div>
            <div className="text-base font-medium hover:text-gray-600 cursor-pointer py-3 border-b border-gray-200">
              Research
            </div>
            <a
              href="#"
              className="bg-black text-white rounded-[24px] p-3 px-6 text-center text-sm font-medium hover:bg-gray-800 transition-colors mt-4"
            >
              Get Started
            </a>
          </div>
        </div>
      )}
    </nav>
  );
}

export default Navbar;
