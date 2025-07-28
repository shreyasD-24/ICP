import { useState } from "react";

// Card Image Carousel Component
const CardImageCarousel = ({ images = [], title }) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const nextImage = () => {
    setCurrentImageIndex((prev) => (prev + 1) % images.length);
  };

  const prevImage = () => {
    setCurrentImageIndex((prev) => (prev - 1 + images.length) % images.length);
  };

  if (!images || images.length === 0) {
    return (
      <div className="w-full h-40 sm:h-44 lg:h-48 xl:h-52 bg-gray-200 rounded-lg flex items-center justify-center">
        <span className="text-gray-400 text-sm">No images</span>
      </div>
    );
  }

  if (images.length === 1) {
    return (
      <img
        src={images[0]}
        alt={title || "Card image"}
        className="w-full h-40 sm:h-44 lg:h-48 xl:h-52 object-cover rounded-lg"
      />
    );
  }

  return (
    <div className="relative w-full h-40 sm:h-44 lg:h-48 xl:h-52 rounded-lg overflow-hidden">
      <img
        src={images[currentImageIndex]}
        alt={`${title || "Card"} - Image ${currentImageIndex + 1}`}
        className="w-full h-full object-cover transition-opacity duration-300"
      />

      <button
        onClick={prevImage}
        className="absolute left-1 top-1/2 transform -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white p-1 rounded-full transition-all duration-200"
      >
        <svg
          className="w-3 h-3"
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
        onClick={nextImage}
        className="absolute right-1 top-1/2 transform -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white p-1 rounded-full transition-all duration-200"
      >
        <svg
          className="w-3 h-3"
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

      <div className="absolute bottom-1 left-1/2 transform -translate-x-1/2 flex space-x-1">
        {images.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentImageIndex(index)}
            className={`w-1.5 h-1.5 rounded-full transition-all duration-200 ${
              index === currentImageIndex ? "bg-white" : "bg-white/50"
            }`}
          />
        ))}
      </div>
    </div>
  );
};

// Simple Button Carousel Component
const ButtonCarousel = ({ cards = [] }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Responsive cards per view
  const getCardsPerView = () => {
    if (typeof window !== "undefined") {
      const width = window.innerWidth;
      if (width < 640) return 1; // Mobile
      if (width < 768) return 2; // Small tablet
      if (width < 1024) return 3; // Tablet
      if (width < 1600) return 4; // Normal desktop (up to ~24 inches)
      return 5; // Large screens (25+ inches)
    }
    return 4;
  };

  const [cardsPerView, setCardsPerView] = useState(getCardsPerView());

  // Update cards per view on window resize
  useState(() => {
    const handleResize = () => setCardsPerView(getCardsPerView());
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const maxIndex = Math.max(0, cards.length - cardsPerView);

  const nextSlide = () => {
    setCurrentIndex((prev) => Math.min(prev + 1, maxIndex));
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => Math.max(prev - 1, 0));
  };

  if (!cards || cards.length === 0) {
    return <div className="text-center p-8">No cards to display</div>;
  }

  return (
    <div className="relative w-full">
      {/* Cards Container */}
      <div className="overflow-hidden">
        <div
          className="flex transition-transform duration-300 ease-in-out"
          style={{
            transform: `translateX(-${currentIndex * (100 / cardsPerView)}%)`,
          }}
        >
          {cards.map((card, index) => (
            <div
              key={index}
              className="flex-shrink-0 px-0.5 sm:px-1"
              style={{ width: `${100 / cardsPerView}%` }}
            >
              <div className="bg-white rounded-xl p-3 sm:p-4 shadow-lg hover:shadow-xl transition-shadow duration-300 border border-gray-100 flex flex-col max-w-xs mx-auto h-auto min-h-[420px] sm:min-h-[450px] lg:min-h-[480px] xl:min-h-[500px]">
                {/* Card image carousel */}
                <div className="mb-4">
                  <CardImageCarousel
                    images={card.images}
                    title={card.developerName}
                  />
                </div>

                {/* Developer profile section */}
                <div className="flex items-center justify-between mb-2">
                  <div className="flex items-center flex-1 min-w-0">
                    <img
                      src={card.profilePic}
                      alt={card.developerName}
                      className="w-7 h-7 sm:w-8 sm:h-8 rounded-full object-cover mr-2 flex-shrink-0"
                    />
                    <h3 className="text-sm sm:text-base font-semibold text-gray-900 truncate">
                      {card.developerName}
                    </h3>
                  </div>
                  <a
                    href={card.workLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="ml-2 px-2 py-1 text-xs font-medium text-orange-500 border border-orange-500 rounded-full hover:bg-orange-50 transition-colors duration-200 flex-shrink-0"
                  >
                    View →
                  </a>
                </div>

                {/* Work description */}
                <p className="text-gray-600 text-sm leading-relaxed mb-3 line-clamp-3 flex-1">
                  {card.description}
                </p>

                {/* Rating and price section */}
                <div className="flex items-center justify-between mt-auto pt-2 border-t border-gray-100">
                  <div className="flex items-center">
                    <span className="text-sm font-semibold text-gray-900 mr-1">
                      {card.rating}
                    </span>
                    <svg
                      className="w-3 h-3 text-yellow-400 mr-1"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                    <span className="text-xs text-gray-500">
                      ({card.reviewCount})
                    </span>
                  </div>
                  <div className="text-right">
                    <span className="text-base font-bold text-gray-900">
                      USD ${card.price}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Navigation Buttons */}
      {cards.length > cardsPerView && (
        <>
          <button
            onClick={prevSlide}
            disabled={currentIndex === 0}
            className="absolute left-0 top-1/2 transform -translate-y-1/2 -translate-x-2 bg-white shadow-lg rounded-full p-2 sm:p-3 disabled:opacity-50 disabled:cursor-not-allowed hover:shadow-xl transition-all duration-200 z-10"
          >
            <svg
              className="w-4 h-4 sm:w-5 sm:h-5 text-gray-600"
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
            onClick={nextSlide}
            disabled={currentIndex === maxIndex}
            className="absolute right-0 top-1/2 transform -translate-y-1/2 translate-x-2 bg-white shadow-lg rounded-full p-2 sm:p-3 disabled:opacity-50 disabled:cursor-not-allowed hover:shadow-xl transition-all duration-200 z-10"
          >
            <svg
              className="w-4 h-4 sm:w-5 sm:h-5 text-gray-600"
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
        </>
      )}

      {/* Dots Indicator */}
      {cards.length > cardsPerView && (
        <div className="flex justify-center mt-6 space-x-2">
          {Array.from({ length: maxIndex + 1 }).map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`w-2 h-2 rounded-full transition-all duration-200 ${
                index === currentIndex ? "bg-gray-800" : "bg-gray-300"
              }`}
            />
          ))}
        </div>
      )}
    </div>
  );
};

function Sect4() {
  const carouselCards = [
    {
      developerName: "Kenneth Allen",
      profilePic:
        "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop&crop=face",
      description:
        "I will design and develop a responsive website with modern UI/UX principles and clean code architecture.",
      images: [
        "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=400&h=300&fit=crop",
        "https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=400&h=300&fit=crop",
        "https://images.unsplash.com/photo-1571171637578-41bc2dd41cd2?w=400&h=300&fit=crop",
      ],
      workLink: "https://example.com/kenneth-portfolio",
      rating: 4.8,
      reviewCount: 120,
      price: 100,
    },
    {
      developerName: "Sarah Johnson",
      profilePic:
        "https://images.unsplash.com/photo-1494790108755-2616b612b0a4?w=100&h=100&fit=crop&crop=face",
      description:
        "I will create smart contracts and DeFi protocols with security audits and comprehensive testing.",
      images: [
        "https://images.unsplash.com/photo-1639762681485-074b7f938ba0?w=400&h=300&fit=crop",
        "https://images.unsplash.com/photo-1621761191319-c6fb62004040?w=400&h=300&fit=crop",
        "https://images.unsplash.com/photo-1642104704074-907c0698cbd9?w=400&h=300&fit=crop",
      ],
      workLink: "https://example.com/sarah-portfolio",
      rating: 4.9,
      reviewCount: 85,
      price: 250,
    },
    {
      developerName: "Marcus Chen",
      profilePic:
        "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&crop=face",
      description:
        "I will build AI agents and machine learning models with custom training and deployment solutions.",
      images: [
        "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=400&h=300&fit=crop",
        "https://images.unsplash.com/photo-1620712943543-bcc4688e7485?w=400&h=300&fit=crop",
        "https://images.unsplash.com/photo-1555255707-c07966088b7b?w=400&h=300&fit=crop",
      ],
      workLink: "https://example.com/marcus-portfolio",
      rating: 4.7,
      reviewCount: 95,
      price: 180,
    },
    {
      developerName: "Elena Rodriguez",
      profilePic:
        "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop&crop=face",
      description:
        "I will set up blockchain infrastructure and DevOps pipelines with monitoring and security best practices.",
      images: [
        "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=400&h=300&fit=crop",
        "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=400&h=300&fit=crop",
        "https://images.unsplash.com/photo-1544197150-b99a580bb7a8?w=400&h=300&fit=crop",
      ],
      workLink: "https://example.com/elena-portfolio",
      rating: 4.6,
      reviewCount: 67,
      price: 150,
    },
    {
      developerName: "Alex Thompson",
      profilePic:
        "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100&h=100&fit=crop&crop=face",
      description:
        "I will develop NFT marketplaces and gaming platforms with blockchain integration and tokenomics.",
      images: [
        "https://images.unsplash.com/photo-1552820728-8b83bb6b773f?w=400&h=300&fit=crop",
        "https://images.unsplash.com/photo-1579952363873-27d3bfad9c0d?w=400&h=300&fit=crop",
        "https://images.unsplash.com/photo-1606103819203-2377d57aa33a?w=400&h=300&fit=crop",
      ],
      workLink: "https://example.com/alex-portfolio",
      rating: 4.5,
      reviewCount: 142,
      price: 200,
    },
    {
      developerName: "Maya Patel",
      profilePic:
        "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=100&h=100&fit=crop&crop=face",
      description:
        "I will analyze blockchain data and create custom dashboards with real-time insights and predictions.",
      images: [
        "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=400&h=300&fit=crop",
        "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=400&h=300&fit=crop",
        "https://images.unsplash.com/photo-1504868584819-f8e8b4b6d7e3?w=400&h=300&fit=crop",
      ],
      workLink: "https://example.com/maya-portfolio",
      rating: 4.8,
      reviewCount: 73,
      price: 130,
    },
    {
      developerName: "David Kim",
      profilePic:
        "https://images.unsplash.com/photo-1492562080023-ab3db95bfbce?w=100&h=100&fit=crop&crop=face",
      description:
        "I will conduct security audits for smart contracts and dApps with comprehensive vulnerability assessments.",
      images: [
        "https://images.unsplash.com/photo-1555949963-aa79dcee981c?w=400&h=300&fit=crop",
        "https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=400&h=300&fit=crop",
        "https://images.unsplash.com/photo-1510915361894-db8b60106cb1?w=400&h=300&fit=crop",
      ],
      workLink: "https://example.com/david-portfolio",
      rating: 4.9,
      reviewCount: 156,
      price: 300,
    },
  ];

  return (
    <div className="px-4 sm:px-8 md:px-12 lg:px-16 xl:px-[8rem] 2xl:px-[10rem] 3xl:px-[12rem] 4xl:px-[15rem] py-8 sm:py-12 lg:py-16 xl:py-20">
      <div>
        <div className="mb-6 sm:mb-8 lg:mb-10">
          <h2 className="text-xl sm:text-2xl lg:text-3xl xl:text-4xl 2xl:text-5xl 3xl:text-6xl 4xl:text-7xl font-bold text-gray-800 mb-4">
            Explore our Freelancers Services
          </h2>
        </div>
        <ButtonCarousel cards={carouselCards} />
      </div>
    </div>
  );
}

export default Sect4;
