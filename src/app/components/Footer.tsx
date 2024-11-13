// src/app/components/Footer.tsx

import { FaInstagram, FaFacebookF, FaTiktok } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-[#173B33] text-white py-12 px-6 sm:px-16">
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 mb-8">
        
        {/* Mapa del Sitio */}
        <div>
          <h3 className="font-bold mb-4">Mapa del Sitio</h3>
          <ul className="space-y-2">
            <li>Reseñas</li>
            <li>Sobre Nosotros</li>
            <li>Preguntas Frecuentes</li>
            <li>Iniciar Sesión</li>
            <li>Registrarse</li>
            <li>Digest</li>
            <li>DIY</li>
            <li>
              Carreras <span className="italic text-gray-300">¡Estamos Contratando!</span>
            </li>
            <li>Afiliados</li>
            <li>Para Profesionales Veterinarios</li>
            <li>Razas</li>
          </ul>
        </div>
        
        {/* Soporte */}
        <div>
          <h3 className="font-bold mb-4">Soporte <span className="italic text-gray-300">Disponible 24/7</span></h3>
          <p>hola@rindog.cl</p>
          <p>(+56) 968257817</p>
          <h4 className="font-bold mt-6">Conéctate</h4>
          <ul className="flex space-x-4 mt-2">
            <li><a href="#"><FaInstagram className="w-6 h-6" /></a></li>
            <li><a href="#"><FaFacebookF className="w-6 h-6" /></a></li>
            <li><a href="#"><FaTiktok className="w-6 h-6" /></a></li>
          </ul>
        </div>
        
        {/* Consejos de Salud y Nutrición */}
        <div>
          <h3 className="font-bold mb-4">Consejos Gratis de Salud y Nutrición</h3>
          <div className="flex space-x-2">
            <input
              type="email"
              placeholder="Correo Electrónico"
              className="p-2 rounded text-black w-full"
            />
            <button className="bg-gray-500 px-4 py-2 rounded text-white font-semibold">Enviar</button>
          </div>
        </div>
      </div>

      {/* Divider */}
      <div className="border-t border-dotted border-gray-400 my-8"></div>

      {/* Texto Inferior */}
      <p className="text-center mb-4">
        Nuestra comida se elabora al ritmo de buenas canciones, todo con ❤️ Chileno
      </p>

      {/* Enlaces de Pie de Página */}
      <div className="flex flex-col sm:flex-row justify-between items-center text-gray-400 text-sm space-y-4 sm:space-y-0">
        <p>© 2024 RinDog ¡Larga vida a los perros!</p>
        <div className="flex space-x-4">
          <a href="#">Privacidad</a>
          <a href="#">Términos</a>
          <a href="#">Accesibilidad</a>
        </div>
      </div>
    </footer>
  );
}