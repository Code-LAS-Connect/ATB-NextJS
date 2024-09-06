import React, { useState } from 'react';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import destinosBD from '../api/destinos/imgs.json';

export function Destinos({ destinosRef }: any) {
  const destinos = destinosBD;
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((currentIndex + 1) % destinos.length);
  };

  const prevSlide = () => {
    setCurrentIndex((currentIndex - 1 + destinos.length) % destinos.length);
  };

  return (
    <section className="lugares py-10 text-center" ref={destinosRef}>
      <h2 className="text-3xl font-bold mb-5">Nuestros Destinos</h2>
      <div className="relative w-4/5 mx-auto overflow-hidden">
        <div
          className="flex transition-transform duration-500"
          style={{ transform: `translateX(-${currentIndex * 100}%)` }}
        >
          {destinos.map((destino, index) => (
            <Dialog key={destino.id}>
              <DialogTrigger asChild>
                <div className="min-w-full relative cursor-pointer">
                  <img src={destino.img_url} alt={destino.name_destino} className="w-full h-auto" />
                  <div className="absolute bottom-5 left-1/2 transform -translate-x-1/2 bg-black bg-opacity-50 text-white p-4 rounded-lg w-3/4">
                    <h3 className="text-2xl mb-2">{destino.name_destino}</h3>
                    <p className="mb-2">{destino.name_destino}</p>
                    <a href="#!" className="inline-block bg-blue-500 text-white py-2 px-4 rounded-lg">Conocer Más</a>
                  </div>
                </div>
              </DialogTrigger>

              {/* Contenido del diálogo al hacer clic en "Conocer Más" */}
              <DialogContent>
                <DialogHeader>
                  <DialogTitle>{destino.name_destino}</DialogTitle>
                </DialogHeader>
                <div className="mt-4">
                  <img
                    src={destino.img_url}
                    alt={`Vista panorámica de ${destino.name_destino}`}
                    className="w-full rounded-lg"
                  />
                  <p className="mt-4 text-sm text-gray-500">
                    Incluye vuelos, alojamiento de lujo y una experiencia inolvidable...
                  </p>
                </div>
              </DialogContent>
            </Dialog>
          ))}
        </div>

        {/* Botones de control del carrusel */}
        <button
          className="absolute top-1/2 left-0 transform -translate-y-1/2 bg-black bg-opacity-50 text-white px-4 py-2"
          onClick={prevSlide}
        >
          ‹
        </button>
        <button
          className="absolute top-1/2 right-0 transform -translate-y-1/2 bg-black bg-opacity-50 text-white px-4 py-2"
          onClick={nextSlide}
        >
          ›
        </button>
      </div>
    </section>
  );
}

export default Destinos;
