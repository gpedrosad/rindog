import Image from "next/image";

export default function PlanSteps() {
  return (
    <div className="flex flex-col items-center bg-white p-8">
      <h2 className="text-3xl font-bold text-center mb-10 tracking-wide">Cómo funciona tu plan</h2>
      
      {/* Imagen encima de los tres títulos */}
      <Image
        src="/images/progress.gif"
        alt="Progreso del plan"
        width={0} // Se ajustará automáticamente al 3/4 de la pantalla
        height={0} // La altura se ajustará automáticamente
        className="w-3/4 mb-8"
      />

      {/* Contenedor de los pasos */}
      <div className="flex flex-col gap-12 text-black text-center sm:flex-row sm:justify-between">
        {/* Paso 1 */}
        <div className="flex flex-col items-center sm:items-center sm:w-1/3 max-w-xs mx-auto">
          <h3 className="font-bold text-xl mb-3 tracking-wider text-center">Construye tu plan</h3>
          <p className="max-w-xs text-lg leading-relaxed tracking-wide text-center">
            Simplemente cuéntanos un poco sobre tu perro, y crearemos un plan con porciones personalizadas para satisfacer sus necesidades únicas de nutrición y calorías.
          </p>
        </div>

        {/* Paso 2 */}
        <div className="flex flex-col items-center sm:items-center sm:w-1/3 max-w-xs mx-auto">
          <h3 className="font-bold text-xl mb-3 tracking-wider text-center">Pruébalo</h3>
          <p className="max-w-xs text-lg leading-relaxed tracking-wide text-center">
            Para comenzar, recibirás tu primera caja con hasta dos semanas de comida recién hecha, perfecta para que tu perro la pruebe.
          </p>
        </div>

        {/* Paso 3 */}
        <div className="flex flex-col items-center sm:items-center sm:w-1/3 max-w-xs mx-auto">
          <h3 className="font-bold text-xl mb-3 tracking-wider text-center">Enamórate</h3>
          <p className="max-w-xs text-lg leading-relaxed tracking-wide text-center">
            Si a ti y a tu perro les encanta –¡creemos que les gustará!–, estarás listo. Empezarás a recibir cajas de comida automáticamente cuando estés quedándote sin stock.
          </p>
        </div>
      </div>

      {/* Botón */}
      <button className="mt-12 px-5 py-4 bg-[#F2674B] text-white font-black text-xl tracking-tighter rounded-xl shadow-md">
        Construir mi plan
      </button>
    </div>
  );
}