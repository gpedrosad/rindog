import Image from "next/image";
import React from "react";

export default function Hero() {
  return (
    <div className="relative w-full h-[600px]">
      {/* Imagen de fondo para mobile */}
      <div className="lg:hidden">
        <Image
          src="/images/hero.webp" // Imagen para mobile
          alt="Imagen de comida para perro"
          layout="fill"
          objectFit="cover"
          objectPosition="top"
          quality={100}
          className="z-[-1]"
        />
      </div>

      {/* Imagen de fondo para desktop */}
      <div className="hidden lg:block">
        <Image
          src="/images/hero2.webp" // Imagen para desktop
          alt="Imagen de comida para perro"
          layout="fill"
          objectFit="cover"
          objectPosition="top"
          quality={100}
          className="z-[-1]"
        />
      </div>

      {/* Contenido */}
      <div
        className="absolute bottom-0 left-1/2 transform -translate-x-1/2 mb-10 flex flex-col items-center text-white space-y-4 lg:top-1/2 lg:left-0 lg:-translate-x-0 lg:-translate-y-1/2 lg:pl-8 lg:items-start lg:text-left max-w-md lg:max-w-lg"
        style={{ fontFamily: "Poppins, sans-serif" }}
      >
        <h1 className="text-4xl lg:text-5xl font-bold leading-tight text-center lg:text-left">
          Apoyado por veterinarios.
          <br />
          Amado por dueños.
        </h1>
        <p className="text-lg text-center lg:text-left">
          Comida fresca formulada por nutricionistas certificados.
        </p>
        <button className="px-6 py-3 mt-4 text-lg font-bold text-white bg-[#F2674B] rounded-lg hover:bg-opacity-90">
          Comprar fresco
        </button>
      </div>
    </div>
  );
}