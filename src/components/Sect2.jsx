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
      <div className="flex px-[15rem] justify-center items-center space-x-[6rem] my-16">
        <div>
          <img src={img} alt="Img" className="h-[35rem]" />
          <div className="bg-white rounded-[18px] py-5 pl-6 pr-3 text-[0.875rem] max-w-[17rem] z-2 absolute bottom-[2rem] left-[29rem] shadow-[0_0_4rem_rgba(0,0,0,0.6)]">
            <img
              src={money}
              alt="Money Icon"
              className="inline-block h-12 mb-2"
            />
            <ul>
              {arr.map((item, index) => {
                return (
                  <li key={index} className="flex space-x-2 mt-4 font-sans">
                    <img src={tick} alt="Tick Icon" className="h-4 inline" />
                    <div> {item}</div>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
        <div className="grow p-4 flex flex-col content-center justify-center max-w-[40rem]">
          <p className="text-4xl font-extrabold mb-[1rem]">
            Expert Talent, One Click Away — On-Chain
          </p>
          <p className="text-md text-gray-700 mt-2">
            <p className="mb-4">
              In the age of decentralized innovation, finding elite talent
              shouldn’t be a bottleneck. At <b>ICPWork</b>, we connect you with
              top-tier, fully verified freelancers — all operating on a
              censorship-resistant, blockchain-native infrastructure powered by
              the <b>Internet Computer Protocol</b> (ICP).
            </p>
            <p className="mb-4">
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
          </p>
        </div>
      </div>
      <div className="px-[15rem] mb-[5rem] mt-[7rem] text-center text-lg font-bold">
        This isn’t gig work. This is the future of decentralized execution.
        Welcome to ICPWork — built 100% on-chain.
      </div>
    </>
  );
};

export default Sect2;
