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
    <div className="px-12 sm:px-16 md:px-18 lg:px-20 xl:px-24 2xl:px-28 3xl:px-32 4xl:px-36 py-16 sm:py-20 lg:py-24 xl:py-28">
      <div>
        <div className="mb-12 sm:mb-16 lg:mb-20 xl:mb-24 text-center">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl 2xl:text-6xl 3xl:text-7xl 4xl:text-8xl font-bold text-gray-800 mb-4">
            Core Features & Benefits
          </h2>
          <p className="text-gray-600 text-lg lg:text-xl xl:text-2xl 2xl:text-3xl mx-auto">
            Built on the Internet Computer Protocol for unparalleled performance
          </p>
        </div>

        {/* 3-column grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 lg:gap-16 xl:gap-20 max-w-[120rem] mx-auto">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-white rounded-lg p-10 shadow-lg hover:shadow-xl transition-shadow duration-300 border border-gray-100 h-[600px] flex flex-col items-center text-center w-full"
            >
              {/* Icon Container - Exactly 50% of card height */}
              <div className="h-1/2 w-full flex items-center justify-center">
                <img
                  src={service.icon}
                  alt={service.heading}
                  className="w-auto h-auto max-w-[120px] max-h-[120px] object-contain"
                />
              </div>

              {/* Content Container - Remaining 50% */}
              <div className="h-1/2 w-full flex flex-col justify-start px-4 pt-4">
                {/* Heading */}
                <h3 className="text-4xl font-semibold text-gray-900 mb-6">
                  {service.heading}
                </h3>

                {/* Description */}
                <p className="text-gray-600 text-2xl leading-relaxed">
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
