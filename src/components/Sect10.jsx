import img from "../assets/Sect10.jpg";

const Sect10 = () => {
  return (
    <div className="px-2 xs:px-4 sm:px-6 md:px-8 lg:px-10 xl:px-[6rem] 2xl:px-[8rem] 3xl:px-[12rem]">
      <div className="flex flex-col lg:flex-row justify-center items-center space-y-3 xs:space-y-4 sm:space-y-6 lg:space-y-0 lg:space-x-3 xl:space-x-4 2xl:space-x-6 my-4 xs:my-6 sm:my-8 md:my-10 lg:my-12 xl:my-20 mb-[1rem] xs:mb-[1.5rem] sm:mb-[2rem] md:mb-[3rem] lg:mb-[3rem] xl:mb-[8rem]">
        <div className="w-full lg:w-[48%] xl:w-[46%] 2xl:w-[44%] text-center lg:text-left">
          {/* No changes to content */}
          <div className="bg-gradient-to-br from-purple-300 via-pink-300 to-orange-300 p-1.5 xs:p-2 sm:p-2.5 md:p-3 lg:p-3.5 xl:p-4 2xl:p-4.5 rounded-[12px] xs:rounded-[14px] sm:rounded-[18px] md:rounded-[20px] lg:rounded-[22px] xl:rounded-[24px] 2xl:rounded-[26px] inline-block text-xs xs:text-xs sm:text-sm md:text-base lg:text-lg xl:text-xl 2xl:text-xl font-semibold font-sans mb-3 xs:mb-4 sm:mb-5 md:mb-6 lg:mb-7 xl:mb-8">
            Empower your business with unmatched expertise
          </div>
          <h2 className="text-xl xs:text-2xl sm:text-3xl md:text-4xl lg:text-4xl xl:text-6xl 2xl:text-7xl 3xl:text-8xl 4xl:text-9xl font-bold mb-2 xs:mb-2 sm:mb-3 md:mb-4 lg:mb-4 xl:mb-5 leading-tight">
            ICP Work: Unleashing Potential, Delivering Excellence
          </h2>
          <p className="text-sm xs:text-base sm:text-xl md:text-2xl lg:text-2xl xl:text-4xl 2xl:text-5xl 3xl:text-6xl 4xl:text-7xl text-gray-600 mb-3 xs:mb-4 sm:mb-5 md:mb-6 lg:mb-6 xl:mb-8 leading-relaxed">
            Your Gateway to the Elite Freelance revolution
          </p>

          {/* Search Bar */}
          <div className="flex justify-center lg:justify-start">
            <div className="relative mt-3 xs:mt-4 sm:mt-5 md:mt-6 lg:mt-6 xl:mt-8 w-full max-w-[280px] xs:max-w-[320px] sm:max-w-lg md:max-w-xl lg:max-w-xl xl:max-w-3xl 2xl:max-w-4xl">
              <input
                type="text"
                placeholder="Search your industry here..."
                className="w-full py-2 xs:py-3 sm:py-4 md:py-5 lg:py-5 xl:py-7 2xl:py-8 pl-3 xs:pl-4 sm:pl-6 md:pl-8 lg:pl-8 xl:pl-12 2xl:pl-14 pr-10 xs:pr-12 sm:pr-16 md:pr-20 lg:pr-20 xl:pr-28 2xl:pr-32 rounded-full border-2 border-purple-800 shadow-sm focus:outline-none focus:ring-1 focus:ring-purple-800 focus:border-purple-800 text-xs xs:text-sm sm:text-base md:text-lg lg:text-lg xl:text-2xl 2xl:text-3xl text-gray-700 placeholder-gray-500"
              />
              <div className="absolute right-0.5 xs:right-0.5 sm:right-0.5 md:right-1 lg:right-1 xl:right-1.5 2xl:right-2 top-1/2 transform -translate-y-1/2">
                <button className="bg-[#041D37] text-white p-1.5 xs:p-2 sm:p-3 md:p-4 lg:p-4 xl:p-6 2xl:p-7 rounded-full transition-colors duration-200 cursor-pointer hover:bg-[#03244a]">
                  <svg
                    className="w-3 h-3 xs:w-4 xs:h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 lg:w-6 lg:h-6 xl:w-8 xl:h-8 2xl:w-9 2xl:h-9"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                    />
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </div>

        <div className="w-full lg:w-[48%] xl:w-[46%] 2xl:w-[44%] flex justify-center">
          <div className="bg-gradient-to-br from-pink-300 via-orange-300 to-purple-300 p-2 xs:p-3 sm:p-4 md:p-5 lg:p-5 xl:p-8 2xl:p-10 rounded-lg xs:rounded-xl sm:rounded-2xl md:rounded-3xl lg:rounded-[1.5rem] xl:rounded-[2.5rem] 2xl:rounded-[3rem] inline-block shadow-lg">
            <img
              src={img}
              alt="Section 10"
              className="w-[18rem] xs:w-[22rem] sm:w-[38rem] md:w-[44rem] lg:w-[42rem] xl:w-[56rem] 2xl:w-[62rem] 3xl:w-[68rem] 4xl:w-[74rem] h-48 xs:h-56 sm:h-96 md:h-[28rem] lg:h-[26rem] xl:h-[38rem] 2xl:h-[44rem] 3xl:h-[50rem] 4xl:h-[56rem] rounded-md xs:rounded-lg sm:rounded-xl md:rounded-2xl lg:rounded-[1rem] xl:rounded-[2rem] 2xl:rounded-[2.5rem] shadow-lg border-2 xs:border-3 sm:border-4 md:border-6 lg:border-6 xl:border-[0.75rem] 2xl:border-[1rem] 3xl:border-[1.25rem] border-white object-cover"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sect10;
