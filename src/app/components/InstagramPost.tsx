import { FaHeart, FaRegComment, FaShareSquare, FaInstagram } from "react-icons/fa";
import Image from "next/image";

export default function InstagramPost() {
  return (
    <div className="max-w-xs p-4 border rounded-lg shadow-lg bg-white relative">
      {/* Icono de Instagram en la esquina superior derecha */}
      <div className="absolute top-2 right-2 text-gray-500">
        <FaInstagram size={20} />
      </div>

      {/* Imagen principal de la publicación */}
      <Image
        src="/images/driven.jpeg" // Imagen principal de la publicación
        alt="Imagen de publicación"
        width={320} // Ajusta el ancho de la imagen
        height={320} // Ajusta la altura de la imagen
        className="rounded-lg w-full h-auto mb-4"
      />

      {/* Información del usuario e imagen de perfil */}
      <div className="flex items-center px-4">
        <Image
          src="/images/driven.jpeg" // Imagen de perfil
          alt="Foto de perfil"
          width={40}
          height={40}
          className="rounded-full"
        />
        <p className="text-sm font-bold text-gray-800 ml-3 flex items-center">
          woof.im.otis <span role="img" aria-label="dog">🐾</span>
        </p>
      </div>

      {/* Texto de publicación */}
      <div className="px-4 pb-4">
        <p className="text-sm text-gray-700 mt-1 leading-snug">
          Made dad film and edit my morning @thefarmersdog. Now watch me eat!
          <span role="img" aria-label="dog"> 🐾</span>
        </p>
      </div>

      {/* Iconos de interacción */}
      <div className="flex space-x-4 pt-2 border-t mt-2 px-4">
        <FaHeart className="text-red-500" size={20} />
        <FaRegComment className="text-gray-500" size={20} />
        <FaShareSquare className="text-gray-500" size={20} />
      </div>
    </div>
  );
}