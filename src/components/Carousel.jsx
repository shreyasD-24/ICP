import { useState, useEffect, useRef } from "react";

// Optimized individual card image carousel component
const CardImageCarousel = ({ images = [], title }) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  if (!images || images.length === 0) {
    return (
      <div className="w-full h-48 bg-gray-200 rounded-lg flex items-center justify-center">
        <span className="text-gray-400 text-sm">No images</span>
      </div>
    );
  }

  if (images.length === 1) {
    return (
      <img
        src={images[0]}
        alt={title || "Card image"}
        className="w-full h-48 object-cover rounded-lg"
        loading="lazy"
      />
    );
  }

  return (
    <div className="relative w-full h-48 rounded-lg overflow-hidden group">
      <img
        src={images[currentImageIndex]}
        alt={`${title || "Card"} - Image ${currentImageIndex + 1}`}
        className="w-full h-full object-cover"
        loading="lazy"
      />

      {/* Navigation buttons - only show on hover */}
      <button
        onClick={() => setCurrentImageIndex((prev) => (prev - 1 + images.length) % images.length)}
        className="absolute left-2 top-1/2 -translate-y-1/2 bg-black/60 text-white w-6 h-6 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-200"
      >
        ‹
      </button>

      <button
        onClick={() => setCurrentImageIndex((prev) => (prev + 1) % images.length)}
        className="absolute right-2 top-1/2 -translate-y-1/2 bg-black/60 text-white w-6 h-6 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-200"
      >
        ›
      </button>

      {/* Dots */}
      <div className="absolute bottom-2 left-1/2 -translate-x-1/2 flex gap-1">
        {images.map((_, index) => (
          <div
            key={index}
            className={`w-2 h-2 rounded-full cursor-pointer ${
              index === currentImageIndex ? "bg-white" : "bg-white/50"
            }`}
            onClick={() => setCurrentImageIndex(index)}
          />
        ))}
      </div>
    </div>
  );
};

const Carousel = ({
  cards = [],
  autoSlide = false,
  slideInterval = 2000,
  cardsPerView = 3,
}) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const intervalRef = useRef();

  // Auto-slide (disabled by default to reduce lag)
  useEffect(() => {
    if (!autoSlide || cards.length === 0) return;

    intervalRef.current = setInterval(() => {
      if (!isTransitioning) {
        setCurrentIndex((prev) => (prev + 1) % cards.length);
      }
    }, slideInterval);

    return () => clearInterval(intervalRef.current);
  }, [autoSlide, slideInterval, cards.length, isTransitioning]);

  const nextSlide = () => {
    if (!isTransitioning) {
      setIsTransitioning(true);
      setCurrentIndex((prev) => (prev + 1) % cards.length);
      setTimeout(() => setIsTransitioning(false), 300);
    }
  };

  const prevSlide = () => {
    if (!isTransitioning) {
      setIsTransitioning(true);
      setCurrentIndex((prev) => (prev - 1 + cards.length) % cards.length);
      setTimeout(() => setIsTransitioning(false), 300);
    }
  };

  if (!cards || cards.length === 0) {
    return <div className="text-center p-8">No cards to display</div>;
  }

  return (
    <div className="relative w-full mx-auto overflow-hidden">
      {/* Navigation buttons */}
      <button
        onClick={prevSlide}
        className="absolute left-4 top-1/2 -translate-y-1/2 z-10 bg-white shadow-lg rounded-full w-10 h-10 flex items-center justify-center hover:bg-gray-50 transition-colors"
      >
        ‹
      </button>
      
      <button
        onClick={nextSlide}
        className="absolute right-4 top-1/2 -translate-y-1/2 z-10 bg-white shadow-lg rounded-full w-10 h-10 flex items-center justify-center hover:bg-gray-50 transition-colors"
      >
        ›
      </button>

      <div
        className="flex transition-transform duration-300 ease-out"
        style={{
          transform: `translateX(-${currentIndex * (100 / cardsPerView)}%)`,
        }}
      >
        {cards.map((card, index) => (
          <div
            key={index}
            className="flex-shrink-0 px-3"
            style={{ width: `${100 / cardsPerView}%` }}
          >
            <div className="bg-white rounded-xl p-4 shadow-lg hover:shadow-xl transition-shadow duration-200 h-96 border border-gray-100 flex flex-col">
              {/* Card image carousel */}
              <CardImageCarousel images={card.images} title={card.title} />

              {/* Developer profile */}
              <div className="flex items-center justify-between my-3">
                <div className="flex items-center flex-1 min-w-0">
                  <img
                    src={card.profilePic}
                    alt={card.developerName}
                    className="w-8 h-8 rounded-full object-cover mr-2"
                    loading="lazy"
                  />
                  <h3 className="text-sm font-semibold text-gray-900 truncate">
                    {card.developerName}
                  </h3>
                </div>
                <a
                  href={card.workLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="ml-2 px-2 py-1 text-xs font-medium text-orange-500 border border-orange-500 rounded-full hover:bg-orange-50 transition-colors"
                >
                  View →
                </a>
              </div>

              {/* Description */}
              <p className="text-gray-600 text-xs leading-relaxed mb-3 flex-1 line-clamp-3">
                {card.description}
              </p>

              {/* Rating and price */}
              <div className="flex items-center justify-between mt-auto">
                <div className="flex items-center">
                  <span className="text-sm font-semibold text-gray-900 mr-1">
                    {card.rating}
                  </span>
                  <span className="text-yellow-400 mr-1">★</span>
                  <span className="text-xs text-gray-500">
                    ({card.reviewCount})
                  </span>
                </div>
                <span className="text-sm font-bold text-gray-900">
                  USD ${card.price}
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Dots indicator */}
      <div className="flex justify-center mt-6 gap-2">
        {Array.from({ length: Math.ceil(cards.length / cardsPerView) }).map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={`w-2 h-2 rounded-full transition-colors ${
              Math.floor(currentIndex / cardsPerView) === index ? "bg-orange-500" : "bg-gray-300"
            }`}
          />
        ))}
      </div>
    </div>
  );
};

export default Carousel;