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
        "The best solution for anyone who wants to work a flexible schedule but still earn a full-time income.",
    },
    {
      id: 2,
      name: "Sarah Johnson",
      position: "Frontend Developer",
      profilePic:
        "https://images.unsplash.com/photo-1494790108755-2616b612b0a4?w=100&h=100&fit=crop&crop=face",
      quote:
        "ICPWork has revolutionized how I approach freelance projects. The platform is intuitive and secure.",
    },
    {
      id: 3,
      name: "Marcus Chen",
      position: "UX Designer",
      profilePic:
        "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&crop=face",
      quote:
        "The Web3 integration makes payments seamless and transparent. Highly recommend for modern freelancers.",
    },
    {
      id: 4,
      name: "Elena Rodriguez",
      position: "Content Writer",
      profilePic:
        "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop&crop=face",
      quote:
        "Amazing platform that connects clients with talented freelancers in a decentralized ecosystem.",
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
    <div className="px-4 sm:px-8 md:px-12 lg:px-16 xl:px-[8rem] 2xl:px-[12rem] 3xl:px-[16rem] mt-[6rem] sm:mt-[8rem] lg:mt-[10rem] xl:mt-[12rem] mb-[6rem] sm:mb-[8rem] lg:mb-[10rem] xl:mb-[12rem]">
      <div className="bg-gray-100 rounded-xl sm:rounded-2xl p-4 sm:p-6 md:p-8 lg:p-12 xl:p-16 text-center">
        <h2 className="text-2xl sm:text-3xl md:text-3xl lg:text-4xl font-bold mb-3 sm:mb-4 lg:mb-6">
          Why Freelancers Love ICPWork ?
        </h2>
        <p className="text-sm sm:text-base md:text-base lg:text-lg text-gray-700 mb-6 sm:mb-8 lg:mb-12 max-w-4xl mx-auto leading-relaxed">
          At ICPWork, we're redefining the future of freelancing — fully
          on-chain, censorship-resistant, and community-led. Our users aren't
          just freelancers or clients; they're Web3 pioneers shaping how work
          gets done in a decentralized world. Here's what they're saying:
        </p>

        {/* Testimonial Carousel */}
        <div className="rounded-xl p-2 sm:p-4 md:p-6 lg:p-8 mx-auto">
          <div className="flex items-center justify-between space-x-2 sm:space-x-4 lg:space-x-6">
            {/* Left Navigation Arrow */}
            <button
              onClick={prevTestimonial}
              className="p-1.5 sm:p-2 lg:p-3 rounded-full hover:bg-gray-200 transition-colors duration-200 flex-shrink-0"
            >
              <svg
                className="w-4 h-4 sm:w-5 sm:h-5 lg:w-6 lg:h-6 text-gray-600"
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
            <div className="flex flex-col sm:flex-row items-center sm:space-x-3 md:space-x-4 lg:space-x-6 xl:space-x-8 2xl:space-x-12 flex-1 space-y-3 sm:space-y-0">
              {/* Profile Section */}
              <div className="flex flex-col xs:flex-row items-center space-y-2 xs:space-y-0 xs:space-x-2 sm:space-x-3 lg:space-x-4 flex-shrink-0 text-center xs:text-left">
                <img
                  src={current.profilePic}
                  alt={current.name}
                  className="w-10 h-10 xs:w-12 xs:h-12 sm:w-14 sm:h-14 lg:w-16 lg:h-16 xl:w-18 xl:h-18 rounded-full object-cover"
                />
                <div className="min-w-0">
                  <h3 className="font-semibold text-sm xs:text-base sm:text-lg lg:text-lg xl:text-xl text-gray-900 truncate">
                    {current.name}
                  </h3>
                  <p className="text-gray-600 text-xs xs:text-xs sm:text-sm lg:text-sm xl:text-base truncate">
                    {current.position}
                  </p>
                </div>
              </div>

              {/* Quote Section */}
              <div className="flex-1 text-center sm:text-left font-medium lg:font-semibold min-w-0">
                <p className="text-gray-800 text-xs xs:text-sm sm:text-base lg:text-base xl:text-lg 2xl:text-xl leading-relaxed">
                  "{current.quote}"
                </p>
              </div>
            </div>

            {/* Right Navigation Arrow */}
            <button
              onClick={nextTestimonial}
              className="p-1.5 sm:p-2 lg:p-3 rounded-full hover:bg-gray-200 transition-colors duration-200 flex-shrink-0"
            >
              <svg
                className="w-4 h-4 sm:w-5 sm:h-5 lg:w-6 lg:h-6 text-gray-600"
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
          <div className="flex justify-center mt-3 sm:mt-4 lg:mt-6 space-x-1.5 sm:space-x-2">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentTestimonial(index)}
                className={`w-2 h-2 xs:w-2.5 xs:h-2.5 sm:w-3 sm:h-3 lg:w-3.5 lg:h-3.5 rounded-full transition-colors duration-200 ${
                  index === currentTestimonial ? "bg-purple-600" : "bg-gray-300"
                }`}
              />
            ))}
          </div>
        </div>
      </div>

      {/* Feedback Section */}
      <div className="mx-auto mt-12 sm:mt-16 md:mt-20 lg:mt-24 xl:mt-28 2xl:mt-32 w-full max-w-[100%] xs:max-w-[98%] sm:max-w-[95%] md:max-w-[90%] lg:max-w-[85%] xl:max-w-[80%] bg-white rounded-lg sm:rounded-xl lg:rounded-2xl shadow-sm xs:shadow-md sm:shadow-lg lg:shadow-xl xl:shadow-2xl p-4 xs:p-5 sm:p-6 md:p-8 lg:p-10 xl:p-12 2xl:p-16">
        {/* Made with heart */}
        <div className="flex items-center justify-center mb-3 xs:mb-4 sm:mb-5 lg:mb-6 opacity-100">
          <span className="text-2xl xs:text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-gray-400 mr-4 font-bold">
            Made with
          </span>
          <div className="relative">
            <svg
              className="w-10 h-10 xs:w-12 xs:h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 lg:w-20 lg:h-20 text-red-500"
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

        <h3 className="text-lg xs:text-xl sm:text-2xl md:text-2xl lg:text-3xl xl:text-4xl 2xl:text-4xl font-bold text-gray-900 mb-2 xs:mb-3 sm:mb-4 lg:mb-6">
          Got Feedback for ICPWork?
        </h3>
        <p className="text-gray-600 text-xs xs:text-sm sm:text-base md:text-base lg:text-lg mb-3 xs:mb-4 sm:mb-6 leading-relaxed">
          We're building ICPWork with our community — and your input shapes
          every feature. Whether you're a developer, freelancer, or curious
          explorer, we want to hear from you.
        </p>
        <p className="text-gray-800 text-xs xs:text-sm sm:text-base md:text-base lg:text-lg my-3 xs:my-4 sm:my-6 font-medium lg:font-semibold">
          Drop your valuable feedback below:
        </p>

        <div className="space-y-4 xs:space-y-5 sm:space-y-6 lg:space-y-7">
          <div className="relative">
            <textarea
              placeholder="Please describe your idea or suggestion clearly..."
              className="w-full p-4 xs:p-5 sm:p-6 md:p-7 lg:p-8 border-2 border-gray-200 hover:border-gray-300 focus:border-blue-500 rounded-lg sm:rounded-xl lg:rounded-2xl resize-none h-24 xs:h-28 sm:h-32 md:h-36 lg:h-40 text-sm xs:text-base sm:text-lg md:text-xl transition-all duration-300 focus:outline-none focus:ring-4 focus:ring-blue-100 placeholder-gray-400 bg-gray-50 focus:bg-white"
            />
          </div>

          <div className="flex justify-center sm:justify-start">
            <button
              className="w-full xs:w-full sm:w-[35%] md:w-[35%] lg:w-[35%] xl:w-[30%] 2xl:w-[35%] min-w-[140px] xs:min-w-[160px] sm:min-w-[180px] lg:min-w-[200px] px-4 xs:px-6 sm:px-8 md:px-10 lg:px-12 xl:px-12 py-2.5 xs:py-3 sm:py-3.5 md:py-4 lg:py-4 rounded-full text-white text-xs xs:text-sm sm:text-sm md:text-base lg:text-lg font-semibold hover:opacity-90 hover:scale-105 active:scale-95 transition-all duration-200 shadow-lg hover:shadow-xl"
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
