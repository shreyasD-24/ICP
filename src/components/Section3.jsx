import React from "react";

const steps = [
  {
    title: "Registration & Profile Setup",
    description: "Register using Internet Identity for secure, anonymous authentication",
    img: "/section3Img/1.png",
  },
  {
    title: "Project Posting",
    description: "Define project requirements, budget, and deadlines",
    img: "/section3Img/2.png",
  },
  {
    title: "Freelancer Selection",
    description: "Review proposals and communicate with potential freelancers",
    img: "/section3Img/3.png",
  },
  {
    title: "Contract & Escrow",
    description: "Smart contract creation and secure fund deposit",
    img: "/section3Img/4.png",
  },
  {
    title: "Work Review & Payment",
    description: "Review deliverables and trigger automatic payment release",
    img: "/section3Img/5.png",
  },
];

export default function OrganisedProcess() {
  return (
    <section className="px-6 py-10 md:px-16 lg:px-28 bg-white text-center">
      <h2 className="text-xl xs:text-2xl sm:text-3xl lg:text-4xl xl:text-3xl 2xl:text-5xl font-semibold mb-2">
        How ICP Work Functions
      </h2>
      <p className="text-gray-600 max-w-3xl mx-auto mb-10 text-sm xs:text-base lg:text-xl xl:text-lg 2xl:text-2xl">
        Simple, secure, and transparent workflows for clients and freelancers
      </p>
      <div className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4 mb-6 sm:mb-8">
            <button className="w-full sm:w-auto bg-black hover:bg-gray-700 text-white px-8 py-3.5 rounded-full font-semibold transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
                    style={{ fontSize: "clamp(0.9rem, 2.25vw, 1.75rem)" }}>
              Join ICP Work
            </button>
            <button className="w-full sm:w-auto bg-gray-200 text-slate-700 hover:text-slate-900 font-semibold transition-colors duration-300 px-6 py-3.5 rounded-full hover:bg-gray-300"
                    style={{ fontSize: "clamp(0.9rem, 2.25vw, 1.75rem)" }}>
              Learn more →
            </button>
          </div>

            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-5">
              {steps.map((step, index) => (
                <div
                  key={index}
                  className="relative group rounded-xl shadow-md overflow-hidden bg-gray-50 hover:bg-white transition-all duration-300"
                >
                  {/* Image */}
                  <div className="w-full">
                    <img
                      src={step.img}
                      alt={step.title}
                      className="w-full h-auto object-contain"
                    />
                  </div>
      
                  {/* Content */}
                  <div className="p-4 text-center">
                    <div className="w-8 h-8 mx-auto mb-2 rounded-full bg-gray-900 text-white flex items-center justify-center">
                      {index + 1}
                    </div>
                    <h3 className="font-semibold text-sm xs:text-base lg:text-xl xl:text-lg 2xl:text-2xl mb-1">{step.title}</h3>
                    <p className="text-sm xs:text-md lg:text-lg xl:text-lg 2xl:text-xl text-gray-600">{step.description}</p>
                  </div>
      
                  {/* Gradient bottom bar on hover */}
                  <div className="absolute bottom-0 left-0 right-0 h-[8px] bg-gradient-to-r from-purple-500 via-pink-500 to-orange-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>
              ))}
            </div>
      
    </section>
  );
}
