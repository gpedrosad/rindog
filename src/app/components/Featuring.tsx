
"use client";

import { useState } from "react";

type Slide = {
  id: number;
  content: string;
  image: string; // Ruta del logo (imagen)
};

const slides: Slide[] = [
  {
    id: 1,
    content: "La solución ideal para alimentar a tu mascota con comida saludable y deliciosa.",
    image: "/images/cbs.webp",
  },
  {
    id: 2,
    content: "Un enfoque rápido y eficiente para cuidar la nutrición de tus perros.",
    image: "/images/fast.webp",
  },
  {
    id: 3,
    content: "Transforma la forma en que alimentas a tus mascotas con ingredientes reales.",
    image: "/images/today.webp",
  },
  {
    id: 4,
    content: "La manera más elegante de garantizar el bienestar de tu perro.",
    image: "/images/vogue.webp",
  },
];

const Featuring = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [direction, setDirection] = useState<"left" | "right">("right");

  const nextSlide = () => {
    setDirection("right");
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setDirection("left");
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  const goToSlide = (index: number) => {
    setDirection(index > currentSlide ? "right" : "left");
    setCurrentSlide(index);
  };

  return (
    <div className="relative w-full mx-auto h-[400px] bg-gray-50 rounded-lg shadow-lg overflow-hidden">
      {/* Slides con transición */}
      <div
        className={`flex transition-transform duration-500 ease-in-out`}
        style={{
          transform: `translateX(-${currentSlide * 100}%)`,
        }}
      >
        {slides.map((slide) => (
          <div
            key={slide.id}
            className="w-full h-full flex-shrink-0 flex flex-col items-center justify-center"
          >
            <img
              src={slide.image}
              alt={slide.content}
              className="w-40 h-40 object-contain pt-10"
            />
            <p className="text-gray-600 italic text-lg max-w-xl mx-auto text-center mt-4">
              {slide.content}
            </p>
          </div>
        ))}
      </div>
            {/* Botones de navegación */}
            <button
        onClick={prevSlide}
        className="absolute top-1/2 left-4 transform -translate-y-1/2 text-gray-600 hover:text-gray-800 text-3xl p-3"
      >
        &#8249;
      </button>
      <button
        onClick={nextSlide}
        className="absolute top-1/2 right-4 transform -translate-y-1/2 text-gray-600 hover:text-gray-800 text-3xl p-3"
      >
        &#8250;
      </button>

      {/* Indicadores */}
      {/* Indicadores */}
<div className="absolute bottom-4 left-0 right-0 flex justify-center space-x-2">
  {slides.map((_, index) => (
    <button
      key={index}
      className={`w-3 h-3 rounded-full ${
        currentSlide === index ? "bg-gray-800" : "bg-gray-300"
      }`}
      onClick={() => goToSlide(index)}
    ></button>
  ))}
</div>
    </div>
  );
};

export default Featuring;

