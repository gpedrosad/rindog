"use client";

import React from "react";

const TitleSection: React.FC = () => {
  return (
    <div className="bg-white mt-20 py-8 text-[#173B33] min-h-[200px] px-8 lg:px-16 flex flex-col items-center justify-center">
      {/* Título */}
      <h2 className="text-4xl font-bold mb-4 text-center" style={{ fontFamily: "Poppins, sans-serif" }}>
        No deberías ser el único comiendo saludable.
      </h2>

      {/* Subtítulo */}
      <p className="text-lg text-gray-600 mb-8 text-center" style={{ fontFamily: "Roboto, sans-serif" }}>
        Al igual que tú, amamos a nuestras mascotas y nos preocupamos por su salud. Por eso creamos
        RinDog: un servicio que entrega comida balanceada, hecha con recetas simples,
        guiadas por la ciencia y motivadas por el amor.
      </p>
    </div>
  );
};

export default TitleSection;