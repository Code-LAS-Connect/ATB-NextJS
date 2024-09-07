import React from "react";
import { Users, BadgeCheck } from "lucide-react";
import Image from "next/image";

interface ConocenosProps {
  conocenosRef: React.RefObject<HTMLDivElement>;
}

export function Conocenos({ conocenosRef }: ConocenosProps) {
  return (
    <section
      id="conocenos"
      ref={conocenosRef}
      className="ct py-28 bg-gradient-to-r from-yellow-100 to-pink-100 animate-fadeIn"
    >
      <div className="container">
        <h2 className="text-3xl font-bold text-center mb-12 text-[#6b4226]">
          Conócenos
        </h2>
        <div className="flex flex-col md:flex-row items-center gap-8">
          <div className="md:w-1/2">
            <Image
              src="https://images.unsplash.com/photo-1539635278303-d4002c07eae3?w=800&h=600&fit=crop"
              alt="Equipo ATB" // Texto alternativo para la imagen
              className="rounded-lg shadow-lg object-cover" // Clases de tailwindcss
              width={800} // ancho de la imagen en píxeles
              height={600} // Alto de la imagen en píxeles
            />
          </div>
          
          <div className="md:w-1/2">
            <p className="text-lg mb-4 text-[#4a3c31]">
              Somos ATB, expertos en crear experiencias de viaje todo incluido.
              Nuestra pasión es hacer que cada aventura sea perfecta, cuidando
              cada detalle para que solo te preocupes por disfrutar. Descubre
              con nosotros la forma más cómoda y emocionante de viajar.
            </p>
            <div className="flex space-x-4">
              <div className="flex items-center">
                <Users className="h-6 w-6 mr-2 text-[#556b2f]" />
                <span className="text-[#4a3c31]">1000+ clientes felices</span>
              </div>
              <div className="flex items-center">
                <BadgeCheck className="h-6 w-6 mr-2 text-[#556b2f]" />
                <span className="text-[#4a3c31]">calidad certificada</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
