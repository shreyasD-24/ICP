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
      <div className="flex flex-col xl:flex-row px-4 sm:px-6 md:px-8 lg:px-[5rem] xl:px-[7rem] 2xl:px-[9rem] 3xl:px-[11rem] 4xl:px-[13rem] justify-center items-center space-y-16 sm:space-y-20 xl:space-y-0 xl:space-x-[6rem] 2xl:space-x-[8rem] 3xl:space-x-[10rem] 4xl:space-x-[12rem] my-8 lg:my-16 xl:my-20 2xl:my-24 3xl:my-28 4xl:my-32">
        <div className="relative order-1 xl:order-1 w-full xl:w-auto flex justify-center">
          <img
            src={img}
            alt="Img"
            className="w-full max-w-[25rem] sm:max-w-[30rem] md:max-w-[40rem] lg:max-w-[45rem] xl:w-[55rem] 2xl:w-[60rem] 3xl:w-[70rem] 4xl:w-[80rem]"
          />
          <div className="bg-white rounded-[18px] py-3 sm:py-4 lg:py-5 xl:py-5 2xl:py-6 3xl:py-8 4xl:py-16 pl-4 sm:pl-5 lg:pl-6 xl:pl-6 2xl:pl-7 3xl:pl-10 4xl:pl-18 pr-2 sm:pr-3 lg:pr-3 xl:pr-3 2xl:pr-4 3xl:pr-6 4xl:pr-10 text-[0.75rem] sm:text-[0.875rem] lg:text-[0.875rem] xl:text-[1rem] 2xl:text-[1.1rem] 3xl:text-[1.25rem] 4xl:text-[2rem] max-w-[13rem] sm:max-w-[16rem] lg:max-w-[18rem] xl:max-w-[19rem] 2xl:max-w-[21rem] 3xl:max-w-[26rem] 4xl:max-w-[40rem] z-2 absolute bottom-[-1rem] sm:bottom-[-1.5rem] lg:bottom-[-2rem] xl:bottom-[-2.5rem] 2xl:bottom-[-3rem] 3xl:bottom-[-3.5rem] 4xl:bottom-[-6rem] right-[-0.5rem] sm:right-[-1.5rem] lg:right-[-2rem] xl:right-[-2.5rem] 2xl:right-[-3rem] 3xl:right-[-3.5rem] 4xl:right-[-6rem] shadow-[0_0_2rem_rgba(0,0,0,0.4)] sm:shadow-[0_0_3rem_rgba(0,0,0,0.5)] lg:shadow-[0_0_4rem_rgba(0,0,0,0.6)] xl:shadow-[0_0_5rem_rgba(0,0,0,0.6)] 2xl:shadow-[0_0_6rem_rgba(0,0,0,0.7)] 3xl:shadow-[0_0_7rem_rgba(0,0,0,0.7)] 4xl:shadow-[0_0_12rem_rgba(0,0,0,0.8)]">
            <img
              src={money}
              alt="Money Icon"
              className="inline-block h-8 sm:h-10 lg:h-12 xl:h-14 2xl:h-16 3xl:h-20 4xl:h-24 mb-2"
            />
            <ul>
              {arr.map((item, index) => {
                return (
                  <li
                    key={index}
                    className="flex space-x-1 sm:space-x-2 lg:space-x-2 xl:space-x-3 2xl:space-x-3 3xl:space-x-4 4xl:space-x-5 mt-2 sm:mt-3 lg:mt-4 xl:mt-5 2xl:mt-6 3xl:mt-7 4xl:mt-8 font-sans"
                  >
                    <img
                      src={tick}
                      alt="Tick Icon"
                      className="h-3 sm:h-3.5 lg:h-4 xl:h-5 2xl:h-6 3xl:h-7 4xl:h-8 inline flex-shrink-0 mt-0.5"
                    />
                    <div className="text-sm sm:text-base lg:text-lg xl:text-xl 2xl:text-2xl 3xl:text-3xl 4xl:text-[3rem] leading-tight">
                      {" "}
                      {item}
                    </div>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
        <div className="order-2 lg:order-2 p-4 lg:p-6 xl:p-8 2xl:p-10 3xl:p-12 4xl:p-16 flex flex-col content-center justify-center w-full xl:max-w-[55rem] 2xl:max-w-[60rem] 3xl:max-w-[65rem] 4xl:max-w-[70rem] text-center lg:text-left">
          <p className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl 2xl:text-7xl 3xl:text-8xl 4xl:text-[8rem] font-extrabold mb-4 lg:mb-[1rem] xl:mb-[1.5rem] 2xl:mb-[2rem] 3xl:mb-[2.5rem] 4xl:mb-[4rem]">
            Expert Talent, One Click Away — On-Chain
          </p>
          <div className="text-xl lg:text-2xl xl:text-3xl 2xl:text-4xl 3xl:text-5xl 4xl:text-6xl text-gray-700 mt-2 space-y-3 lg:space-y-4 xl:space-y-5 2xl:space-y-6 3xl:space-y-7 4xl:space-y-10">
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
      <div className="px-4 sm:px-6 md:px-8 lg:px-[10rem] xl:px-[13rem] 2xl:px-[15rem] 3xl:px-[18rem] 4xl:px-[22rem] mb-[3rem] sm:mb-[4rem] lg:mb-[5rem] xl:mb-[6rem] 2xl:mb-[7rem] 3xl:mb-[8rem] 4xl:mb-[12rem] mt-[4rem] sm:mt-[5rem] lg:mt-[7rem] xl:mt-[8rem] 2xl:mt-[9rem] 3xl:mt-[11rem] 4xl:mt-[16rem] text-center text-lg sm:text-xl lg:text-2xl xl:text-3xl 2xl:text-4xl 3xl:text-5xl 4xl:text-[4rem] font-bold">
        This isn't gig work. This is the future of decentralized execution.
        Welcome to ICPWork — built 100% on-chain.
      </div>
    </>
  );
};

export default Sect2;
