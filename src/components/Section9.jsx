import React from "react";

const WhyChooseICPWork = () => {
  return (
    <section className="w-full px-4 md:px-16 lg:px-24 py-12 bg-white text-gray-900">
      {/* Main Section */}
      <div className="flex flex-col md:flex-row items-center gap-10">
        {/* Text Content */}
        <div className="flex-1">
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-semibold mb-4">
            Why Choose ICPWork?
          </h2>
          <p className="text-gray-700 text-base md:text-lg leading-relaxed">
            Beyond just a freelancing platform, ICPWork offers a truly
            decentralized experience. Built 100% on-chain using canisters,
            reverse gas, and Internet Identity, we eliminate middlemen and
            empower both freelancers and clients to interact transparently and
            trustlessly.
          </p>
          <p className="mt-4 text-gray-700 text-base md:text-lg leading-relaxed">
            With ICPWork, you don’t just find work —
          </p>
          <ul className="mt-2 text-gray-700 text-base md:text-lg leading-relaxed space-y-1">
            <li>🛠️ You join a movement.</li>
            <li>🌍 You shape the future of work.</li>
            <li>🔐 You own your reputation, your payments, and your freedom.</li>
          </ul>
        </div>

        {/* Image */}
        <div className="flex-1 flex justify-center">
          <img
            src="/section9.png"
            alt="ICPWork Illustration"
            className="w-full md:w-4/5 lg:w-3/4"
          />
        </div>
      </div>

      {/* Bottom Call-to-Action */}
      <div className="mt-12 relative rounded-2xl p-1 bg-gradient-to-r from-green-500 via-yellow-500 via-red-500 via-green-500 via-blue-500 via-pink-500 via-purple-500 to-blue-500">
        <div className="rounded-2xl p-6 md:p-8 bg-white shadow-sm text-center">
          <h3 className="text-xl md:text-2xl font-semibold mb-3">
            🌐 Ready to Build the Future of Work?
          </h3>
          <p className="text-gray-700 mb-2 text-base md:text-lg">
            Join us on this mission. Let's build a better freelance economy —
            together.
          </p>
          <p className="text-gray-700 mb-6 text-base md:text-lg leading-relaxed">
            Whether you're a creator looking for autonomy or a business seeking
            top-tier talent without the gatekeepers, ICPWork is your home.
            <br />
            We're more than a network. We're a protocol-powered revolution.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <button className="bg-black text-white px-6 py-3 rounded-full font-medium hover:opacity-90 transition">
              Join as Freelancer
            </button>
            <button className="border border-green-500 text-green-600 px-6 py-3 rounded-full font-medium hover:bg-green-50 transition">
              Join as Client
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseICPWork;
