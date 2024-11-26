'use client';

import { useState, useEffect } from "react";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import InstagramPost from "./InstagramPost";
import ReviewCard from "./ReviewCard";

const Carousel = () => {
  const items = [
    <InstagramPost key="1" />,
    <ReviewCard key="2" />,
    <InstagramPost key="3" />,
    <ReviewCard key="4" />,
    <InstagramPost key="5" />,
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 640); // Tailwind breakpoint `sm`
    };

    handleResize(); // Check initial width
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const itemsPerView = isMobile ? 1 : 4;

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % items.length);
  };

  const handlePrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? items.length - 1 : prevIndex - 1
    );
  };

  return (
    <div className="relative w-full mx-auto bg-white overflow-hidden">
      {/* Carousel container */}
      <div className="overflow-hidden">
        <div
          className="flex transition-transform duration-500"
          style={{
            transform: `translateX(-${(currentIndex * 100) / itemsPerView}%)`,
          }}
        >
          {items
            .concat(items) // Duplicate items for infinite loop
            .map((item, index) => (
              <div
                key={index}
                className={`flex-shrink-0 ${
                  isMobile ? "w-full" : "w-1/4"
                } box-border`}
              >
                {item}
              </div>
            ))}
        </div>
      </div>

      {/* Navigation buttons */}
      <button
        onClick={handlePrev}
        className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-gray-800 text-white p-3 rounded-full bg-opacity-50 hover:bg-opacity-75 transition-opacity z-10"
        aria-label="Previous"
      >
        <FaArrowLeft size={20} />
      </button>
      <button
        onClick={handleNext}
        className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-gray-800 text-white p-3 rounded-full bg-opacity-50 hover:bg-opacity-75 transition-opacity z-10"
        aria-label="Next"
      >
        <FaArrowRight size={20} />
      </button>
    </div>
  );
};

export default Carousel;