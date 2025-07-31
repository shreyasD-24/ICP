import table from "../assets/Sect6.png";
import tick from "../assets/icon3.png";

const Sect6 = () => {
  let arr = [
    "Infinite Scalability",
    "Chain-Key Cryptography",
    "Direct Web Serving",
  ];
  return (
    <div className="flex flex-col lg:flex-row px-2 sm:px-4 md:px-6 lg:px-8 xl:px-10 2xl:px-12 3xl:px-14 4xl:px-16 justify-center items-center lg:space-x-[4rem] xl:space-x-[6rem] 2xl:space-x-[8rem] my-16 sm:my-20 md:my-24 lg:my-32 xl:my-36 2xl:my-40 space-y-12 sm:space-y-16 md:space-y-20 lg:space-y-0">
      <div className="relative flex-shrink-0">
        <img
          src={table}
          alt="Img"
          className="h-[25rem] sm:h-[28rem] md:h-[32rem] lg:h-[35rem] xl:h-[38rem] 2xl:h-[42rem] 3xl:h-[45rem] 4xl:h-[50rem] w-auto"
        />
        <div className="bg-white rounded-[12px] sm:rounded-[15px] lg:rounded-[18px] py-4 sm:py-5 lg:py-6 xl:py-8 2xl:py-10 3xl:py-12 4xl:py-16 pl-5 sm:pl-6 lg:pl-7 xl:pl-8 2xl:pl-10 3xl:pl-12 4xl:pl-16 pr-4 sm:pr-5 lg:pr-6 xl:pr-7 2xl:pr-8 3xl:pr-10 4xl:pr-12 text-base sm:text-lg lg:text-xl xl:text-2xl 2xl:text-3xl 3xl:text-4xl 4xl:text-5xl max-w-[15rem] sm:max-w-[20rem] lg:max-w-[22rem] xl:max-w-[25rem] 2xl:max-w-[28rem] 3xl:max-w-[32rem] 4xl:max-w-[38rem] absolute top-[25%] -translate-y-1/2 -right-[2rem] sm:-right-[3.5rem] lg:-right-[4rem] xl:-right-[5rem] 2xl:-right-[6rem] 3xl:-right-[7rem] 4xl:-right-[9rem] shadow-[0_0_2rem_rgba(0,0,0,0.4)] sm:shadow-[0_0_3rem_rgba(0,0,0,0.5)] lg:shadow-[0_0_4rem_rgba(0,0,0,0.6)] xl:shadow-[0_0_5rem_rgba(0,0,0,0.6)] 2xl:shadow-[0_0_6rem_rgba(0,0,0,0.7)] 3xl:shadow-[0_0_7rem_rgba(0,0,0,0.7)] 4xl:shadow-[0_0_12rem_rgba(0,0,0,0.8)]">
          <ul>
            {arr.map((item, index) => {
              return (
                <li
                  key={index}
                  className="flex space-x-2 mt-2 sm:mt-3 lg:mt-4 font-sans"
                >
                  <img
                    src={tick}
                    alt="Tick Icon"
                    className="h-4 sm:h-5 lg:h-6 xl:h-7 2xl:h-8 3xl:h-10 4xl:h-12 inline flex-shrink-0 mt-0.5"
                  />
                  <div> {item}</div>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
      <div className="flex-1 p-4 lg:p-6 xl:p-8 2xl:p-10 3xl:p-12 4xl:p-16 flex flex-col content-center justify-center max-w-none lg:max-w-[55rem] xl:max-w-[65rem] 2xl:max-w-[75rem] 3xl:max-w-[85rem] 4xl:max-w-[95rem] text-center lg:text-left">
        <p className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl 2xl:text-7xl 3xl:text-8xl 4xl:text-9xl font-bold mb-4 lg:mb-[1rem] xl:mb-[1.5rem] 2xl:mb-[2rem] 3xl:mb-[2.5rem] 4xl:mb-[4rem]">
          Built on the Internet Computer
        </p>
        <p className="text-xl lg:text-2xl xl:text-3xl 2xl:text-4xl 3xl:text-5xl 4xl:text-6xl text-gray-600 mt-2 mb-8 lg:mb-12 xl:mb-16 leading-relaxed">
          Leveraging the most advanced blockchain technology for the future of
          work
        </p>

        {/* Grid with features */}
        <div className="grid grid-cols-2 gap-8 lg:gap-12 xl:gap-16">
          <div className="text-center lg:text-left">
            <h3 className="text-lg lg:text-xl xl:text-2xl 2xl:text-3xl 3xl:text-4xl 4xl:text-5xl font-semibold mb-4 lg:mb-6 text-gray-900">
              Infinite Scalability
            </h3>
            <p className="text-lg lg:text-xl xl:text-2xl 2xl:text-3xl 3xl:text-4xl 4xl:text-5xl text-gray-600 leading-relaxed">
              Horizontal Scaling Through Subnet Architecture Accommodates
              Massive User Growth
            </p>
          </div>

          <div className="text-center lg:text-left">
            <h3 className="text-lg lg:text-xl xl:text-2xl 2xl:text-3xl 3xl:text-4xl 4xl:text-5xl font-semibold mb-4 lg:mb-6 text-gray-900">
              Direct Web Serving
            </h3>
            <p className="text-lg lg:text-xl xl:text-2xl 2xl:text-3xl 3xl:text-4xl 4xl:text-5xl text-gray-600 leading-relaxed">
              Entire Application Runs On-Chain, Eliminating Centralized Cloud
              Dependencies
            </p>
          </div>

          <div className="text-center lg:text-left">
            <h3 className="text-lg lg:text-xl xl:text-2xl 2xl:text-3xl 3xl:text-4xl 4xl:text-5xl font-semibold mb-4 lg:mb-6 text-gray-900">
              Chain-Key Cryptography
            </h3>
            <p className="text-lg lg:text-xl xl:text-2xl 2xl:text-3xl 3xl:text-4xl 4xl:text-5xl text-gray-600 leading-relaxed">
              Revolutionary Cryptography Enables Secure Interoperability And
              Cross-Chain Functionality
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sect6;
