import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
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

export default function SpecializedServices() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 600,
    autoplay: true,
    autoplaySpeed: 5000,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
  };

  // Split features into chunks of 2 for each slide
  const slides = [];
  for (let i = 0; i < features.length; i += 2) {
    slides.push(features.slice(i, i + 2));
  }

  return (
        // ...existing code...
        <section className="px-6 py-12 md:px-16 lg:px-28 bg-white text-center">
          <h2 className="text-2xl md:text-3xl font-semibold mb-2">
            Specialized Services Crafted for Impact
          </h2>
          <p className="text-gray-600 max-w-3xl mx-auto mb-10 lg:mb-24 text-sm md:text-base">
            Our diverse suite of services addresses the dynamic needs of businesses poised for growth
            and innovation. Each category is a gateway to specialized talent, ready to catalyze your success.
          </p>
    
          
          <div className="relative flex flex-col lg:flex-row items-center justify-center lg:mt-8">
            {/* Left Image - Made smaller */}
            <div className="w-full max-w-md lg:max-w-none lg:w-2/5 xl:w-1/2">
              <img
                src="/section5Img/1.png"
                alt="Dashboard"
                className="rounded-2xl shadow-lg w-full h-auto"
              />
            </div>
    
            {/* Black card - Overlap only on large screens */}
            <div className="w-full max-w-sm lg:absolute lg:right-0 lg:top-1/2 lg:-translate-y-1/2 lg:w-1/3 xl:w-1/4 xl:mr-24 mt-6 lg:mt-0">
              <Slider {...settings}>
                {slides.map((pair, index) => (
                  <div
                    key={index}
                    className="bg-black text-white rounded-2xl px-4 py-6 md:px-6 md:py-8 text-left shadow-xl min-h-[250px] md:min-h-[350px]"
                  >
                    <div className="space-y-6">
                      {pair.map((feature, i) => (
                        <div key={i} className="space-y-3">
                          <div className="flex items-start space-x-3">
                            <div className="text-purple-400 text-lg md:text-xl shrink-0 mt-1">
                              {feature.icon}
                            </div>
                            <div className="flex-1">
                              <h3 className="font-semibold text-md md:text-lg lg:text-xl leading-snug mb-2">
                                {feature.title}
                              </h3>
                              <p className="text-gray-300 text-sm md:text-md leading-relaxed">
                                {feature.description}
                              </p>
                            </div>
                          </div>
                          {i === 0 && pair.length > 1 && (
                            <div className="border-t border-gray-700 my-2"></div>
                          )}
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
              </Slider>
            </div>
          </div>
    
        </section>
    // ...existing code...
  );
}
