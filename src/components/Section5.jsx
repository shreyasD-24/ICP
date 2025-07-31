import React, { useState, useEffect } from "react";
import {
  FaUsers,
  FaFileContract,
  FaTrophy,
  FaCoins,
  FaPenFancy,
  FaGraduationCap,
} from "react-icons/fa";

const features = [
  {
    icon: <FaUsers />,
    title: "Remote & Global Teams",
    description:
      "Seamless collaboration for geographically dispersed teams with unified project management.",
  },
  {
    icon: <FaFileContract />,
    title: "Smart Contract Development",
    description:
      "Connect Web3 projects with expert developers and auditors for secure blockchain development.",
  },
  {
    icon: <FaTrophy />,
    title: "Task Bounties",
    description:
      "Revolutionize open-source development with decentralized task bounties and rewards.",
  },
  {
    icon: <FaCoins />,
    title: "DAO Payroll",
    description:
      "Transparent treasury management and automated payroll for Decentralized Autonomous Organizations.",
  },
  {
    icon: <FaPenFancy />,
    title: "Content Creation",
    description:
      "Empower creators to monetize work directly with censorship-resistant content distribution.",
  },
  {
    icon: <FaGraduationCap />,
    title: "Web3 Education",
    description:
      "Peer-to-peer learning and mentorship marketplace for Web3 skill development.",
  },
];

export default function SpecializedServicesSlider() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const slides = [
    features.slice(0, 3), // First 3 features
    features.slice(3, 6)  // Last 3 features
  ];

  // Auto-slide functionality
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide(prev => (prev === slides.length - 1 ? 0 : prev + 1));
    }, 5000); // Change slide every 5 seconds
    
    return () => clearInterval(interval);
  }, [slides.length]);

  return (
    <section className="px-4 py-8 sm:px-6 sm:py-12 md:px-8 lg:px-16 xl:px-28 bg-white text-center">
      <h2 className="text-xl xs:text-2xl sm:text-3xl lg:text-4xl xl:text-3xl 2xl:text-5xl font-semibold mb-2">
        Use Cases
      </h2>
      <p className="text-gray-600 text-sm xs:text-base lg:text-xl xl:text-lg 2xl:text-2xl mx-auto mb-8 sm:mb-12 lg:mb-16 xl:mb-24 sm:text-sm md:text-base max-w-4xl">
       Versatile platform for diverse decentralized work scenarios
      </p>

      {/* Slider Container */}
      <div className="relative max-w-6xl mx-auto">
        {/* Slides */}
        <div className="relative overflow-hidden rounded-xl sm:rounded-2xl shadow-xl">
          {slides.map((slideFeatures, slideIndex) => (
            <div 
              key={slideIndex}
              className={`transition-all duration-500 ease-in-out ${
                currentSlide === slideIndex 
                  ? "opacity-100 block" 
                  : "opacity-0 absolute inset-0"
              }`}
            >
              {/* Slide Content */}
              <div className="relative w-full min-h-[500px] md:min-h-[600px]">
                {/* Background Image - Same for all slides */}
                <div className="absolute inset-0 overflow-hidden">
                  <img
                    src="/section5Img/2.jpg" // Consistent image for all slides
                    alt="Service Dashboard"
                    className="w-full h-full object-cover"
                  />
                </div>
                
                {/* Feature Card Container */}
                <div className="absolute top-1/2 -translate-y-1/2 right-0 w-full md:w-1/2 lg:w-2/5 xl:w-[40%] px-4 md:px-8 py-8">
                  <div className="bg-black text-white rounded-xl sm:rounded-2xl px-6 py-8 md:px-8 md:py-10 lg:px-10 lg:py-12 shadow-2xl">
                    <div className="space-y-6">
                      {slideFeatures.map((feature, i) => (
                        <div key={i}>
                          <div className="flex items-start space-x-4">
                            <div className="text-purple-400 text-xl shrink-0 mt-1">
                              {feature.icon}
                            </div>
                            <div className="flex-1 min-w-0">
                              <h3 className="font-semibold text-lg md:text-xl lg:text-2xl leading-tight mb-2">
                                {feature.title}
                              </h3>
                              <p className="text-gray-300 text-sm md:text-base">
                                {feature.description}
                              </p>
                            </div>
                          </div>
                          {i < slideFeatures.length - 1 && (
                            <div className="border-t border-gray-700 my-4 sm:my-6"></div>
                          )}
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        {/* Slide Indicators */}
        <div className="flex justify-center mt-6 space-x-2">
          {slides.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={`w-3 h-3 rounded-full transition-all ${
                currentSlide === index ? "bg-black scale-125" : "bg-gray-300"
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}