import logo from "../assets/logo.png";
import { useState } from "react";

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollToHome = () => {
    const homeElement = document.getElementById("home");
    if (homeElement) {
      homeElement.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <nav className="relative flex justify-between items-center px-4 sm:px-6 md:px-8 lg:px-10 xl:px-12 2xl:px-20 3xl:px-24 4xl:px-32 5xl:px-40 py-3 sm:py-4 md:py-5 lg:py-5 xl:py-6 2xl:py-8 3xl:py-10 4xl:py-12 5xl:py-14 6xl:py-16">
      <div className="logo cursor-pointer" onClick={scrollToHome}>
        <img
          src={logo}
          alt="ICP"
          className="h-8 xs:h-9 sm:h-10 md:h-12 lg:h-13 xl:h-12 2xl:h-14 3xl:h-20 4xl:h-22 5xl:h-24 6xl:h-26 w-auto object-contain hover:scale-105 transition-transform duration-300"
          style={{
            filter: "contrast(1.1) brightness(1.05)",
            imageRendering: "crisp-edges",
          }}
        />
      </div>

      {/* Desktop Menu */}
      <div className="hidden lg:flex grow justify-center space-x-3 lg:space-x-4 xl:space-x-5 2xl:space-x-8 3xl:space-x-10 4xl:space-x-12 5xl:space-x-16 text-base lg:text-lg xl:text-lg 2xl:text-2xl 3xl:text-3xl 4xl:text-4xl 5xl:text-5xl 6xl:text-6xl">
        <a
          href="#home"
          className="hover:text-blue-600 hover:scale-105 cursor-pointer transition-all duration-300 font-medium relative group"
        >
          Home
          <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-blue-600 transition-all duration-300 group-hover:w-full"></span>
        </a>
        <a
          href="#how-it-works"
          className="hover:text-blue-600 hover:scale-105 cursor-pointer transition-all duration-300 font-medium relative group"
        >
          How it Works
          <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-blue-600 transition-all duration-300 group-hover:w-full"></span>
        </a>
        <a
          href="#features"
          className="hover:text-blue-600 hover:scale-105 cursor-pointer transition-all duration-300 font-medium relative group"
        >
          Features
          <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-blue-600 transition-all duration-300 group-hover:w-full"></span>
        </a>
        <a
          href="#use-cases"
          className="hover:text-blue-600 hover:scale-105 cursor-pointer transition-all duration-300 font-medium relative group"
        >
          Use Cases
          <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-blue-600 transition-all duration-300 group-hover:w-full"></span>
        </a>
        <a
          href="#faq"
          className="hover:text-blue-600 hover:scale-105 cursor-pointer transition-all duration-300 font-medium relative group"
        >
          FAQ
          <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-blue-600 transition-all duration-300 group-hover:w-full"></span>
        </a>
        <a
          href="#why-choose-us"
          className="hover:text-blue-600 hover:scale-105 cursor-pointer transition-all duration-300 font-medium relative group"
        >
          Why Choose Us
          <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-blue-600 transition-all duration-300 group-hover:w-full"></span>
        </a>
      </div>

      {/* Desktop Get Started Button - Black Background with Gradient Border */}
      <button
        className="hidden lg:block relative px-6 lg:px-7 xl:px-9 2xl:px-12 3xl:px-14 4xl:px-16 5xl:px-20 6xl:px-24 py-2.5 lg:py-3 xl:py-3.5 2xl:py-5 3xl:py-6 4xl:py-7 5xl:py-8 6xl:py-10 rounded-[20px] font-semibold text-sm lg:text-base xl:text-base 2xl:text-xl 3xl:text-2xl 4xl:text-3xl 5xl:text-4xl 6xl:text-5xl text-white active:scale-95 transition-all duration-500"
        style={{
          background: "transparent",
          boxShadow: `
      0 0 15px rgba(68, 176, 255, 0.4),
      0 0 25px rgba(151, 62, 238, 0.3),
      0 0 35px rgba(241, 42, 230, 0.2),
      0 4px 12px rgba(41, 163, 218, 0.2),
      0 6px 18px rgba(151, 62, 238, 0.15),
      0 8px 24px rgba(255, 112, 57, 0.1)
    `,
        }}
        onMouseEnter={(e) => {
          // Hide the gradient border and show the gradient background
          const gradientBorder = e.currentTarget.querySelector("div");
          if (gradientBorder) gradientBorder.style.display = "none";

          // Change text to "Coming Soon"
          const textSpan = e.currentTarget.querySelector("span");
          if (textSpan) textSpan.textContent = "Coming Soon";

          e.currentTarget.style.background = `
      linear-gradient(135deg,
        rgba(41, 163, 218, 0.9) 0%,
        rgba(68, 176, 255, 0.9) 20%,
        rgba(151, 62, 238, 0.9) 40%,
        rgba(230, 31, 122, 0.9) 60%,
        rgba(255, 112, 57, 0.9) 80%,
        rgba(255, 195, 40, 0.9) 100%)
    `;
          e.currentTarget.style.boxShadow = `
      0 6px 18px rgba(41, 163, 218, 0.35),
      0 8px 25px rgba(151, 62, 238, 0.3),
      0 10px 30px rgba(255, 112, 57, 0.25)
    `;
        }}
        onMouseLeave={(e) => {
          // Show the gradient border again and reset background
          const gradientBorder = e.currentTarget.querySelector("div");
          if (gradientBorder) gradientBorder.style.display = "block";

          // Change text back to "Join ICP Work"
          const textSpan = e.currentTarget.querySelector("span");
          if (textSpan) textSpan.textContent = "Join ICP Work";

          e.currentTarget.style.background = "transparent";
          e.currentTarget.style.boxShadow = `
      0 0 15px rgba(68, 176, 255, 0.4),
      0 0 25px rgba(151, 62, 238, 0.3),
      0 0 35px rgba(241, 42, 230, 0.2),
      0 4px 12px rgba(41, 163, 218, 0.2),
      0 6px 18px rgba(151, 62, 238, 0.15),
      0 8px 24px rgba(255, 112, 57, 0.1)
    `;
        }}
        onClick={() => console.log("Join ICP Work clicked")}
      >
        {/* Gradient Border */}
        <div
          className="absolute inset-0 rounded-[20px] p-0.5"
          style={{
            background:
              "linear-gradient(88.65deg, #44B0FF -8.8%, #973EEE 33.57%, #F12AE6 58.38%, #FF7039 79.99%, #F3BC3B 98%)",
          }}
        >
          <div className="w-full h-full rounded-[18px] bg-black"></div>
        </div>
        <span className="relative z-10">Join ICP Work</span>
      </button>

      {/* Mobile Menu Button */}
      <button
        className="lg:hidden flex flex-col justify-center items-center w-7 h-7 sm:w-8 sm:h-8 p-1"
        onClick={() => setIsMenuOpen(!isMenuOpen)}
      >
        <span
          className={`w-4 sm:w-5 h-0.5 bg-black transition-all duration-300 ${
            isMenuOpen ? "rotate-45 translate-y-1.5" : "mb-1"
          }`}
        ></span>
        <span
          className={`w-4 sm:w-5 h-0.5 bg-black transition-all duration-300 ${
            isMenuOpen ? "opacity-0" : "mb-1"
          }`}
        ></span>
        <span
          className={`w-4 sm:w-5 h-0.5 bg-black transition-all duration-300 ${
            isMenuOpen ? "-rotate-45 -translate-y-1.5" : ""
          }`}
        ></span>
      </button>

      {/* Mobile Menu Overlay */}
      {isMenuOpen && (
        <div className="lg:hidden absolute top-full right-0 w-1/2 sm:w-2/5 md:w-1/3 bg-white shadow-lg border-t border-l z-65">
          <div className="flex flex-col p-3 sm:p-4">
            <a
              href="#home"
              onClick={() => setIsMenuOpen(false)}
              className="text-sm sm:text-base font-medium hover:text-blue-600 hover:bg-gray-50 cursor-pointer py-2.5 sm:py-3 border-b border-gray-200 text-left transition-all duration-300"
            >
              Home
            </a>
            <a
              href="#how-it-works"
              onClick={() => setIsMenuOpen(false)}
              className="text-sm sm:text-base font-medium hover:text-blue-600 hover:bg-gray-50 cursor-pointer py-2.5 sm:py-3 border-b border-gray-200 text-left transition-all duration-300"
            >
              How it Works
            </a>
            <a
              href="#features"
              onClick={() => setIsMenuOpen(false)}
              className="text-sm sm:text-base font-medium hover:text-blue-600 hover:bg-gray-50 cursor-pointer py-2.5 sm:py-3 border-b border-gray-200 text-left transition-all duration-300"
            >
              Features
            </a>
            <a
              href="#use-cases"
              onClick={() => setIsMenuOpen(false)}
              className="text-sm sm:text-base font-medium hover:text-blue-600 hover:bg-gray-50 cursor-pointer py-2.5 sm:py-3 border-b border-gray-200 text-left transition-all duration-300"
            >
              Use Cases
            </a>
            <a
              href="#faq"
              onClick={() => setIsMenuOpen(false)}
              className="text-sm sm:text-base font-medium hover:text-blue-600 hover:bg-gray-50 cursor-pointer py-2.5 sm:py-3 border-b border-gray-200 text-left transition-all duration-300"
            >
              FAQ
            </a>
            <a
              href="#why-choose-us"
              onClick={() => setIsMenuOpen(false)}
              className="text-sm sm:text-base font-medium hover:text-blue-600 hover:bg-gray-50 cursor-pointer py-2.5 sm:py-3 border-b border-gray-200 text-left transition-all duration-300"
            >
              Why Choose Us
            </a>
            <button
              className="relative rounded-[20px] px-5 sm:px-6 py-2.5 sm:py-3 text-center text-xs sm:text-sm font-semibold transition-all duration-300 mt-3 sm:mt-4 text-white group active:scale-95"
              style={{
                background: "transparent",
                boxShadow:
                  "0 0 15px rgba(68, 176, 255, 0.8), 0 0 25px rgba(151, 62, 238, 0.7), 0 0 35px rgba(241, 42, 230, 0.6)",
              }}
              onMouseEnter={(e) => {
                const textSpan = e.currentTarget.querySelector("span");
                if (textSpan) textSpan.textContent = "Coming Soon";
              }}
              onMouseLeave={(e) => {
                const textSpan = e.currentTarget.querySelector("span");
                if (textSpan) textSpan.textContent = "Join ICP Work";
              }}
              onClick={() => {
                setIsMenuOpen(false);
                console.log("Join ICP Work clicked");
              }}
            >
              {/* Gradient Border */}
              <div
                className="absolute inset-0 rounded-[20px] p-0.5"
                style={{
                  background:
                    "linear-gradient(88.65deg, #44B0FF -8.8%, #973EEE 33.57%, #F12AE6 58.38%, #FF7039 79.99%, #F3BC3B 98%)",
                }}
              >
                <div className="w-full h-full rounded-[18px] bg-black"></div>
              </div>
              <span className="relative z-10">Join ICP Work</span>
              <div
                className="absolute inset-0 rounded-[20px] opacity-0 group-hover:opacity-100 group-active:opacity-100 transition-all duration-300"
                style={{
                  background:
                    "linear-gradient(88.65deg, #44B0FF -8.8%, #973EEE 33.57%, #F12AE6 58.38%, #FF7039 79.99%, #F3BC3B 98%)",
                  boxShadow:
                    "0 0 20px rgba(68, 176, 255, 1), 0 0 35px rgba(151, 62, 238, 0.9), 0 0 50px rgba(241, 42, 230, 0.8)",
                }}
              ></div>
            </button>
          </div>
        </div>
      )}
    </nav>
  );
}

export default Navbar;
