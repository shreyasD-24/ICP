import React, { useState } from "react";
import { FaChevronRight } from "react-icons/fa";

const faqs = [
  {
    question: "How do I become a part of Organised's freelance network?",
    answer:
      "Joining our network starts with an application. We meticulously review your expertise, portfolio, and professional background.",
  },
  {
    question: "What does the vetting process involve?",
    answer:
      "Our vetting process includes background checks, skill validation, and reference reviews to maintain the highest quality.",
  },
  {
    question:
      "Are there opportunities for professional growth within Organised?",
    answer:
      "Yes! We offer training resources, mentorship, and challenging projects to help freelancers grow.",
  },
  {
    question: "How are projects matched with freelancers?",
    answer:
      "Our platform uses intelligent matching algorithms based on skills, experience, and client requirements.",
  },
  {
    question: "What kind of support does Organised offer to its freelancers?",
    answer:
      "We provide ongoing support with project management, payment assistance, and client communications.",
  },
];

export default function FAQSection() {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <section className="px-6 py-12 pt-6 md:px-16 lg:px-28 bg-white">
      <h2 className="text-xl xs:text-2xl sm:text-3xl lg:text-4xl xl:text-3xl 2xl:text-5xl font-semibold text-center mb-10">
        Frequently Asked Questions for Freelancers
      </h2>

      <div className="flex flex-col lg:flex-row gap-6 lg:gap-10 items-start justify-center">
        {/* Left Side - Questions */}
        <div className="bg-white rounded-2xl shadow-lg border border-gray-100 w-full lg:w-1/2">
          <div className="flex flex-col divide-y divide-gray-100">
            {faqs.map((faq, index) => (
              <button
                key={index}
                onClick={() => setActiveIndex(index)}
                className={`flex items-center justify-between px-6 py-5 text-left transition-all duration-300 hover:bg-gray-50 ${
                  activeIndex === index
                    ? " bg-purple-50 border-r-4 border-purple-500"
                    : "text-gray-700 hover:text-gray-900"
                }`}
              >
                <span className="text-sm xs:text-base lg:text-xl xl:text-lg 2xl:text-2xl leading-relaxed pr-4">
                  {faq.question}
                </span>
                <FaChevronRight
                  className={`text-gray-400 w-3 h-3 transition-all duration-300 flex-shrink-0 ${
                    activeIndex === index ? "rotate-90 text-purple-600" : ""
                  }`}
                />
              </button>
            ))}
          </div>
        </div>

        {/* Right Side - Answer Card */}
        <div className="relative w-full lg:w-1/2">
          <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-purple-500 via-pink-500 via-red-500 via-orange-500 via-yellow-400 via-green-400 via-blue-500 to-indigo-500 animate-pulse"></div>
          <div className="bg-white rounded-2xl shadow-2xl p-6 md:p-8 relative z-10 min-h-[240px] flex flex-col justify-center transition-all duration-500 m-1">
            <div className="flex items-start gap-3 mb-4">
              <div className="w-2 h-2 rounded-full bg-gradient-to-r from-purple-500 to-pink-500 mt-3 flex-shrink-0"></div>
              <h3 className="text-sm xs:text-base lg:text-xl xl:text-lg 2xl:text-2xl font-semibold text-gray-800 leading-snug">
                {faqs[activeIndex].question}
              </h3>
            </div>
            <p className="text-sm xs:text-base lg:text-xl xl:text-lg 2xl:text-2xl leading-relaxed ml-5">
              {faqs[activeIndex].answer}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
