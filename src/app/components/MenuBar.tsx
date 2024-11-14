"use client"; // Esto indica que es un componente del lado del cliente

import { useState, useEffect } from "react";
import Image from "next/image";

export default function MenuBar() {
  const [showButton, setShowButton] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const heroElement = document.getElementById("hero");
      if (heroElement) {
        const heroBottom = heroElement.getBoundingClientRect().bottom;
        setShowButton(heroBottom < 0); // Mostrar el botón cuando Hero sale de la vista
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="sticky top-0 flex justify-between items-center w-full p-3 bg-white z-10">
      {/* Botón de menú */}
      <button className="text-[#173B33] focus:outline-none">
        <div className="space-y-1">
          <div className="w-6 h-0.5 bg-[#173B33]"></div>
          <div className="w-6 h-0.5 bg-[#173B33]"></div>
          <div className="w-6 h-0.5 bg-[#173B33]"></div>
        </div>
      </button>

      {/* Logo o botón de descuento */}
      <div className="flex-grow flex justify-center">
        {showButton ? (
          <button
            className="transition-opacity duration-500 ease-in-out px-6 py-2 bg-[#F2674B] text-white rounded-full font-bold"
            style={{ fontFamily: "Poppins, sans-serif" }}
          >
            Canjear 50% de descuento
          </button>
        ) : (
          <Image src="/images/logo.png" alt="Logo" width={60} height={60} />
        )}
      </div>

      {/* Botón de inicio de sesión */}
      <span className="text-[#173B33] font-semibold">Log in</span>
    </div>
  );
}