import { FaStar, FaCheckCircle } from "react-icons/fa";

export default function ReviewCard() {
  return (
    <div className="max-w-sm p-4 border rounded-lg shadow-lg bg-white">
      {/* Calificación con estrellas */}
      <div className="flex items-center space-x-1">
        {[...Array(5)].map((_, i) => (
          <FaStar key={i} className="text-[#F59E0B]" size={16} />
        ))}
      </div>

      {/* Nombre y verificación */}
      <div className="flex items-center mt-2">
        <p className="font-bold text-lg mr-1">Maximiliano A.</p>
        <FaCheckCircle className="text-blue-500" size={16} />
      </div>

      {/* Detalles del perro */}
      <p className="text-gray-600 text-sm mt-1">
        Piper (3 años, mezcla de Galgo Italiano y Chihuahua)
      </p>

      {/* Contenido de la reseña */}
      <p className="text-gray-700 text-sm mt-3 leading-relaxed">
        Quería compartir esta foto de mi perro, Piper. Pensé que podría ayudar a
        mostrar la verdadera diferencia que puede hacer una buena alimentación.
        Antes comía croquetas de “alta calidad” y tenía muchas manchas en el
        lagrimal. Desde que cambiamos a esta comida, Piper ya no tiene ese
        problema y ahora es todo músculo.
      </p>
    </div>
  );
}