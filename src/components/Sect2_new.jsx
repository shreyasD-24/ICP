import img from "../assets/Section2.png";
import money from "../assets/icon1.png";
import tick from "../assets/icon2.png";

const Sect2 = () => {
  let arr = [
    "Top Blockchain & AI Experts",
    "Instant On-Chain Collaboration",
    "Trustless Results via Smart Contracts",
    "Immutable Reputation & DAO-Led Arbitration",
  ];
  return (
    <>
      <div className="flex flex-col lg:flex-row px-4 sm:px-8 md:px-12 lg:px-[15rem] justify-center items-center space-y-8 lg:space-y-0 lg:space-x-[6rem] my-8 lg:my-16">
        <div className="relative order-1 lg:order-1 w-full lg:w-auto flex justify-center">
          <img
            src={img}
            alt="Img"
            className="w-full max-w-[20rem] sm:max-w-[25rem] md:max-w-[35rem] lg:w-[45rem]"
          />
          <div className="bg-white rounded-[18px] py-3 sm:py-4 lg:py-5 pl-4 sm:pl-5 lg:pl-6 pr-2 sm:pr-3 text-[0.75rem] sm:text-[0.875rem] max-w-[14rem] sm:max-w-[15rem] lg:max-w-[17rem] z-2 absolute bottom-[-1rem] sm:bottom-[-1.5rem] lg:bottom-[-2rem] right-[-1rem] sm:right-[-1.5rem] lg:right-[-2rem] shadow-[0_0_2rem_rgba(0,0,0,0.4)] sm:shadow-[0_0_3rem_rgba(0,0,0,0.5)] lg:shadow-[0_0_4rem_rgba(0,0,0,0.6)]">
            <img
              src={money}
              alt="Money Icon"
              className="inline-block h-8 sm:h-10 lg:h-12 mb-2"
            />
            <ul>
              {arr.map((item, index) => {
                return (
                  <li
                    key={index}
                    className="flex space-x-1 sm:space-x-2 mt-2 sm:mt-3 lg:mt-4 font-sans"
                  >
                    <img
                      src={tick}
                      alt="Tick Icon"
                      className="h-3 sm:h-3.5 lg:h-4 inline flex-shrink-0 mt-0.5"
                    />
                    <div className="text-xs sm:text-sm lg:text-base leading-tight">
                      {" "}
                      {item}
                    </div>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
        <div className="order-2 lg:order-2 p-4 flex flex-col content-center justify-center w-full lg:max-w-[40rem] text-center lg:text-left">
          <p className="text-2xl sm:text-3xl lg:text-4xl font-extrabold mb-4 lg:mb-[1rem]">
            Expert Talent, One Click Away — On-Chain
          </p>
          <div className="text-sm sm:text-base lg:text-md text-gray-700 mt-2 space-y-3 lg:space-y-4">
            <p>
              In the age of decentralized innovation, finding elite talent
              shouldn't be a bottleneck. At <b>ICPWork</b>, we connect you with
              top-tier, fully verified freelancers — all operating on a
              censorship-resistant, blockchain-native infrastructure powered by
              the <b>Internet Computer Protocol</b> (ICP).
            </p>
            <p>
              Whether you're building in AI, DeFi, dApps, or protocol
              infrastructure, our platform gives you instant access to the top
              1% of Web3-native builders — all secured by smart contract escrow
              and governed by on-chain reputation.
            </p>
            <p>
              From automation to AI agents, ICPWork empowers you to work with
              trustless precision — where transparency, speed, and exceptional
              delivery are the norm, not the exception.
            </p>
          </div>
        </div>
      </div>
      <div className="px-4 sm:px-8 md:px-12 lg:px-[15rem] mb-[3rem] sm:mb-[4rem] lg:mb-[5rem] mt-[4rem] sm:mt-[5rem] lg:mt-[7rem] text-center text-base sm:text-lg font-bold">
        This isn't gig work. This is the future of decentralized execution.
        Welcome to ICPWork — built 100% on-chain.
      </div>
    </>
  );
};

export default Sect2;
