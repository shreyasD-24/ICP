import table from "../assets/Sect6.png";
import money from "../assets/icon1.png";
import tick from "../assets/icon3.png";

const Sect6 = () => {
  let arr = [
    "Best Talent",
    "One Click Solution",
    "Good Performance",
    "Clear Data",
  ];
  return (
    <div className="flex flex-col lg:flex-row px-4 sm:px-8 md:px-12 lg:px-16 xl:px-[8rem] 2xl:px-[12rem] 3xl:px-[15rem] justify-center items-center lg:space-x-[3rem] xl:space-x-[4rem] 2xl:space-x-[6rem] my-16 sm:my-20 md:my-24 lg:my-32 xl:my-36 2xl:my-40 space-y-12 sm:space-y-16 md:space-y-20 lg:space-y-0">
      <div className="relative flex-shrink-0">
        <img
          src={table}
          alt="Img"
          className="h-[20rem] sm:h-[22rem] md:h-[24rem] lg:h-[26rem] xl:h-[28rem] 2xl:h-[30rem] w-auto"
        />
        <div className="bg-white rounded-[12px] sm:rounded-[15px] lg:rounded-[18px] py-4 sm:py-5 lg:py-6 pl-5 sm:pl-6 lg:pl-7 pr-6 sm:pr-8 lg:pr-10 text-[0.95rem] sm:text-[1.05rem] lg:text-[1.15rem] max-w-[18rem] sm:max-w-[24rem] lg:max-w-[26rem] absolute top-1/2 -translate-y-1/2 -right-[1rem] sm:-right-[2.5rem] lg:-right-[3rem] shadow-[0_0_2rem_rgba(0,0,0,0.4)] sm:shadow-[0_0_3rem_rgba(0,0,0,0.5)] lg:shadow-[0_0_4rem_rgba(0,0,0,0.6)]">
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
                  className="flex space-x-2 mt-2 sm:mt-3 lg:mt-4 font-sans"
                >
                  <img
                    src={tick}
                    alt="Tick Icon"
                    className="h-3 sm:h-3.5 lg:h-4 inline flex-shrink-0 mt-0.5"
                  />
                  <div> {item}</div>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
      <div className="flex-1 p-4 flex flex-col content-center justify-center max-w-none lg:max-w-[35rem] xl:max-w-[40rem] text-center lg:text-left">
        <p className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-extrabold mb-4 lg:mb-[1rem]">
          The Organaised Assurance:
          <br /> Our Promise to You
        </p>
        <p className="text-base sm:text-lg lg:text-xl text-gray-700 mt-2 leading-relaxed">
          We understand that the foundation of trust is built on consistent
          quality and exceptional service. That's why Organaised pledges to
          deliver not just solutions, but a seamless experience tailored to your
          strategic goals. Our assurance is a partnership that stands on the
          pillars of reliablity, expertise, and unmatched talent.
        </p>
      </div>
    </div>
  );
};

export default Sect6;
