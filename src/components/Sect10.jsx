import img from "../assets/Sect10.jpg";

const Sect10 = () => {
  return (
    <div className="px-4 sm:px-8 md:px-12 lg:px-16 xl:px-[16rem] flex justify-center">
      <div className="flex flex-col lg:flex-row justify-center items-center space-y-8 lg:space-y-0 lg:space-x-[2rem] my-16 mb-[12rem]">
        <div className="w-full lg:max-w-[50%]">
          <div className="bg-gradient-to-br from-purple-300 via-pink-300 to-orange-300 p-4 rounded-[30px] inline-block text-[0.73rem] font-semibold font-sans mb-8">
            Empower your business with unmatched expertise
          </div>
          <h2 className="text-4xl font-bold mb-4">
            ICP Work: Unleashing Potential, Delivering Excellence
          </h2>
          <p className="text-lg">
            Your Gateway to the Elite Freelance revolution
          </p>

          {/* Search Bar */}
          <div className="relative mt-8 max-w-md">
            <input
              type="text"
              placeholder="Search your industry here..."
              className="w-full py-4 pl-6 pr-16 rounded-full border-2 border-purple-800 shadow-sm focus:outline-none focus:ring-1 focus:ring-purple-800 focus:border-purple-800 text-gray-700 placeholder-gray-500"
            />
            <div className="absolute right-2 top-1/2 transform -translate-y-1/2">
              <button className="bg-[#041D37] text-white p-3 rounded-full transition-colors duration-200 cursor-pointer hover:bg-[#03244a]">
                <svg
                  className="w-5 h-5"
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
        <div className="bg-gradient-to-br from-pink-300 via-orange-300 to-purple-300 p-6 rounded-3xl inline-block">
          <img
            src={img}
            alt="Section 10"
            className="w-[30rem] rounded-2xl shadow-lg border-[1rem] border-white"
          />
        </div>
      </div>
    </div>
  );
};

export default Sect10;
