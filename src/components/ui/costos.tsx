// costos.tsx
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export default function Costos() {
  const paquetes = [
    {
      id: 1,
      titulo: 'Paquete Básico',
      descripcion: 'Incluye guía básico y tour por la ciudad.',
      link: 'https://example.com/paquete-basico',
      imagen: 'https://via.placeholder.com/300x200?text=Paquete+B%C3%A1sico' // Imagen de ejemplo
    },
    {
      id: 2,
      titulo: 'Paquete Intermedio',
      descripcion: 'Incluye guía turístico, tour por la ciudad y entrada a museos.',
      link: 'https://example.com/paquete-intermedio',
      imagen: 'https://via.placeholder.com/300x200?text=Paquete+Intermedio' // Imagen de ejemplo
    },
    {
      id: 3,
      titulo: 'Paquete Premium',
      descripcion: 'Guía personalizado, tour privado y acceso VIP a eventos culturales.',
      link: 'https://example.com/paquete-premium',
      imagen: 'https://via.placeholder.com/300x200?text=Paquete+Premium' // Imagen de ejemplo
    }
  ];

  return (
    <section className="py-16 bg-gradient-to-r from-yellow-100 to-pink-100">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12 text-[#6b4226]">Paquetes de Guía Turístico</h2>
        <div className="flex flex-wrap -mx-4">
          {paquetes.map((paquete) => (
            <div key={paquete.id} className="w-full md:w-1/2 lg:w-1/3 px-4 mb-8">
              <Card className="flex flex-col md:flex-row bg-[#f5f2e9] rounded-lg shadow-md overflow-hidden">
                <div className="md:w-1/2">
                  <img
                    src={paquete.imagen}
                    alt={paquete.titulo}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="md:w-1/2 p-4 flex flex-col justify-between">
                  <CardHeader className="bg-gradient-to-r from-[#6b4226] to-[#8b5d3e] p-4">
                    <CardTitle className="text-[#f5f2e9] text-xl font-semibold">{paquete.titulo}</CardTitle>
                  </CardHeader>
                  <CardContent className="flex-1">
                    <p className="text-[#4a3c31] mb-4">{paquete.descripcion}</p>
                    <a
                      href={paquete.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-block px-6 py-2 bg-[#6b4226] text-white rounded hover:bg-[#8b5d3e] transition"
                    >
                      Más Información
                    </a>
                  </CardContent>
                </div>
              </Card>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
