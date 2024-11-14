import React from "react";
import Image from "next/image";

export default function CreatePlanBanner() {
  return (
    <div className="relative w-full h-[400px] lg:h-[600px] flex items-center justify-center">
      {/* Imagen de fondo */}
      <Image
        src="/images/packs.webp" // Asegúrate de que la ruta sea correcta
        alt="Packs de comida"
        layout="fill"
        objectFit="cover"
        quality={100}
        className="z-[-1]"
      />

      {/* Contenido de la tarjeta centrada y más grande en desktop */}
      <div className="bg-white bg-opacity-90 rounded-lg shadow-lg text-center p-4 lg:p-8 max-w-sm lg:max-w-md mx-auto space-y-3 lg:space-y-4" style={{ fontFamily: "Poppins, sans-serif", color: "#173B33" }}>
        <h2 className="text-xl lg:text-2xl font-bold">
          ¡Descubre el plan recomendado para tu perro!
        </h2>
        <p className="text-sm lg:text-base">
          Obtén comida saludable y conveniente entregada con nuestros planes de comida personalizados.
        </p>
        <button className="px-4 py-2 lg:px-6 lg:py-3 text-sm lg:text-base font-bold text-white bg-[#F2674B] rounded-lg hover:bg-opacity-90">
          Crear tu Plan
        </button>
      </div>
    </div>
  );
}