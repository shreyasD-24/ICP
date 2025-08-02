import logo from "../assets/logo.png";
import { useState } from "react";

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollToHome = () => {
    const homeElement = document.getElementById('home');
    if (homeElement) {
      homeElement.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <nav className="relative flex justify-between items-center px-4 sm:px-8 md:px-12 lg:px-16 xl:px-20 2xl:px-24 3xl:px-32 4xl:px-40 py-4 sm:py-5 md:py-6 lg:py-7 xl:py-8 2xl:py-10 3xl:py-12 4xl:py-14 5xl:py-16">
      <div className="logo cursor-pointer" onClick={scrollToHome}>
        <img
          src={logo}
          alt="ICP"
          className="h-8 xs:h-10 sm:h-12 md:h-14 lg:h-16 xl:h-18 2xl:h-20 3xl:h-22 4xl:h-24 5xl:h-26 w-auto object-contain hover:scale-105 transition-transform duration-300"
          style={{
            filter: "contrast(1.1) brightness(1.05)",
            imageRendering: "crisp-edges",
          }}
        />
      </div>

      {/* Desktop Menu */}
      <div className="hidden lg:flex grow justify-center space-x-4 lg:space-x-6 xl:space-x-8 2xl:space-x-10 3xl:space-x-12 4xl:space-x-16 text-lg lg:text-xl xl:text-2xl 2xl:text-3xl 3xl:text-4xl 4xl:text-5xl 5xl:text-6xl">
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
        className="hidden lg:block relative px-8 lg:px-10 xl:px-12 2xl:px-14 3xl:px-16 4xl:px-20 5xl:px-24 py-3 lg:py-4 xl:py-5 2xl:py-6 3xl:py-7 4xl:py-8 5xl:py-10 rounded-[20px] font-semibold text-sm lg:text-base xl:text-xl 2xl:text-2xl 3xl:text-3xl 4xl:text-4xl 5xl:text-5xl text-white active:scale-95 transition-all duration-500"
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
            <a
              href="#home"
              onClick={() => setIsMenuOpen(false)}
              className="text-base font-medium hover:text-blue-600 hover:bg-gray-50 cursor-pointer py-3 border-b border-gray-200 text-left transition-all duration-300"
            >
              Home
            </a>
            <a
              href="#how-it-works"
              onClick={() => setIsMenuOpen(false)}
              className="text-base font-medium hover:text-blue-600 hover:bg-gray-50 cursor-pointer py-3 border-b border-gray-200 text-left transition-all duration-300"
            >
              How it Works
            </a>
            <a
              href="#features"
              onClick={() => setIsMenuOpen(false)}
              className="text-base font-medium hover:text-blue-600 hover:bg-gray-50 cursor-pointer py-3 border-b border-gray-200 text-left transition-all duration-300"
            >
              Features
            </a>
            <a
              href="#use-cases"
              onClick={() => setIsMenuOpen(false)}
              className="text-base font-medium hover:text-blue-600 hover:bg-gray-50 cursor-pointer py-3 border-b border-gray-200 text-left transition-all duration-300"
            >
              Use Cases
            </a>
            <a
              href="#faq"
              onClick={() => setIsMenuOpen(false)}
              className="text-base font-medium hover:text-blue-600 hover:bg-gray-50 cursor-pointer py-3 border-b border-gray-200 text-left transition-all duration-300"
            >
              FAQ
            </a>
            <a
              href="#why-choose-us"
              onClick={() => setIsMenuOpen(false)}
              className="text-base font-medium hover:text-blue-600 hover:bg-gray-50 cursor-pointer py-3 border-b border-gray-200 text-left transition-all duration-300"
            >
              Why Choose Us
            </a>
            <button
              className="relative rounded-[20px] px-6 py-3 text-center text-sm font-semibold transition-all duration-300 mt-4 text-white group active:scale-95"
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
