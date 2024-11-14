// src/app/components/PlanSteps.tsx
"use client";

import { useState } from "react";
import Image from "next/image";
import Confetti from "react-confetti";
import { useWindowSize } from "react-use";

export default function PlanSteps() {
  const [showConfetti, setShowConfetti] = useState(false);
  const { width, height } = useWindowSize();

  const handleButtonClick = () => {
    setShowConfetti(true);
    setTimeout(() => setShowConfetti(false), 3000); // El confetti se muestra por 3 segundos
  };

  return (
    <div className="flex flex-col items-center bg-white p-8 relative">
      {/* Confetti */}
      {showConfetti && <Confetti width={width} height={height} />}

      {/* Título principal con Poppins y font-semibold para un bold más suave */}
      <h2
        className="text-4xl font-semibold text-center mb-4"
        style={{ fontFamily: 'Poppins, sans-serif' }}
      >
        Cómo funciona tu plan
      </h2>
      
      {/* Imagen encima de los tres títulos */}
      <Image
  src="/images/progress.gif"
  alt="Progreso del plan"
  width={0} // Se ajustará automáticamente al tamaño de pantalla
  height={0} // La altura se ajustará automáticamente
  className="w-3/4 lg:w-1/2 mb-8"
/>

      {/* Contenedor de los pasos */}
      <div className="flex flex-col gap-12 text-black text-center sm:flex-row sm:justify-between">
        {/* Paso 1 */}
        <div className="flex flex-col items-center sm:items-center sm:w-1/3 max-w-xs mx-auto">
          <h3
            className="font-semibold text-xl mb-3 tracking-wider text-center"
            style={{ fontFamily: 'Poppins, sans-serif' }}
          >
            Construye tu plan
          </h3>
          <p className="max-w-xs text-lg leading-relaxed tracking-wide text-center">
            Simplemente cuéntanos un poco sobre tu perro, y crearemos un plan con porciones personalizadas para satisfacer sus necesidades únicas de nutrición y calorías.
          </p>
        </div>

        {/* Paso 2 */}
        <div className="flex flex-col items-center sm:items-center sm:w-1/3 max-w-xs mx-auto">
          <h3
            className="font-semibold text-xl mb-3 tracking-wider text-center"
            style={{ fontFamily: 'Poppins, sans-serif' }}
          >
            Pruébalo
          </h3>
          <p className="max-w-xs text-lg leading-relaxed tracking-wide text-center">
            Para comenzar, recibirás tu primera caja con hasta dos semanas de comida recién hecha, perfecta para que tu perro la pruebe.
          </p>
        </div>

        {/* Paso 3 */}
        <div className="flex flex-col items-center sm:items-center sm:w-1/3 max-w-xs mx-auto">
          <h3
            className="font-semibold text-xl mb-3 tracking-wider text-center"
            style={{ fontFamily: 'Poppins, sans-serif' }}
          >
            Enamórate
          </h3>
          <p className="max-w-xs text-lg leading-relaxed tracking-wide text-center">
            Si a ti y a tu perro les encanta –¡creemos que les gustará!–, estarás listo. Empezarás a recibir cajas de comida automáticamente cuando estés quedándote sin stock.
          </p>
        </div>
      </div>

      {/* Botón con un bold menos marcado */}
      <button
        className="mt-12 px-7 py-4 bg-[#F2674B] text-white text-xl rounded-xl shadow-md"
        style={{ fontFamily: 'Poppins, sans-serif' }}
        onClick={handleButtonClick}
      >
        Construir mi plan
      </button>
    </div>
  );
}