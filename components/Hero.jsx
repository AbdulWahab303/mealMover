import React, { useEffect, useState } from 'react';

const HeroSection = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  // Array of image URLs (replace these placeholders with your image links)
  const images = [
    '/hero1.png',
    '/hero1.png',
    '/hero1.png',
    '/hero1.png',
  ];

  // Auto-slide logic
  useEffect(() => {
    const slideInterval = setInterval(() => {
      setCurrentSlide((prevSlide) => (prevSlide + 1) % images.length);
    }, 7000); // Change every 7 seconds

    return () => clearInterval(slideInterval);
  }, [images.length]);

  return (
    <div className="border-2 border-yellow-300 bg-auto bg-no-repeat bg-center bg-yellow-50 relative h-[400px] sm:h-[500px] overflow-hidden">
      {/* Slide container */}
      <div
        className="flex transition-transform duration-700 ease-in-out"
        style={{
          transform: `translateX(-${currentSlide * 100}%)`,
          width: `${images.length * 100}%`,
        }}
      >
        {images.map((image, index) => (
          <div
            key={index}
            className="w-full h-full justify-center flex-shrink-0"
          >
            <img
              src={image}
              alt={`Slide ${index + 1}`}
              className="w-1/6 h-auto object-cover mx-60"
            />
          </div>
        ))}
      </div>

      {/* Slide indicators */}
      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
        {images.map((_, index) => (
          <button
            key={index}
            className={`w-3 h-3 rounded-full ${
              currentSlide === index
                ? 'bg-yellow-500'
                : 'bg-gray-300 hover:bg-gray-500'
            }`}
            onClick={() => setCurrentSlide(index)}
            aria-label={`Go to slide ${index + 1}`}
          ></button>
        ))}
      </div>
    </div>
  );
};

export default HeroSection;
