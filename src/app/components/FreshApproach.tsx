// src/app/components/FreshApproach.tsx

import React from "react";

export default function FreshApproach() {
  return (
    <div className="bg-[#173B33] text-white px-8 sm:px-16 py-32 sm:py-48 space-y-8">
      {/* Título */}
      <h2
        className="text-3xl sm:text-4xl font-extrabold text-center mb-4"
        style={{ fontFamily: "Poppins, sans-serif" }}
      >
        Es momento de un enfoque fresco para la comida de mascotas.
      </h2>

      {/* Subtítulo */}
      <p className="text-center text-lg max-w-2xl mx-auto">
        Al enviar comida directamente a ti, podemos invertir en mejores
        ingredientes y comida más fresca. Calidad que nunca se encuentra en una
        tienda.{" "}
        <a href="#" className="underline text-gray-300 hover:text-white">
          Aprende más sobre la importancia de la comida real.
        </a>
      </p>

      {/* Listado de términos tachados en grid */}
      <div className="grid grid-cols-1 gap-10 text-center md:grid-cols-2 md:gap-8">
        {/* Alternativa 1 */}
        <div>
          <h3 className="text-2xl font-semibold mb-2 relative inline-block">
            <span className="diagonal-strikethrough">“Comidas”</span>
          </h3>
          <p className="text-lg text-gray-300">
            Polvos como “Comida de Pollo” pueden contener carne de animales
            enfermos.
          </p>
        </div>

        {/* Alternativa 2 */}
        <div>
          <h3 className="text-2xl font-semibold mb-2 relative inline-block">
            <span className="diagonal-strikethrough">Conservantes</span>
          </h3>
          <p className="text-lg text-gray-300">
            Conservantes naturales y/o artificiales pueden mantener alimentos de
            mascotas estables en el estante durante años.
          </p>
        </div>

        {/* Alternativa 3 */}
        <div>
          <h3 className="text-2xl font-semibold mb-2 relative inline-block">
            <span className="diagonal-strikethrough">Pellets Marrones</span>
          </h3>
          <p className="text-lg text-gray-300">
            Las croquetas están extremadamente procesadas, sin importar las
            afirmaciones o imágenes de ingredientes.
          </p>
        </div>

        {/* Alternativa 4 */}
        <div>
          <h3 className="text-2xl font-semibold mb-2 relative inline-block">
            <span className="diagonal-strikethrough">Trucos de Etiqueta</span>
          </h3>
          <p className="text-lg text-gray-300">
            Los alimentos pueden ocultarse detrás de etiquetas engañosas. “Hecho
            con carne de res” puede significar solo un 3% de carne.
          </p>
        </div>
      </div>
    </div>
  );
}