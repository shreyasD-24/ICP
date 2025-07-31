import React, { useState, useEffect } from "react";

const Sect8 = () => {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  const testimonials = [
    {
      id: 1,
      name: "Darren Dunlap",
      position: "Product Manager",
      profilePic:
        "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop&crop=face",
      quote:
        "The smartest move I made as a freelancer — no middlemen, instant payments, and full ownership of my work.",
    },
    {
      id: 2,
      name: "Darren Dunlap",
      position: "Product Manager",
      profilePic:
        "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop&crop=face",
      quote:
        "The smartest move I made as a freelancer — no middlemen, instant payments, and full ownership of my work.",
    },
    {
      id: 3,
      name: "Darren Dunlap",
      position: "Product Manager",
      profilePic:
        "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop&crop=face",
      quote:
        "The smartest move I made as a freelancer — no middlemen, instant payments, and full ownership of my work.",
    },
    {
      id: 4,
      name: "Darren Dunlap",
      position: "Product Manager",
      profilePic:
        "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop&crop=face",
      quote:
        "The smartest move I made as a freelancer — no middlemen, instant payments, and full ownership of my work.",
    },
  ];

  // Auto-scroll functionality
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
    }, 2500); // Change every 2.5 seconds

    return () => clearInterval(interval);
  }, [testimonials.length]);

  const nextTestimonial = () => {
    setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentTestimonial(
      (prev) => (prev - 1 + testimonials.length) % testimonials.length
    );
  };

  const current = testimonials[currentTestimonial];

  return (
    <div className="px-2 xs:px-4 sm:px-8 md:px-12 lg:px-16 xl:px-[6rem] 2xl:px-[8rem] 3xl:px-[12rem] 4xl:px-[16rem] mt-[3rem] xs:mt-[4rem] sm:mt-[8rem] lg:mt-[9rem] xl:mt-[10rem] 2xl:mt-[12rem] mb-[3rem] xs:mb-[4rem] sm:mb-[8rem] lg:mb-[9rem] xl:mb-[10rem] 2xl:mb-[12rem]">
      <div className="bg-gray-100 rounded-lg xs:rounded-xl sm:rounded-2xl p-3 xs:p-4 sm:p-6 md:p-8 lg:p-10 xl:p-12 2xl:p-16 text-center">
        <h2 className="text-lg xs:text-xl sm:text-3xl lg:text-3xl xl:text-4xl 2xl:text-5xl 3xl:text-6xl 4xl:text-7xl 5xl:text-8xl font-bold mb-4 xs:mb-6 sm:mb-8 lg:mb-10 xl:mb-12 2xl:mb-16">
          Why Freelancers Love ICPWork ?
        </h2>
        <p className="text-sm xs:text-base sm:text-lg lg:text-lg xl:text-xl 2xl:text-2xl 3xl:text-3xl 4xl:text-4xl 5xl:text-5xl text-gray-700 mb-8 xs:mb-12 sm:mb-16 lg:mb-18 xl:mb-20 2xl:mb-24 max-w-8xl mx-auto leading-relaxed px-2 xs:px-0">
          At ICPWork, we're redefining the future of freelancing — fully
          on-chain, censorship-resistant, and community-led. Our users aren't
          just freelancers or clients; they're Web3 pioneers shaping how work
          gets done in a decentralized world. Here's what they're saying:
        </p>

        {/* Testimonial Carousel */}
        <div className="rounded-lg xs:rounded-xl p-1 xs:p-2 sm:p-4 md:p-6 lg:p-6 xl:p-8 mx-auto">
          {/* Mobile Layout */}
          <div className="flex flex-col sm:hidden space-y-4">
            {/* Testimonial Content */}
            <div className="flex flex-col items-center justify-center text-center space-y-4">
              {/* Profile Section */}
              <div className="flex flex-col items-center space-y-2 flex-shrink-0">
                <img
                  src={current.profilePic}
                  alt={current.name}
                  className="w-16 h-16 rounded-full object-cover"
                />
                <div className="text-center">
                  <h3 className="font-semibold text-base text-gray-900">
                    {current.name}
                  </h3>
                  <p className="text-gray-600 text-sm">{current.position}</p>
                </div>
              </div>

              {/* Quote Section */}
              <div className="text-center max-w-2xl">
                <p className="text-gray-800 text-base leading-relaxed font-bold">
                  "{current.quote}"
                </p>
              </div>
            </div>

            {/* Navigation Arrows - Horizontal line below content */}
            <div className="flex justify-center items-center space-x-8">
              <button
                onClick={prevTestimonial}
                className="p-1 rounded-full hover:bg-gray-200 transition-colors duration-200 flex-shrink-0"
              >
                <svg
                  className="w-3 h-3 text-gray-600"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M15 19l-7-7 7-7"
                  />
                </svg>
              </button>

              <button
                onClick={nextTestimonial}
                className="p-1 rounded-full hover:bg-gray-200 transition-colors duration-200 flex-shrink-0"
              >
                <svg
                  className="w-3 h-3 text-gray-600"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 5l7 7-7 7"
                  />
                </svg>
              </button>
            </div>
          </div>

          {/* Desktop/Tablet Layout */}
          <div className="hidden sm:flex items-center justify-between space-x-2 sm:space-x-4 lg:space-x-5 xl:space-x-6">
            {/* Left Navigation Arrow */}
            <button
              onClick={prevTestimonial}
              className="p-1.5 sm:p-2 lg:p-2.5 xl:p-3 rounded-full hover:bg-gray-200 transition-colors duration-200 flex-shrink-0"
            >
              <svg
                className="w-4 h-4 sm:w-5 sm:h-5 lg:w-5 lg:h-5 xl:w-6 xl:h-6 text-gray-600"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M15 19l-7-7 7-7"
                />
              </svg>
            </button>

            {/* Testimonial Content */}
            <div className="flex flex-row items-start justify-center text-left flex-1 space-x-4 sm:space-x-24 lg:space-x-28 xl:space-x-32 2xl:space-x-40 3xl:space-x-48 4xl:space-x-56">
              {/* Profile Section */}
              <div className="flex flex-row items-center space-x-3 sm:space-x-4 lg:space-x-5 xl:space-x-6 flex-shrink-0">
                <img
                  src={current.profilePic}
                  alt={current.name}
                  className="w-14 h-14 sm:w-20 sm:h-20 lg:w-28 lg:h-28 xl:w-40 xl:h-40 2xl:w-28 2xl:h-28 3xl:w-32 3xl:h-32 rounded-full object-cover"
                />
                <div className="text-left">
                  <h3 className="font-semibold text-base sm:text-lg lg:text-xl xl:text-3xl 2xl:text-2xl text-gray-900">
                    {current.name}
                  </h3>
                  <p className="text-gray-600 text-sm sm:text-base lg:text-lg xl:text-2xl 2xl:text-xl">
                    {current.position}
                  </p>
                </div>
              </div>

              {/* Quote Section */}
              <div className="flex-1 text-left max-w-2xl lg:max-w-2xl xl:max-w-4xl 2xl:max-w-4xl">
                <p className="text-gray-800 text-base sm:text-lg lg:text-xl xl:text-3xl 2xl:text-2xl 3xl:text-3xl leading-relaxed font-bold">
                  "{current.quote}"
                </p>
              </div>
            </div>

            {/* Right Navigation Arrow */}
            <button
              onClick={nextTestimonial}
              className="p-1.5 sm:p-2 lg:p-2.5 xl:p-3 rounded-full hover:bg-gray-200 transition-colors duration-200 flex-shrink-0"
            >
              <svg
                className="w-4 h-4 sm:w-5 sm:h-5 lg:w-5 lg:h-5 xl:w-6 xl:h-6 text-gray-600"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 5l7 7-7 7"
                />
              </svg>
            </button>
          </div>

          {/* Dots Indicator */}
          <div className="flex justify-center mt-2 xs:mt-3 sm:mt-4 lg:mt-5 xl:mt-6 space-x-1 xs:space-x-1.5 sm:space-x-2">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentTestimonial(index)}
                className={`w-1.5 h-1.5 xs:w-2 xs:h-2 sm:w-3 sm:h-3 lg:w-3.5 lg:h-3.5 rounded-full transition-colors duration-200 ${
                  index === currentTestimonial ? "bg-purple-600" : "bg-gray-300"
                }`}
              />
            ))}
          </div>
        </div>
      </div>

      {/* Feedback Section */}
      <div className="mx-auto mt-16 xs:mt-20 sm:mt-16 md:mt-20 lg:mt-22 xl:mt-24 2xl:mt-28 3xl:mt-32 w-full max-w-[100%] xs:max-w-[98%] sm:max-w-[95%] md:max-w-[90%] lg:max-w-[87%] xl:max-w-[85%] 2xl:max-w-[80%] bg-white rounded-lg sm:rounded-xl lg:rounded-2xl shadow-sm xs:shadow-md sm:shadow-lg lg:shadow-xl xl:shadow-2xl pl-4 xs:pl-8 sm:pl-20 md:pl-24 lg:pl-28 xl:pl-32 2xl:pl-40 3xl:pl-48 pr-3 xs:pr-6 sm:pr-12 md:pr-16 lg:pr-18 xl:pr-32 2xl:pr-24 3xl:pr-32 py-3 xs:py-4 sm:py-6 md:py-8 lg:py-9 xl:py-10 2xl:py-12 3xl:py-16">
        {/* Made with heart */}
        <div className="flex items-center justify-center mb-2 xs:mb-3 sm:mb-5 lg:mb-8 xl:mb-11 opacity-100">
          <span className="text-lg xs:text-xl sm:text-4xl md:text-4xl lg:text-5xl xl:text-6xl text-gray-400 mr-2 xs:mr-3 sm:mr-4 font-bold">
            Made with
          </span>
          <div className="relative">
            <svg
              className="w-6 h-6 xs:w-8 xs:h-8 sm:w-14 sm:h-14 md:w-14 md:h-14 lg:w-16 lg:h-16 xl:w-20 xl:h-20 text-red-500"
              height="200px"
              width="200px"
              version="1.1"
              id="Capa_1"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 19.625 19.625"
            >
              <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
              <g
                id="SVGRepo_tracerCarrier"
                strokeLinecap="round"
                strokeLinejoin="round"
              ></g>
              <g id="SVGRepo_iconCarrier">
                <g>
                  <path
                    style={{ fill: "#eb0a0a" }}
                    d="M18.73,2.645c-0.818-1.074-2.117-1.692-3.969-1.889C14.612,0.74,14.455,0.73,14.295,0.73 c-1.604,0-3.423,0.777-4.483,2.248c-1.06-1.47-2.877-2.247-4.481-2.247c-0.158,0-0.315,0.009-0.465,0.025 c-1.852,0.197-3.151,0.815-3.97,1.889c-0.81,1.062-1.074,2.516-0.778,4.324c0.719,4.385,8.838,11.425,9.183,11.723 c0.158,0.135,0.352,0.203,0.546,0.203c0.196,0,0.393-0.068,0.55-0.206c0.342-0.298,8.394-7.336,9.11-11.721 C19.803,5.163,19.542,3.708,18.73,2.645z M18.349,7.647c0,0-0.314-4.707-4.497-5.334C13.853,2.313,18.873,1.581,18.349,7.647z"
                  ></path>
                </g>
              </g>
            </svg>
          </div>
        </div>

        <h3 className="text-lg xs:text-xl sm:text-3xl lg:text-3xl xl:text-4xl 2xl:text-5xl 3xl:text-6xl 4xl:text-7xl 5xl:text-8xl font-bold text-gray-900 mb-4 xs:mb-6 sm:mb-8 lg:mb-10 xl:mb-12 2xl:mb-16">
          Got Feedback for ICPWork?
        </h3>
        <p className="text-gray-600 text-sm xs:text-base sm:text-lg lg:text-lg xl:text-xl 2xl:text-2xl 3xl:text-3xl 4xl:text-4xl 5xl:text-5xl mb-6 xs:mb-8 sm:mb-10 lg:mb-12 xl:mb-14 2xl:mb-18 leading-relaxed">
          <b>Still Have Suggestions?</b>
          <br />
          We're building ICPWork with our community — and your input shapes
          every feature. Whether you're a developer, freelancer, or curious
          explorer, we want to hear from you.
        </p>
        <p className="text-gray-800 text-sm xs:text-base sm:text-lg lg:text-xl xl:text-2xl 2xl:text-3xl 3xl:text-4xl 4xl:text-5xl mb-4 xs:mb-6 sm:mb-8 lg:mb-12 xl:mb-16 font-medium lg:font-semibold">
          Drop your valuable feedback below:
        </p>

        <div className="space-y-3 xs:space-y-4 sm:space-y-6 lg:space-y-7">
          <div className="relative max-w-7xl">
            <textarea
              placeholder="Please describe your idea or suggestion clearly..."
              className="w-full p-3 xs:p-4 sm:p-6 lg:p-8 xl:p-10 border-2 border-gray-200 hover:border-gray-300 focus:border-blue-500 rounded-lg sm:rounded-xl lg:rounded-2xl resize-none h-24 xs:h-28 sm:h-32 lg:h-40 xl:h-48 text-sm xs:text-base sm:text-lg lg:text-xl xl:text-2xl transition-all duration-300 focus:outline-none focus:ring-4 focus:ring-blue-100 placeholder-gray-400 bg-gray-50 focus:bg-white"
            />
          </div>

          <div className="flex justify-center sm:justify-start">
            <button
              className="w-auto xs:w-auto sm:w-[18%] md:w-[22%] lg:w-[26%] xl:w-[28%] 2xl:w-[28%] min-w-[120px] xs:min-w-[140px] sm:min-w-[180px] lg:min-w-[200px] px-4 xs:px-5 sm:px-6 lg:px-8 xl:px-10 py-3 xs:py-3.5 sm:py-4 lg:py-5 xl:py-6 rounded-full text-white text-sm xs:text-base sm:text-lg lg:text-xl xl:text-2xl font-semibold hover:opacity-90 hover:scale-105 active:scale-95 transition-all duration-200 shadow-lg hover:shadow-xl"
              style={{ backgroundColor: "#041D37" }}
            >
              Send Feedback
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sect8;
