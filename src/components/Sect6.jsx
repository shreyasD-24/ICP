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
    <div className="flex px-[15rem] justify-center items-center space-x-[6rem] my-16 mb-[12rem]">
      <div className="relative">
        <img src={table} alt="Img" className="w-[30rem]" />
        <div className="bg-white rounded-[18px] py-5 pl-6 pr-6 text-[0.875rem] max-w-[17rem] absolute bottom-[-3rem] right-[-1.5rem] shadow-[0_0_4rem_rgba(0,0,0,0.6)]">
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
          The Organaised Assurance:
          <br /> Our Promise to You
        </p>
        <p className="text-md text-gray-700 mt-2">
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
