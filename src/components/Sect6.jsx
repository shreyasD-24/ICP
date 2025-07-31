import table from "../assets/Sect6.png";
import tick from "../assets/icon3.png";

const Sect6 = () => {
  let arr = [
    "Infinite Scalability",
    "Chain-Key Cryptography",
    "Direct Web Serving",
  ];
  return (
    <div className="flex flex-col lg:flex-row px-1 xs:px-2 sm:px-4 md:px-6 lg:px-8 xl:px-8 2xl:px-10 3xl:px-12 4xl:px-14 5xl:px-16 justify-center items-center lg:space-x-[4rem] xl:space-x-[4rem] 2xl:space-x-[6rem] 3xl:space-x-[8rem] my-3 xs:my-6 sm:my-6 md:my-7 lg:my-8 xl:my-8 2xl:my-10 3xl:my-14 space-y-8 xs:space-y-12 sm:space-y-16 md:space-y-20 lg:space-y-0">
      <div className="relative flex-shrink-0">
        <img
          src={table}
          alt="Img"
          className="h-[18rem] xs:h-[20rem] sm:h-[28rem] md:h-[32rem] lg:h-[33rem] xl:h-[30rem] 2xl:h-[38rem] 3xl:h-[42rem] 4xl:h-[45rem] 5xl:h-[50rem] w-auto"
        />
        <div className="bg-white rounded-[8px] xs:rounded-[10px] sm:rounded-[15px] lg:rounded-[16px] xl:rounded-[18px] py-2 xs:py-3 sm:py-5 lg:py-5 xl:py-6 2xl:py-8 3xl:py-10 4xl:py-12 5xl:py-16 pl-3 xs:pl-4 sm:pl-6 lg:pl-6 xl:pl-7 2xl:pl-8 3xl:pl-10 4xl:pl-12 5xl:pl-16 pr-2 xs:pr-3 sm:pr-5 lg:pr-5 xl:pr-6 2xl:pr-7 3xl:pr-8 4xl:pr-10 5xl:pr-12 text-xs xs:text-sm sm:text-lg lg:text-lg xl:text-xl 2xl:text-2xl 3xl:text-3xl 4xl:text-4xl 5xl:text-5xl max-w-[10rem] xs:max-w-[12rem] sm:max-w-[20rem] lg:max-w-[20rem] xl:max-w-[22rem] 2xl:max-w-[25rem] 3xl:max-w-[28rem] 4xl:max-w-[32rem] 5xl:max-w-[38rem] absolute top-[25%] -translate-y-1/2 -right-[1rem] xs:-right-[1.5rem] sm:-right-[3.5rem] lg:-right-[3.5rem] xl:-right-[4rem] 2xl:-right-[5rem] 3xl:-right-[6rem] 4xl:-right-[7rem] 5xl:-right-[9rem] shadow-[0_0_1rem_rgba(0,0,0,0.3)] xs:shadow-[0_0_1.5rem_rgba(0,0,0,0.4)] sm:shadow-[0_0_3rem_rgba(0,0,0,0.5)] lg:shadow-[0_0_3.5rem_rgba(0,0,0,0.55)] xl:shadow-[0_0_4rem_rgba(0,0,0,0.6)] 2xl:shadow-[0_0_5rem_rgba(0,0,0,0.6)] 3xl:shadow-[0_0_6rem_rgba(0,0,0,0.7)] 4xl:shadow-[0_0_7rem_rgba(0,0,0,0.7)] 5xl:shadow-[0_0_12rem_rgba(0,0,0,0.8)]">
          <ul>
            {arr.map((item, index) => {
              return (
                <li
                  key={index}
                  className="flex space-x-1 xs:space-x-1.5 sm:space-x-2 mt-1 xs:mt-1.5 sm:mt-3 lg:mt-4 font-sans"
                >
                  <img
                    src={tick}
                    alt="Tick Icon"
                    className="h-3 xs:h-3.5 sm:h-5 lg:h-5 xl:h-6 2xl:h-7 3xl:h-8 4xl:h-10 5xl:h-12 inline flex-shrink-0 mt-0.5"
                  />
                  <div className="text-xs xs:text-sm sm:text-base lg:text-base xl:text-lg 2xl:text-xl 3xl:text-2xl 4xl:text-3xl 5xl:text-4xl">
                    {" "}
                    {item}
                  </div>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
      <div className="flex-1 p-2 xs:p-3 sm:p-4 lg:p-5 xl:p-6 2xl:p-8 3xl:p-10 4xl:p-12 5xl:p-16 flex flex-col content-center justify-center max-w-none lg:max-w-[50rem] xl:max-w-[55rem] 2xl:max-w-[65rem] 3xl:max-w-[75rem] 4xl:max-w-[85rem] 5xl:max-w-[95rem] text-center lg:text-left">
        <p className="text-xl xs:text-2xl sm:text-4xl lg:text-4xl xl:text-5xl 2xl:text-6xl 3xl:text-7xl 4xl:text-8xl 5xl:text-9xl font-bold mb-3 xs:mb-4 lg:mb-[1rem] xl:mb-[1rem] 2xl:mb-[1.5rem] 3xl:mb-[2rem] 4xl:mb-[2.5rem] 5xl:mb-[4rem]">
          Built on the Internet Computer
        </p>
        <p className="text-sm xs:text-base sm:text-xl lg:text-xl xl:text-2xl 2xl:text-3xl 3xl:text-4xl 4xl:text-5xl 5xl:text-6xl text-gray-600 mt-2 mb-6 xs:mb-8 lg:mb-10 xl:mb-12 2xl:mb-16 leading-relaxed">
          Leveraging the most advanced blockchain technology for the future of
          work
        </p>

        {/* Grid with features */}
        <div className="grid grid-cols-1 xs:grid-cols-2 gap-4 xs:gap-6 sm:gap-8 lg:gap-10 xl:gap-12 2xl:gap-16">
          <div className="text-center lg:text-left">
            <h3 className="text-sm xs:text-base sm:text-lg lg:text-lg xl:text-xl 2xl:text-2xl 3xl:text-3xl 4xl:text-4xl 5xl:text-5xl font-semibold mb-2 xs:mb-3 sm:mb-4 lg:mb-5 xl:mb-6 text-gray-900">
              Infinite Scalability
            </h3>
            <p className="text-xs xs:text-sm sm:text-lg lg:text-lg xl:text-xl 2xl:text-2xl 3xl:text-3xl 4xl:text-4xl 5xl:text-5xl text-gray-600 leading-relaxed">
              Horizontal Scaling Through Subnet Architecture Accommodates
              Massive User Growth
            </p>
          </div>

          <div className="text-center lg:text-left">
            <h3 className="text-sm xs:text-base sm:text-lg lg:text-lg xl:text-xl 2xl:text-2xl 3xl:text-3xl 4xl:text-4xl 5xl:text-5xl font-semibold mb-2 xs:mb-3 sm:mb-4 lg:mb-5 xl:mb-6 text-gray-900">
              Direct Web Serving
            </h3>
            <p className="text-xs xs:text-sm sm:text-lg lg:text-lg xl:text-xl 2xl:text-2xl 3xl:text-3xl 4xl:text-4xl 5xl:text-5xl text-gray-600 leading-relaxed">
              Entire Application Runs On-Chain, Eliminating Centralized Cloud
              Dependencies
            </p>
          </div>

          <div className="text-center lg:text-left col-span-1 xs:col-span-2 lg:col-span-1">
            <h3 className="text-sm xs:text-base sm:text-lg lg:text-lg xl:text-xl 2xl:text-2xl 3xl:text-3xl 4xl:text-4xl 5xl:text-5xl font-semibold mb-2 xs:mb-3 sm:mb-4 lg:mb-5 xl:mb-6 text-gray-900">
              Chain-Key Cryptography
            </h3>
            <p className="text-xs xs:text-sm sm:text-lg lg:text-lg xl:text-xl 2xl:text-2xl 3xl:text-3xl 4xl:text-4xl 5xl:text-5xl text-gray-600 leading-relaxed">
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
