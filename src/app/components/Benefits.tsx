import Image from "next/image";
import React from "react";

export default function Benefits() {
  return (
    <div className="lg:hidden flex flex-col items-center space-y-12 pb-10 px-8">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-12 text-center">
        {/* Comida Real */}
        <div className="flex flex-col items-center">
          <Image src="/images/fresh.webp" alt="Comida Real" width={50} height={50} className="mb-4" />
          <h3 className="text-2xl font-bold text-[#173B33] mb-4" style={{ fontFamily: "Poppins, sans-serif" }}>
            Comida Real
          </h3>
          <p className="mt-2">
            Carne y verduras de calidad humana en recetas simples, hechas para perros.
          </p>
        </div>

        {/* Calidad Humana */}
        <div className="flex flex-col items-center">
          <Image src="/images/human.webp" alt="Calidad Humana" width={50} height={50} className="mb-4" />
          <h3 className="text-2xl font-bold text-[#173B33] mb-4" style={{ fontFamily: "Poppins, sans-serif" }}>
            Calidad Humana
          </h3>
          <p className="mt-2">
            Seguridad y calidad nunca antes disponibles para mascotas.
          </p>
        </div>

        {/* Fresco */}
        <div className="flex flex-col items-center">
          <Image src="/images/fresh.webp" alt="Fresco" width={50} height={50} className="mb-4" />
          <h3 className="text-2xl font-bold text-[#173B33] mb-4" style={{ fontFamily: "Poppins, sans-serif" }}>
            Fresco
          </h3>
          <p className="mt-2">
            Mantiene la integridad nutricional de los alimentos.
          </p>
        </div>

        {/* Desarrollado por Veterinarios */}
        <div className="flex flex-col items-center">
          <Image src="/images/vet.webp" alt="Desarrollado por Veterinarios" width={50} height={50} className="mb-4" />
          <h3 className="text-2xl font-bold text-[#173B33] mb-4" style={{ fontFamily: "Poppins, sans-serif" }}>
            Desarrollado por Veterinarios
          </h3>
          <p className="mt-2">
            Nutrición que supera los estándares de la industria (AAFCO).
          </p>
        </div>
      </div>

      {/* Botón para construir el plan personalizado */}
      <button
        className="px-6 py-3 mt-8 text-lg font-bold text-white bg-[#F2674B] rounded-lg hover:bg-opacity-90"
        style={{ fontFamily: "Poppins, sans-serif" }}
      >
        Construir Plan Personalizado
      </button>
    </div>
  );
}