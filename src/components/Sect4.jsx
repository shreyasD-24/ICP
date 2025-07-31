import icon1 from "../assets/Sect4_1.png";
import icon2 from "../assets/Sect4_2.png";
import icon3 from "../assets/Sect4_3.png";
import icon4 from "../assets/Sect4_4.png";
import icon5 from "../assets/Sect4_5.png";
import icon6 from "../assets/Sect4_6.png";

function Sect4() {
  const services = [
    {
      icon: icon1,
      heading: "Smart Contract Escrow",
      description:
        "Automated, Tamper-proof Escrow Ensures Secure Payments Without Trusted Third Parties.",
    },
    {
      icon: icon2,
      heading: "Immutable Reputation",
      description:
        "On-Chain Reputation System That Can't Be Altered Or Censored By Any Central Authority",
    },
    {
      icon: icon3,
      heading: "DAO Governance",
      description:
        "Community-Driven Decision Making For Platform Upgrades And Dispute Resolution",
    },
    {
      icon: icon4,
      heading: "Web Speed Performance",
      description:
        "1-2 Second Transaction Finality With User Experience Comparable To Traditional Web Apps.",
    },
    {
      icon: icon5,
      heading: "No Gas Fees",
      description:
        "Reverse Gas Model Eliminates User-Facing Transaction Costs For Seamless Interaction.",
    },
    {
      icon: icon6,
      heading: "Global Payments",
      description:
        "Support For Multiple Cryptocurrencies With Future Traditional Payment Integration",
    },
  ];

  return (
    <div className="px-4 xs:px-6 sm:px-16 md:px-18 lg:px-20 xl:px-22 2xl:px-24 3xl:px-28 4xl:px-32 5xl:px-36 py-8 xs:py-6 sm:py-10 lg:py-11 xl:py-12 2xl:py-14">
      <div>
        <div className="mb-8 xs:mb-5 sm:mb-8 lg:mb-9 xl:mb-8 2xl:mb-10 text-center">
          <h2 className="text-xl xs:text-2xl sm:text-3xl lg:text-4xl xl:text-3xl 2xl:text-5xl 3xl:text-6xl 4xl:text-7xl 5xl:text-8xl font-bold text-gray-800 mb-3 xs:mb-4">
            Core Features & Benefits
          </h2>
          <p className="text-gray-600 text-sm xs:text-base sm:text-lg lg:text-xl xl:text-lg 2xl:text-2xl 3xl:text-3xl mx-auto px-2 xs:px-4 sm:px-0">
            Built on the Internet Computer Protocol for unparalleled performance
          </p>
        </div>

        {/* 3-column grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 xs:gap-8 sm:gap-12 lg:gap-14 xl:gap-12 2xl:gap-20 max-w-[120rem] mx-auto">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-white rounded-lg p-4 xs:p-6 sm:p-10 pb-6 xs:pb-8 sm:pb-12 lg:pb-12 xl:pb-10 2xl:pb-16 shadow-lg hover:shadow-xl transition-shadow duration-300 border border-gray-100 h-auto xs:h-[400px] sm:h-[500px] lg:h-[550px] xl:h-[480px] flex flex-col items-center text-center w-full"
            >
              {/* Icon Container - Exactly 50% of card height */}
              <div className="h-1/2 w-full flex items-center justify-center mb-2 xs:mb-3 sm:mb-0">
                <img
                  src={service.icon}
                  alt={service.heading}
                  className="w-auto h-auto max-w-[60px] max-h-[60px] xs:max-w-[80px] xs:max-h-[80px] sm:max-w-[120px] sm:max-h-[120px] lg:max-w-[110px] lg:max-h-[110px] xl:max-w-[100px] xl:max-h-[100px] object-contain"
                />
              </div>

              {/* Content Container - Remaining 50% */}
              <div className="h-1/2 w-full flex flex-col justify-start px-2 xs:px-3 sm:px-4 pt-2 xs:pt-3 sm:pt-4">
                {/* Heading */}
                <h3 className="text-base xs:text-lg sm:text-2xl lg:text-2xl xl:text-xl 2xl:text-4xl font-semibold text-gray-900 mb-2 xs:mb-3 sm:mb-6">
                  {service.heading}
                </h3>

                {/* Description */}
                <p className="text-gray-600 text-xs xs:text-sm sm:text-lg lg:text-lg xl:text-base 2xl:text-2xl leading-relaxed">
                  {service.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Sect4;
