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

export default function SpecializedServicesSlider() {
  return (
    <section className="px-4 xs:px-6 sm:px-16 md:px-18 lg:px-20 xl:px-22 2xl:px-24 3xl:px-28 4xl:px-32 5xl:px-36 py-8 xs:py-6 sm:py-10 lg:py-11 xl:py-12 2xl:py-14 bg-white text-center">
      <h2 className="text-xl xs:text-2xl sm:text-3xl lg:text-4xl xl:text-3xl 2xl:text-5xl 3xl:text-6xl 4xl:text-7xl 5xl:text-8xl font-bold text-gray-800 mb-3 xs:mb-4">
        Use Cases
      </h2>
      <p className="text-gray-600 text-sm xs:text-base sm:text-lg lg:text-xl xl:text-lg 2xl:text-2xl 3xl:text-3xl mx-auto mb-8 xs:mb-5 sm:mb-8 lg:mb-9 xl:mb-8 2xl:mb-10 px-2 xs:px-4 sm:px-0">
       Versatile platform for diverse decentralized work scenarios
      </p>

      {/* Features Grid Layout */}
      <div className="max-w-[120rem] mx-auto">
        {/* Top Image */}
        <div className="mb-8 xs:mb-5 sm:mb-8 lg:mb-9 xl:mb-8 2xl:mb-10">
          <div className="rounded-xl shadow-xl overflow-hidden max-w-4xl mx-auto">
            <img
              src="/section5Img/2.jpg"
              alt="Service Dashboard"
              className="rounded-3xl w-full h-[300px] md:h-[400px] lg:h-[500px] object-cover"
            />
          </div>
        </div>

        {/* Features Grid Below */}
        <div className="w-full">
          <div className="bg-black text-white rounded-3xl p-4 xs:p-6 sm:p-10 pb-6 xs:pb-8 sm:pb-12 lg:pb-12 xl:pb-10 2xl:pb-16 shadow-2xl">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 xs:gap-8 sm:gap-12 lg:gap-14 xl:gap-12 2xl:gap-20">
              {features.map((feature, i) => (
                <div key={i} className="p-4 xs:p-6 sm:p-10 pb-6 xs:pb-8 sm:pb-12 lg:pb-12 xl:pb-10 2xl:pb-16 relative">
                  <div className="flex items-start space-x-4 md:space-x-6 lg:space-x-8">
                    <div className="text-purple-400 text-base xs:text-lg sm:text-2xl lg:text-2xl xl:text-xl 2xl:text-4xl shrink-0 mt-1">
                      {feature.icon}
                    </div>
                    <div className="flex-1 min-w-0">
                      <h3 className="font-semibold text-base xs:text-lg sm:text-2xl lg:text-2xl xl:text-xl 2xl:text-4xl leading-tight mb-2 xs:mb-3 sm:mb-6">
                        {feature.title}
                      </h3>
                      <p className="text-gray-300 text-xs xs:text-sm sm:text-lg lg:text-lg xl:text-base 2xl:text-2xl leading-relaxed">
                        {feature.description}
                      </p>
                    </div>
                  </div>
                  {/* Vertical line separator between columns */}
                  {(i + 1) % 3 !== 0 && i < features.length - 1 && (
                    <div className="hidden md:block absolute right-0 top-0 h-full w-px bg-gray-700"></div>
                  )}
                  {/* Horizontal line separator between rows */}
                  {i < 3 && (
                    <div className="border-b border-gray-700 mt-4 xs:mt-3 sm:mt-6 lg:mt-6 xl:mt-4 2xl:mt-8"></div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}