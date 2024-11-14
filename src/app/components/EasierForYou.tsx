import React from "react";
import Image from "next/image";

export default function EasierForYou() {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 p-8 text-[#173B33]">
      {/* Columna de Texto */}
      <div>
        {/* Título con Poppins */}
        <h2 className="text-3xl font-bold mb-4" style={{ fontFamily: "Poppins, sans-serif" }}>
          Mejor para ellos.
          <br />
          Más fácil para ti.
        </h2>

        {/* Descripción sin Poppins */}
        <p className="text-lg mb-6">
          Evita las tiendas, los conservantes y los márgenes de ganancia minoristas. Nuestros planes desarrollados por veterinarios te guían hacia la mejor dieta, mientras que las entregas congeladas a tiempo aseguran que nunca te quedes sin alimento.
        </p>

        {/* Características del Plan con Poppins */}
        <div style={{ fontFamily: "Poppins, sans-serif" }}>
          <h3 className="text-xl font-bold mb-2">Características del Plan</h3>
          <div className="border-b-4 border-[#F2674B] w-20 mb-4"></div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-lg font-semibold">
            <p>Entregas Flexibles y Gratuitas</p>
            <p>Envío Nacional</p>
            <p>Embalaje Ecológico</p>
            <p>Servicio al Cliente 24 Horas</p>
          </div>
        </div>
      </div>

      {/* Columna de Imagen */}
      <div className="flex justify-center items-center">
        <Image
          src="/images/dogs.webp"
          alt="Imagen de perros"
          width={500}
          height={500}
          className=""
        />
      </div>
    </div>
  );
}