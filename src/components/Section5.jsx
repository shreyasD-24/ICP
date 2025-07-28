import React from "react";
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
  // Only use first 2 features
  const displayFeatures = features.slice(0, 2);

  return (
    <section className="px-4 py-8 sm:px-6 sm:py-12 md:px-8 lg:px-16 xl:px-28 bg-white text-center">
      <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-semibold mb-2">
        Specialized Services Crafted for Impact
      </h2>
      <p className="text-gray-600 max-w-xs sm:max-w-lg md:max-w-2xl lg:max-w-3xl mx-auto mb-8 sm:mb-12 lg:mb-16 xl:mb-24 text-xs sm:text-sm md:text-base">
        Our diverse suite of services addresses the dynamic needs of businesses poised for growth
        and innovation. Each category is a gateway to specialized talent, ready to catalyze your success.
      </p>

      <div className="flex justify-center items-center w-full">
        <div className="relative">
          {/* Left Image Container - Reduced size */}
          <div className="w-88  md:w-[32rem] lg:w-[40rem] xl:w-[44rem]">
            <img
              src="/section5Img/1.png"
              alt="Dashboard"
              className="rounded-xl sm:rounded-2xl shadow-lg w-full h-auto"
            />
          </div>

          {/* Overlapping Black Card - Increased size with proper overlap */}
          <div className="absolute top-1/2 -translate-y-1/2 left-[25%] md:left-[45%] lg:left-[45%] xl:left-[50%] w-72 sm:w-80 md:w-96 lg:w-[22rem] xl:w-[26rem]">
            <div className="bg-black text-white rounded-xl sm:rounded-2xl px-4 py-5 sm:px-5 sm:py-7 md:px-7 md:py-9 lg:px-9 lg:py-11 xl:px-10 xl:py-12 text-left shadow-2xl">
              <div className="space-y-3 sm:space-y-4 md:space-y-6">
                {displayFeatures.map((feature, i) => (
                  <div key={i} className="space-y-2 sm:space-y-3">
                    <div className="flex items-start space-x-2 sm:space-x-3">
                      <div className="text-purple-400 text-sm sm:text-base md:text-lg lg:text-xl shrink-0 mt-0.5 sm:mt-1">
                        {feature.icon}
                      </div>
                      <div className="flex-1 min-w-0">
                        <h3 className="font-semibold text-xs sm:text-sm md:text-base lg:text-lg xl:text-xl leading-tight mb-1 sm:mb-2">
                          {feature.title}
                        </h3>
                        <p className="text-gray-300 text-xs sm:text-xs md:text-sm lg:text-base leading-relaxed">
                          {feature.description}
                        </p>
                      </div>
                    </div>
                    {i === 0 && (
                      <div className="border-t border-gray-700 my-2 sm:my-3"></div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
