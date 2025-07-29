import img from "../assets/Sect10.jpg";

const Sect10 = () => {
  return (
    <div className="px-4 sm:px-6 md:px-8 lg:px-12 xl:px-[6rem] 2xl:px-[8rem] 3xl:px-[12rem]">
      <div className="flex flex-col lg:flex-row justify-center items-center space-y-6 sm:space-y-8 lg:space-y-0 lg:space-x-6 xl:space-x-8 2xl:space-x-12 my-6 sm:my-8 md:my-12 lg:my-16 xl:my-20 mb-[4rem] sm:mb-[6rem] md:mb-[8rem] lg:mb-[10rem] xl:mb-[12rem]">
        <div className="w-full lg:w-1/2 xl:w-[48%] 2xl:w-[45%] text-center lg:text-left">
          <div className="bg-gradient-to-br from-purple-300 via-pink-300 to-orange-300 p-2.5 sm:p-3 md:p-4 lg:p-4 xl:p-5 rounded-[18px] sm:rounded-[22px] md:rounded-[26px] lg:rounded-[28px] xl:rounded-[30px] inline-block text-[0.7rem] sm:text-xs md:text-[0.73rem] lg:text-sm xl:text-base font-semibold font-sans mb-4 sm:mb-5 md:mb-6 lg:mb-7 xl:mb-8">
            Empower your business with unmatched expertise
          </div>
          <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl 2xl:text-6xl font-bold mb-2 sm:mb-3 md:mb-4 lg:mb-4 xl:mb-5 leading-tight">
            ICP Work: Unleashing Potential, Delivering Excellence
          </h2>
          <p className="text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl 2xl:text-3xl text-gray-600 mb-4 sm:mb-5 md:mb-6 lg:mb-7 xl:mb-8 leading-relaxed">
            Your Gateway to the Elite Freelance revolution
          </p>

          {/* Search Bar */}
          <div className="flex justify-center lg:justify-start">
            <div className="relative mt-4 sm:mt-5 md:mt-6 lg:mt-7 xl:mt-8 w-full max-w-[320px] sm:max-w-sm md:max-w-md lg:max-w-lg xl:max-w-xl">
              <input
                type="text"
                placeholder="Search your industry here..."
                className="w-full py-2.5 sm:py-3 md:py-3.5 lg:py-4 xl:py-5 pl-3 sm:pl-4 md:pl-5 lg:pl-6 xl:pl-7 pr-10 sm:pr-12 md:pr-14 lg:pr-16 xl:pr-18 rounded-full border-2 border-purple-800 shadow-sm focus:outline-none focus:ring-1 focus:ring-purple-800 focus:border-purple-800 text-xs sm:text-sm md:text-base lg:text-lg xl:text-xl text-gray-700 placeholder-gray-500"
              />
              <div className="absolute right-1 sm:right-1.5 md:right-2 lg:right-2.5 xl:right-3 top-1/2 transform -translate-y-1/2">
                <button className="bg-[#041D37] text-white p-1.5 sm:p-2 md:p-2.5 lg:p-3 xl:p-3.5 rounded-full transition-colors duration-200 cursor-pointer hover:bg-[#03244a]">
                  <svg
                    className="w-3 h-3 sm:w-4 sm:h-4 md:w-4.5 md:h-4.5 lg:w-5 lg:h-5 xl:w-6 xl:h-6"
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

        <div className="w-full lg:w-1/2 xl:w-[52%] 2xl:w-[55%] flex justify-center">
          <div className="bg-gradient-to-br from-pink-300 via-orange-300 to-purple-300 p-3 sm:p-4 md:p-5 lg:p-6 xl:p-8 2xl:p-10 rounded-xl sm:rounded-2xl md:rounded-3xl lg:rounded-[2rem] xl:rounded-[2.5rem] 2xl:rounded-[3rem] inline-block shadow-lg">
            <img
              src={img}
              alt="Section 10"
              className="w-80 sm:w-96 md:w-[26rem] lg:w-[28rem] xl:w-[32rem] 2xl:w-[38rem] 3xl:w-[42rem] h-56 sm:h-64 md:h-72 lg:h-72 xl:h-80 2xl:h-96 3xl:h-[28rem] rounded-lg sm:rounded-xl md:rounded-2xl lg:rounded-[1.5rem] xl:rounded-[2rem] 2xl:rounded-[2.5rem] shadow-lg border-3 sm:border-4 md:border-6 lg:border-8 xl:border-[0.75rem] 2xl:border-[1rem] 3xl:border-[1.25rem] border-white object-cover"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sect10;
