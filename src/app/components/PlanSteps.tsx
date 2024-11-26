"use client";

import Image from "next/image";

export default function PlanSteps() {


  return (
    <div className="flex flex-col items-center bg-white p-8 relative mt-5">

      {/* Título principal */}
      <h2
        className="text-4xl font-semibold text-center mb-10 text-[#173B33]"
        style={{ fontFamily: "Poppins, sans-serif" }}
      >
        Cómo funciona tu plan
      </h2>

      {/* Contenedor principal */}
      <div className="grid grid-cols-6 gap-4 items-start sm:grid-cols-1 sm:gap-4">
        {/* Imagen para mobile y desktop */}
        <div className="col-span-1 sm:col-span-full sm:mb-4">
          {/* Imagen para mobile */}
          <Image
            src="/images/progress2.gif"
            alt="Progreso del plan en mobile"
            width={0}
            height={0}
            className="w-[150px] h-[500px] sm:hidden mx-auto"
          />
          {/* Imagen para desktop */}
          <Image
            src="/images/progress.gif"
            alt="Progreso del plan en desktop"
            width={0}
            height={0}
            className="hidden sm:block w-3/4 lg:w-1/2 mx-auto"
          />
        </div>

        {/* Contenido para mobile y desktop */}
        <div className="col-span-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:col-span-full mt-6">
          {/* Paso 1 */}
          <div className="mb-6 sm:mb-4 flex flex-col items-center text-center max-w-xs mx-auto">
            <h3
              className="font-semibold text-xl mb-2 tracking-wider"
              style={{ fontFamily: "Poppins, sans-serif" }}
            >
              Construye tu plan
            </h3>
            <p className="text-lg leading-relaxed tracking-wide">
              Simplemente cuéntanos un poco sobre tu perro, y crearemos un plan
              con porciones personalizadas para satisfacer sus necesidades únicas
              de nutrición y calorías.
            </p>
          </div>

          {/* Paso 2 */}
          <div className="mb-6 sm:mb-4 flex flex-col items-center text-center max-w-xs mx-auto">
            <h3
              className="font-semibold text-xl mb-2 tracking-wider"
              style={{ fontFamily: "Poppins, sans-serif" }}
            >
              Pruébalo
            </h3>
            <p className="text-lg leading-relaxed tracking-wide">
              Para comenzar, recibirás tu primera caja con hasta dos semanas de
              comida recién hecha, perfecta para que tu perro la pruebe.
            </p>
          </div>

          {/* Paso 3 */}
          <div className="mb-6 sm:mb-4 flex flex-col items-center text-center max-w-xs mx-auto">
            <h3
              className="font-semibold text-xl mb-2 tracking-wider"
              style={{ fontFamily: "Poppins, sans-serif" }}
            >
              Enamórate
            </h3>
            <p className="text-lg leading-relaxed tracking-wide">
              Si a ti y a tu perro les encanta –¡creemos que les gustará!–,
              estarás listo. Empezarás a recibir cajas de comida automáticamente
              cuando estés quedándote sin stock.
            </p>
          </div>
        </div>
      </div>

      {/* Botón */}
      <button
        className="mt-12 px-7 py-4 bg-[#F2674B] text-white text-xl rounded-xl shadow-md mb-10"
        style={{ fontFamily: "Poppins, sans-serif" }}
      >
        Construir mi plan
      </button>
    </div>
  );
}