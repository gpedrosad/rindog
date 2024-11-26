"use client";

import React, { useEffect, useState, useRef } from "react";
import Image from "next/image";

const Plate: React.FC = () => {
  const [scrollProgress, setScrollProgress] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (containerRef.current) {
        const rect = containerRef.current.getBoundingClientRect();
        const viewportHeight = window.innerHeight;

        const startActivation = viewportHeight * 0.05;
        const endActivation = viewportHeight * 0.4;

        if (rect.top < endActivation && rect.bottom > startActivation) {
          const progress = Math.min(
            1,
            Math.max(0, (endActivation - rect.top) / (endActivation - startActivation))
          );
          setScrollProgress(progress);
        } else if (rect.top >= endActivation) {
          setScrollProgress(0);
        } else if (rect.bottom <= startActivation) {
          setScrollProgress(1);
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div ref={containerRef} className="relative w-full h-screen bg-white flex items-center">
      {/* Beneficios a la izquierda (solo en desktop) */}
      <div className="hidden lg:flex flex-col items-end space-y-8 w-1/4 pr-6">
        <div className="flex flex-col items-end text-right px-6">
          <Image src="/images/fresh.webp" alt="Comida Real" width={50} height={50} className="mb-2" />
          <h3 className="text-xl font-bold text-[#173B33] mb-2" style={{ fontFamily: "Poppins, sans-serif" }}>
            Comida Real
          </h3>
          <p className="text-sm text-gray-600">
            Carne y verduras de calidad humana en recetas simples, hechas para perros.
          </p>
        </div>
        <div className="flex flex-col items-end text-right px-6">
          <Image src="/images/human.webp" alt="Calidad Humana" width={50} height={50} className="mb-2" />
          <h3 className="text-xl font-bold text-[#173B33] mb-2" style={{ fontFamily: "Poppins, sans-serif" }}>
            Calidad Humana
          </h3>
          <p className="text-sm text-gray-600">
            Seguridad y calidad nunca antes disponibles para mascotas.
          </p>
        </div>
      </div>

      {/* Imagen central */}
      <div className="relative w-full lg:w-1/2 h-full flex items-center justify-center overflow-hidden">
        <Image
          src="/images/plate2.webp"
          alt="Plate 2"
          width={400}
          height={400}
          className="absolute"
        />
        <Image
          src="/images/plate1.webp"
          alt="Plate 1"
          width={400}
          height={400}
          className="absolute"
          style={{
            clipPath: `polygon(0 0, ${100 - scrollProgress * 100}% 0, ${
              100 - scrollProgress * 100
            }% 100%, 0 100%)`,
            transition: "clip-path 0.9s linear",
          }}
        />
      </div>

      {/* Beneficios a la derecha (solo en desktop) */}
      <div className="hidden lg:flex flex-col items-start space-y-8 w-1/4 pl-6">
        <div className="flex flex-col items-start text-left px-6">
          <Image src="/images/fresh.webp" alt="Fresco" width={50} height={50} className="mb-2" />
          <h3 className="text-xl font-bold text-[#173B33] mb-2" style={{ fontFamily: "Poppins, sans-serif" }}>
            Fresco
          </h3>
          <p className="text-sm text-gray-600">
            Mantiene la integridad nutricional de los alimentos.
          </p>
        </div>
        <div className="flex flex-col items-start text-left px-6">
          <Image src="/images/vet.webp" alt="Desarrollado por Veterinarios" width={50} height={50} className="mb-2" />
          <h3 className="text-xl font-bold text-[#173B33] mb-2" style={{ fontFamily: "Poppins, sans-serif" }}>
            Desarrollado por Veterinarios
          </h3>
          <p className="text-sm text-gray-600">
            Nutrición que supera los estándares de la industria (AAFCO).
          </p>
        </div>
      </div>
    </div>
  );
};

export default Plate;