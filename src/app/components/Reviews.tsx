"use client";

import { useState } from "react";
import Image from "next/image";

interface Review {
  id: number;
  title: string;
  subtitle: string;
  text: string;
  author: string;
  image: string;
}

const reviews: Review[] = [
  {
    id: 1,
    title: "Confiado por veterinarios.",
    subtitle: "Miles de profesionales veterinarios recomiendan nuestra comida y también se la dan a sus propios perros.",
    text: "Estaba nerviosa por probar algo nuevo, pero esta comida ha hecho una gran diferencia en la vida y el cuidado de Nero. Está más feliz, emocionado por comer y más saludable que nunca.",
    author: "Cynthia Pacelli, Técnica Veterinaria Jefe",
    image: "/images/charly.jpeg",
  },
  {
    id: 2,
    title: "Confiado por veterinarios.",
    subtitle: "Miles de profesionales veterinarios recomiendan nuestra comida y también se la dan a sus propios perros.",
    text: "Gracias a esta comida, Max ha recuperado su energía y alegría. Se nota la calidad en cada ración",
    author: "Laura Rodríguez, Dueña de Max",
    image: "/images/charly.jpeg",
  },
  {
    id: 3,
    title: "Confiado por veterinarios.",
    subtitle: "Miles de profesionales veterinarios recomiendan nuestra comida y también se la dan a sus propios perros.",
    text: "Después de probar varias marcas, finalmente encontramos una que a Coco le encanta y que además es saludable. Su pelaje luce mejor que nunca.",
    author: "Ana Pérez, Amante de mascotas",
    image: "/images/charly.jpeg",
  },
];

export default function Reviews() {
  const [currentReview, setCurrentReview] = useState(0);
  const [isSliding, setIsSliding] = useState(false);

  const handleReviewChange = (index: number) => {
    if (index !== currentReview) {
      setIsSliding(true);
      setTimeout(() => {
        setCurrentReview(index);
        setIsSliding(false);
      }, 300); // Duración de la animación en ms
    }
  };

  return (
    <div className="flex flex-col items-center bg-[#FFF3E1] p-8 text-left sm:text-center space-y-4 overflow-hidden">
      {/* Título con Poppins extra bold */}
      <h2
        className="text-3xl font-extrabold text-[#173B33]"
        style={{ fontFamily: "Poppins, sans-serif" }}
      >
        {reviews[currentReview].title}
      </h2>

      {/* Subtítulo */}
      <p className="text-gray-700">
        {reviews[currentReview].subtitle}
      </p>

      {/* Contenedor de la reseña con animación de slide */}
      <div
        className={`transition-transform duration-300 ease-in-out transform ${
          isSliding ? "translate-x-full opacity-0" : "translate-x-0 opacity-100"
        }`}
        style={{ minHeight: "250px" }} // Altura mínima fija y un poco más grande
      >
        {/* Reseña */}
        <p className="text-lg sm:italic max-w-2xl mx-auto text-gray-800 mt-4 px-4 h-40 sm:h-auto overflow-hidden sm:text-center">
          "{reviews[currentReview].text}"
        </p>

        {/* Autor y foto alineados a la izquierda en móvil */}
        <div className="flex items-center mt-4 space-x-2 justify-start sm:justify-center">
          <div className="circular-image mt-5">
            <Image
              src={reviews[currentReview].image}
              alt={reviews[currentReview].author}
              width={64}
              height={64}
            />
          </div>
          <p className="font-bold text-gray-900 mt-5">{reviews[currentReview].author}</p>
        </div>
      </div>

      {/* Botones de navegación */}
      <div className="flex space-x-2 mt-6 justify-start sm:justify-center">
        {reviews.map((review, index) => (
          <button
            key={review.id}
            className={`w-3 h-3 rounded-full ${
              index === currentReview ? "bg-gray-700" : "bg-gray-300"
            }`}
            onClick={() => handleReviewChange(index)}
          />
        ))}
      </div>
    </div>
  );
}