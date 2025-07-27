import React from "react";

const steps = [
  {
    title: "Discover",
    description: "Browse our network of vetted professionals",
    img: "/section3Img/1.png",
  },
  {
    title: "Connect",
    description: "Choose your ideal freelancer with confidence",
    img: "/section3Img/2.png",
  },
  {
    title: "Collaborate",
    description: "Work together with ease and transparency",
    img: "/section3Img/3.png",
  },
  {
    title: "Succeed",
    description: "Achieve outstanding results and elevate your business",
    img: "/section3Img/4.png",
  },
];

export default function OrganisedProcess() {
  return (
    <section className="px-6 py-10 md:px-16 lg:px-28 bg-white text-center">
      <h2 className="text-2xl md:text-3xl font-semibold mb-2">
        The Organaised Process: Simplified for Success
      </h2>
      <p className="text-gray-600 max-w-3xl mx-auto mb-10 text-md md:text-lg">
        Engaging with Organaised is a journey towards efficiency and excellence. Our intuitive platform guides you through selecting the perfect expert for your project needs, ensuring a match that not only meets but exceeds expectations. Here's how you can start reshaping your business landscape:
      </p>

      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
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
              <h3 className="font-semibold text-xl mb-1">{step.title}</h3>
              <p className="text-md text-gray-600">{step.description}</p>
            </div>

            {/* Gradient bottom bar on hover */}
            <div className="absolute bottom-0 left-0 right-0 h-[8px] bg-gradient-to-r from-purple-500 via-pink-500 to-orange-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
          </div>
        ))}
      </div>
    </section>
  );
}
