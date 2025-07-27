import { useState, useEffect, useRef } from "react";

// Individual card image carousel component
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
      />
    );
  }

  return (
    <div className="relative w-full h-[16rem] rounded-lg overflow-hidden">
      <img
        src={images[currentImageIndex]}
        alt={`${title || "Card"} - Image ${currentImageIndex + 1}`}
        className="w-full h-full object-cover transition-opacity duration-300"
      />

      {/* Image navigation buttons */}
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

      {/* Image dots indicator */}
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

const Carousel = ({
  cards = [],
  autoSlide = true,
  slideInterval = 3000,
  cardsPerView = 3,
}) => {
  const [translateX, setTranslateX] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  // Use refs to persist values across re-renders
  const animationRef = useRef();
  const startTimeRef = useRef();
  const elapsedTimeRef = useRef(0);

  // For infinite scroll, we need to create extended array
  const extendedCards = [...cards, ...cards, ...cards, ...cards]; // Quadruple for smoother infinite scroll

  // Calculate card width based on cards per view
  const cardWidth = 100 / cardsPerView;
  const totalWidth = cardWidth * cards.length; // Width of one complete set

  // Mouse event handlers
  const handleMouseEnter = () => {
    setIsPaused(true);
  };

  const handleMouseLeave = () => {
    setIsPaused(false);
  };

  // Continuous smooth animation
  useEffect(() => {
    if (cards.length === 0) return;

    const duration = slideInterval * cards.length; // Time to complete one full cycle
    let lastTime = performance.now();

    const animate = (currentTime) => {
      // Handle pausing - don't update elapsed time while paused
      if (!isPaused) {
        const deltaTime = currentTime - lastTime;
        elapsedTimeRef.current += deltaTime;
      }

      lastTime = currentTime;

      // Calculate progress (0 to 1) for one complete cycle
      const progress = (elapsedTimeRef.current % duration) / duration;

      // Move from 0% to totalWidth% smoothly
      const newTranslateX = progress * totalWidth;

      setTranslateX(newTranslateX);

      animationRef.current = requestAnimationFrame(animate);
    };

    animationRef.current = requestAnimationFrame(animate);

    return () => {
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  }, [cards.length, slideInterval, totalWidth, isPaused]);

  // Remove nextSlide function since we're handling it directly in useEffect

  // Touch/swipe handlers - remove since we want continuous auto-scroll
  if (!cards || cards.length === 0) {
    return <div className="text-center p-8">No cards to display</div>;
  }

  return (
    <div
      className="relative w-full mx-auto overflow-hidden"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      {/* Main carousel container */}
      <div
        className="flex"
        style={{
          transform: `translateX(-${translateX}%)`,
          transition: "none", // Remove CSS transitions for smooth animation
        }}
      >
        {extendedCards.map((card, index) => (
          <div
            key={`${index}-${card.title}`}
            className="flex-shrink-0 px-3 h-[28rem] my-10"
            style={{ width: `${cardWidth}%` }}
          >
            <div className="bg-white rounded-xl p-4 pt-2 shadow-lg hover:shadow-xl transition-shadow duration-300 h-full border border-gray-100 flex flex-col">
              {/* Card image carousel - portfolio work */}
              <div className="mb-3">
                <CardImageCarousel images={card.images} title={card.title} />
              </div>

              {/* Developer profile section with View button */}
              <div className="flex items-center justify-between mb-2">
                <div className="flex items-center flex-1 min-w-0">
                  <img
                    src={card.profilePic}
                    alt={card.developerName}
                    className="w-8 h-8 rounded-full object-cover mr-2 flex-shrink-0"
                  />
                  <h3 className="text-sm font-semibold text-gray-900 truncate">
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
              {card.description && (
                <p className="text-gray-600 text-xs leading-relaxed mb-2 line-clamp-2 flex-1">
                  {card.description}
                </p>
              )}

              {/* Rating and price section */}
              <div className="flex items-center justify-between mt-auto pt-1">
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
                  <span className="text-sm font-bold text-gray-900">
                    USD ${card.price}
                  </span>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Carousel;