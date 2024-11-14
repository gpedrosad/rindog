import React from "react";

export default function PromoBanner() {
  return (
    <div className="w-full bg-[#173B33] text-white py-4 px-6 text-center">
      ¡Te han regalado un 50% de descuento en tu primera compra!{" "}
      <a href="#" className="underline font-bold hover:no-underline">
        CANJÉALO AHORA
      </a>
    </div>
  );
}