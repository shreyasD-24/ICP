import React, { useState, useEffect } from "react";

const Sect8 = () => {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  const testimonials = [
    {
      id: 1,
      name: "Darren Dunlap",
      position: "CEO & Founder at Flex.co",
      profilePic:
        "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop&crop=face",
      quote:
        "The best solution for anyone who wants to work a flexible schedule but still earn a full-time income.",
    },
    {
      id: 2,
      name: "Sarah Mitchell",
      position: "Lead Developer at TechCorp",
      profilePic:
        "https://images.unsplash.com/photo-1494790108755-2616b612b0a4?w=100&h=100&fit=crop&crop=face",
      quote:
        "ICPWork has revolutionized how I manage my freelance projects. The on-chain payments are seamless and transparent.",
    },
    {
      id: 3,
      name: "Alex Johnson",
      position: "Product Manager at StartupXYZ",
      profilePic:
        "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&crop=face",
      quote:
        "Finally, a platform that puts freelancers first. The decentralized approach gives me complete control over my work.",
    },
    {
      id: 4,
      name: "Emily Chen",
      position: "UX Designer at Creative Agency",
      profilePic:
        "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop&crop=face",
      quote:
        "The community-driven features and censorship resistance make this the future of freelancing platforms.",
    },
  ];

  // Auto-scroll functionality
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
    }, 2500); // Change every 5 seconds

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
    <div className="px-[16rem] mb-[8rem]">
      <div className="bg-gray-100 rounded-2xl p-[4rem] text-center">
        <h2 className="text-4xl font-bold mb-4">
          Why Freelancers Love ICPWork ?
        </h2>
        <p className="text-gray-700 mb-12">
          At ICPWork, we're redefining the future of freelancing — fully
          on-chain, censorship-resistant, and community-led. Our users aren't
          just freelancers or clients; they're Web3 pioneers shaping how work
          gets done in a decentralized world. Here's what they're saying:
        </p>

        {/* Testimonial Carousel */}
        <div className="rounded-xl p-8 mx-auto">
          <div className="flex items-center justify-between">
            {/* Left Navigation Arrow */}
            <button
              onClick={prevTestimonial}
              className="p-2 rounded-full hover:bg-gray-100 transition-colors duration-200 flex-shrink-0"
            >
              <svg
                className="w-6 h-6 text-gray-600"
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
            <div className="flex items-center space-x-20 flex-1 mx-8">
              {/* Profile Section - Left */}
              <div className="flex items-center space-x-4 flex-shrink-0">
                <img
                  src={current.profilePic}
                  alt={current.name}
                  className="w-16 h-16 rounded-full object-cover"
                />
                <div className="text-left">
                  <h3 className="font-semibold text-lg text-gray-900">
                    {current.name}
                  </h3>
                  <p className="text-gray-600 text-sm">{current.position}</p>
                </div>
              </div>

              {/* Quote Section - Right */}
              <div className="flex-1 text-left font-semibold mr-25">
                <p className="text-gray-800 text-lg leading-relaxed">
                  "{current.quote}"
                </p>
              </div>
            </div>

            {/* Right Navigation Arrow */}
            <button
              onClick={nextTestimonial}
              className="p-2 rounded-full hover:bg-gray-100 transition-colors duration-200 flex-shrink-0"
            >
              <svg
                className="w-6 h-6 text-gray-600"
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
          <div className="flex justify-center mt-6 space-x-2">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentTestimonial(index)}
                className={`w-3 h-3 rounded-full transition-colors duration-200 ${
                  index === currentTestimonial ? "bg-purple-600" : "bg-gray-300"
                }`}
              />
            ))}
          </div>
        </div>
      </div>

      {/* Feedback Section */}
      <div className="mx-auto mt-[12rem] max-w-[80%] bg-white rounded-xl shadow-[0_0_2rem_rgba(0,0,0,0.25)] p-[6rem] pb-[2rem">
        <h3 className="text-4xl font-bold text-gray-900 mb-4">
          Got Feedback for ICPWork?
        </h3>
        <p className="text-gray-600 text-sm mb-6">
          We’re building ICPWork with our community — and your input shapes
          every feature. Whether you’re a developer, freelancer, or curious
          explorer, we want to hear from you.
        </p>
        <p className="text-gray-800 text-md my-6">
          Drop your valuable feedback below:
        </p>

        <div className="space-y-4">
          <textarea
            placeholder="Please describe your idea or suggestion clearly."
            className="w-full p-4 border border-gray-300 rounded-lg resize-none h-24 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          />

          <button
            className="px-12 py-3 rounded-[30px] text-white font-medium hover:opacity-90 transition-opacity duration-200"
            style={{ backgroundColor: "#041D37" }}
          >
            Send Feedback
          </button>
        </div>
      </div>
    </div>
  );
};
export default Sect8;
