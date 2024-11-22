"use client";
import React, { useEffect, useState, useRef } from "react";

const Plate: React.FC = () => {
  const [scrollProgress, setScrollProgress] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (containerRef.current) {
        const rect = containerRef.current.getBoundingClientRect();
        const viewportHeight = window.innerHeight;

        // Definir el rango de activación
        const startActivation = viewportHeight * 0.05; // Ajusta el inicio
        const endActivation = viewportHeight * 0.4; // Ajusta el final

        // Calcular el progreso solo dentro del rango
        if (rect.top < endActivation && rect.bottom > startActivation) {
          const progress = Math.min(
            1,
            Math.max(0, (endActivation - rect.top) / (endActivation - startActivation))
          );
          setScrollProgress(progress);
        } else if (rect.top >= endActivation) {
          setScrollProgress(0); // Antes de entrar al rango
        } else if (rect.bottom <= startActivation) {
          setScrollProgress(1); // Después de salir del rango
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div
      ref={containerRef}
      className="relative w-full h-screen bg-white flex items-center justify-center overflow-hidden"
    >
      {/* Imagen Plate 2 */}
      <img
        src="images/plate2.webp"
        alt="Plate 2"
        className="absolute w-auto h-auto scale-50"
      />

      {/* Imagen Plate 1 (tapa Plate 2) */}
      <img
        src="images/plate1.webp"
        alt="Plate 1"
        className="absolute w-auto h-auto scale-50"
        style={{
          clipPath: `polygon(0 0, ${100 - scrollProgress * 100}% 0, ${100 - scrollProgress * 100}% 100%, 0 100%)`,
          transition: "clip-path 0.9s linear", // Transición suave
        }}
      />
    </div>
  );
};

export default Plate;