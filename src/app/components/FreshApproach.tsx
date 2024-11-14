import React from "react";
import Image from "next/image";

export default function FreshApproachAndBenefits() {
  return (
    <div className="relative">
      {/* Parte superior (Enfoque fresco para la comida de mascotas, en verde) */}
      <div className="bg-[#173B33] text-white px-8 sm:px-16 pt-20 pb-80 space-y-8">
        <h2
          className="text-3xl sm:text-4xl font-extrabold text-center mb-4"
          style={{ fontFamily: "Poppins, sans-serif" }}
        >
          Es momento de un enfoque fresco para la comida de mascotas.
        </h2>
        <p className="text-center text-lg max-w-2xl mx-auto mb-10">
          Al enviar comida directamente a ti, podemos invertir en mejores
          ingredientes y comida más fresca. Calidad que nunca se encuentra en una
          tienda.{" "}
          <a href="#" className="underline text-gray-300 hover:text-white">
            Aprende más sobre la importancia de la comida real.
          </a>
        </p>

        <div className="grid grid-cols-1 gap-10 text-center md:grid-cols-2 md:gap-8">
          <div>
            <h3 className="text-2xl font-semibold mb-2 relative inline-block">
              <span className="diagonal-strikethrough">“Comidas”</span>
            </h3>
            <p className="text-lg text-gray-300">
              Polvos como “Comida de Pollo” pueden contener carne de animales enfermos.
            </p>
          </div>
          <div>
            <h3 className="text-2xl font-semibold mb-2 relative inline-block">
              <span className="diagonal-strikethrough">Conservantes</span>
            </h3>
            <p className="text-lg text-gray-300">
              Conservantes naturales y/o artificiales pueden mantener alimentos de mascotas estables en el estante durante años.
            </p>
          </div>
          <div>
            <h3 className="text-2xl font-semibold mb-2 relative inline-block">
              <span className="diagonal-strikethrough">Pellets Marrones</span>
            </h3>
            <p className="text-lg text-gray-300">
              Las croquetas están extremadamente procesadas, sin importar las afirmaciones o imágenes de ingredientes.
            </p>
          </div>
          <div>
            <h3 className="text-2xl font-semibold mb-2 relative inline-block">
              <span className="diagonal-strikethrough">Trucos de Etiqueta</span>
            </h3>
            <p className="text-lg text-gray-300">
              Los alimentos pueden ocultarse detrás de etiquetas engañosas. “Hecho con carne de res” puede significar solo un 3% de carne.
            </p>
          </div>
        </div>
      </div>

      {/* Imagen centrada entre ambas secciones */}
      <div className="absolute top-1/2 transform -translate-y-1/2 left-1/2 -translate-x-1/2">
        <Image
          src="/images/package.webp"
          alt="Paquete en el centro"
          width={400}
          height={400}
        />
      </div>

      {/* Parte inferior (Cómo hicimos la comida de mascotas saludable, en amarillo) */}
      <div className="bg-[#FFF3E1] text-[#173B33] px-8 sm:px-16 pt-64 pb-40 flex flex-col items-center">
        <h2
          className="text-3xl sm:text-4xl font-extrabold text-center mb-8"
          style={{ fontFamily: "Poppins, sans-serif" }}
        >
          Cómo hicimos la comida de mascotas saludable:
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 text-center max-w-3xl">
          <div className="flex flex-col items-center">
            <h3 className="text-2xl font-bold mb-4" style={{ fontFamily: 'Poppins, sans-serif' }}>Probado en Humanos</h3>
            <p className="text-gray-700">
              Comida de calidad humana en empaques amigables. Menos procesamiento, mayor seguridad y fácil de servir: ¡solo abre y vierte!
            </p>
          </div>

          <div className="flex flex-col items-center">
            <h3 className="text-2xl font-bold mb-4" style={{ fontFamily: 'Poppins, sans-serif' }}>Planes Personalizados</h3>
            <p className="text-gray-700">
              Un plan diseñado por veterinarios se adapta a las necesidades individuales de tu perro. Las comidas se preparan y se porcionan según su perfil.
            </p>
          </div>

          <div className="flex flex-col items-center">
            <h3 className="text-2xl font-bold mb-4" style={{ fontFamily: 'Poppins, sans-serif' }}>Entregado en Días</h3>
            <p className="text-gray-700">
              Tu comida se hace fresca y se congela rápidamente para retener todos los nutrientes. Sin conservantes. Nunca almacenada por años.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}