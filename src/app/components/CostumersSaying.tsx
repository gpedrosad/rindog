// src/app/components/CustomersSaying.tsx

import { FaStar, FaCheckCircle } from "react-icons/fa";

export default function CustomersSaying() {
  return (
    <div className="bg-white text-[#173B33] p-8 sm:p-16">
      {/* Título principal */}
      <h2 className="text-4xl font-extrabold text-center mb-4" style={{ fontFamily: 'Poppins, sans-serif' }}>
        Más de 100,000,000 comidas entregadas.
      </h2>

      {/* Subtítulo */}
      <h3 className="text-2xl font-semibold text-center mb-8">
        Lo que dicen nuestros clientes
      </h3>

      {/* Línea de subrayado en el subtítulo */}
      <div className="flex justify-center mb-8">
        <span className="border-b-2 border-red-500 w-20"></span>
      </div>

      {/* Beneficios */}
      <div className="flex flex-wrap justify-center gap-8 text-lg font-semibold text-center mb-12">
        <p>Mayor Vitalidad</p>
        <p>Piel Clara & Pelaje Brillante</p>
        <p>Menos “Olor a Perro”</p>
      </div>

      {/* Reseña de cliente */}
      <div className="bg-white shadow-lg rounded-lg p-6 max-w-2xl mx-auto">
        <div className="flex items-center mb-4">
          {/* Estrellas */}
          <div className="flex text-red-500">
            {[...Array(5)].map((_, index) => (
              <FaStar key={index} />
            ))}
          </div>
        </div>

        {/* Nombre y verificación */}
        <div className="flex items-center">
          <p className="font-bold text-lg mr-2">Mary G.</p>
          <FaCheckCircle className="text-blue-500" />
        </div>

        {/* Descripción breve */}
        <p className="text-sm text-gray-700 mt-2 mb-4">
          Jingle (12 años, mezcla de Jack Russell Terrier y Rat Terrier)
        </p>

        {/* Texto de la reseña */}
        <p className="text-gray-800">
          Ustedes hacen que sea tan fácil ser uno de sus mayores fanáticos. Lo he dicho antes y lo volveré a decir: he visto la salud de Jingle mejorar al 100% en solo unos días, después de temer perderla. Atribuyo esto exclusivamente a su comida, y nunca sabrán lo agradecida que estoy.
        </p>
      </div>
    </div>
  );
}