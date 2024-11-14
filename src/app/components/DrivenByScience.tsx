// src/app/components/DrivenByScience.tsx

import { FaCheck } from "react-icons/fa";
import Image from "next/image";
import React from "react";

export default function DrivenByScience() {
  return (
    <div className="flex flex-col items-start bg-[#FFF3E1] p-8 text-[#173B33] lg:grid lg:grid-cols-2 lg:gap-8 lg:items-start">
      {/* Columna de imagen para Desktop */}
      <div className="hidden lg:flex justify-center items-center">
      <Image
            src="/images/driven.jpeg"
            alt="Imagen de ciencia en nutrición para mascotas"
            width={300} // Cambia a un tamaño fijo, ajusta según sea necesario
            height={300} // Cambia a un tamaño fijo, ajusta según sea necesario
            className="w-3/4 h-auto object-contain" // Asegura que la imagen mantenga su proporción
        />
      </div>

      {/* Columna de contenido */}
      <div className="space-y-4">
        {/* Título */}
        <h2
          className="text-3xl font-extrabold mb-4"
          style={{ fontFamily: "Poppins, sans-serif" }}
        >
          Impulsado por la ciencia.
        </h2>

        {/* Subtítulo */}
        <p className="text-lg max-w-lg mb-6">
          Combinamos décadas de investigación en nutrición canina con los
          conocimientos clínicos de profesionales veterinarios experimentados.
        </p>

        {/* Lista de puntos */}
        <ul className="space-y-4">
          <li className="flex items-center space-x-2">
            <FaCheck className="text-[#173B33] flex-shrink-0" size={18} />
            <span className="font-semibold">
              Nutricionistas certificados en el personal
            </span>
          </li>
          <li className="flex items-center space-x-2">
            <FaCheck className="text-[#173B33] flex-shrink-0" size={18} />
            <span className="font-semibold">Veterinarios en el personal</span>
          </li>
          <li className="flex items-center space-x-2">
            <FaCheck className="text-[#173B33] flex-shrink-0" size={18} />
            <span className="font-semibold">AAFCO Completo y Balanceado</span>
          </li>
          <li className="flex items-center space-x-2">
            <FaCheck className="text-[#173B33] flex-shrink-0" size={18} />
            <span className="font-semibold">
              Nutrición clínicamente comprobada
            </span>
          </li>
        </ul>

        {/* Enlace */}
        <p className="mt-6 text-sm">
          ¿Eres un profesional veterinario?{" "}
          <a
            href="#"
            className="underline text-[#D9534F] font-semibold hover:text-[#A8443D]"
          >
            Explora nuestro Portal de Equipo Veterinario.
          </a>
        </p>
      </div>
    </div>
  );
}