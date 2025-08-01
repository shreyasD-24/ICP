import React from "react";

const WhyChooseICPWork = () => {
  return (
    <section className="px-4 xs:px-6 sm:px-16 md:px-18 lg:px-20 xl:px-22 2xl:px-24 3xl:px-28 4xl:px-32 5xl:px-36 py-8 xs:py-6 sm:py-10 lg:py-11 xl:py-12 2xl:py-14 bg-white text-gray-900">
      {/* Main Section */}
      <div className="flex flex-col md:flex-row items-center gap-6 xs:gap-8 sm:gap-12 lg:gap-14 xl:gap-12 2xl:gap-20 max-w-[120rem] mx-auto">
        {/* Text Content */}
        <div className="flex-1">
          <h2 className="text-xl xs:text-2xl sm:text-3xl lg:text-4xl xl:text-3xl 2xl:text-5xl font-semibold mb-4">
            Why Choose ICPWork?
          </h2>
          <p className="text-gray-700 text-sm xs:text-base lg:text-xl xl:text-lg 2xl:text-2xl leading-relaxed">
            Beyond just a freelancing platform, ICPWork offers a truly
            decentralized experience. Built 100% on-chain using canisters,
            reverse gas, and Internet Identity, we eliminate middlemen and
            empower both freelancers and clients to interact transparently and
            trustlessly.
          </p>
          <p className="mt-4 text-gray-700 text-sm xs:text-base lg:text-xl xl:text-lg 2xl:text-2xl leading-relaxed">
            With ICPWork, you don’t just find work —
          </p>
          <ul className="mt-2 text-gray-700 text-sm xs:text-base lg:text-xl xl:text-lg 2xl:text-2xl leading-relaxed space-y-1">
            <li>🛠️ You join a movement.</li>
            <li>🌍 You shape the future of work.</li>
            <li>
              🔐 You own your reputation, your payments, and your freedom.
            </li>
          </ul>
        </div>

        {/* Image */}
        <div className="flex-1 flex justify-center">
          <img
            src="/section9.jpg"
            alt="ICPWork Illustration"
            className="w-full rounded-3xl md:w-4/5 lg:w-3/4"
          />
        </div>
      </div>

      {/* Bottom Call-to-Action */}
      <div className="mt-8 xs:mt-5 sm:mt-8 lg:mt-9 xl:mt-8 2xl:mt-10 relative rounded-2xl p-1 bg-gradient-to-r from-green-500 via-yellow-500 via-red-500 via-green-500 via-blue-500 via-pink-500 via-purple-500 to-blue-500 max-w-[120rem] mx-auto">
        <div className="rounded-2xl p-6 md:p-8 bg-white shadow-sm text-center">
          <h3 className="text-xl xs:text-2xl sm:text-3xl lg:text-4xl xl:text-3xl 2xl:text-5xl font-semibold mb-3">
            🌐 Ready to Build the Future of Work?
          </h3>
          <p className="text-gray-700 mb-2 text-sm xs:text-base lg:text-xl xl:text-lg 2xl:text-2xl">
            Join us on this mission. Let's build a better freelance economy —
            together.
          </p>
          <p className="text-gray-700 mb-6 text-sm xs:text-base lg:text-xl xl:text-lg 2xl:text-2xl leading-relaxed">
            Whether you're a creator looking for autonomy or a business seeking
            top-tier talent without the gatekeepers, ICPWork is your home.
            <br />
            We're more than a network. We're a protocol-powered revolution.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <button className="w-full sm:w-auto bg-black hover:bg-gray-700 text-white px-8 lg:px-10 xl:px-12 2xl:px-14 3xl:px-16 4xl:px-20 5xl:px-24 py-3 lg:py-4 xl:py-5 2xl:py-6 3xl:py-7 4xl:py-8 5xl:py-10 rounded-full font-semibold text-sm lg:text-base xl:text-xl 2xl:text-2xl 3xl:text-3xl 4xl:text-4xl 5xl:text-5xl transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5">
              Join as Freelancer
            </button>
            <button className="w-full sm:w-auto border border-green-500 text-green-600 px-8 lg:px-10 xl:px-12 2xl:px-14 3xl:px-16 4xl:px-20 5xl:px-24 py-3 lg:py-4 xl:py-5 2xl:py-6 3xl:py-7 4xl:py-8 5xl:py-10 rounded-full font-semibold text-sm lg:text-base xl:text-xl 2xl:text-2xl 3xl:text-3xl 4xl:text-4xl 5xl:text-5xl hover:bg-green-50 transition-all duration-300">
              Join as Client
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseICPWork;
