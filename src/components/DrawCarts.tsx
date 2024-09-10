import React, { useRef, useState } from "react";
import { motion } from "framer-motion";
import { twMerge } from "tailwind-merge";
import destinosBD from '../api/destinos/imgs.json'; // Ajusta la ruta según tu estructura

export const DragCards = () => {
  return (
    <section className="relative grid min-h-screen w-full place-content-center overflow-hidden bg-[#f3f4f6]"> {/* Cambiado a un color más neutro */}
    <h2 className="relative z-0 text-[20vw] font-black text-[#1f2937] md:text-[200px]"> {/* Cambiado el color del texto a un tono oscuro neutral */}
      DESTINOS<span className="text-indigo-500">.</span>
      </h2>
      <Cards destinos={destinosBD} />
    </section>
  );
};

const Cards = ({ destinos }: { destinos: Array<{ id: number, name: string, image: string }> }) => {
  const containerRef = useRef(null);

  return (
    <div className="absolute inset-0 z-10  " ref={containerRef}>
      {destinos.map((destino) => (
        <Card
          key={destino.id}
          containerRef={containerRef}
          src={destino.image}
          alt={destino.name}
          rotate={`${Math.floor(Math.random() * 20) - 10}deg`} // Rotación aleatoria entre -10 y 10 grados
          top={`${Math.floor(Math.random() * 80)}%`} // Posición vertical aleatoria
          left={`${Math.floor(Math.random() * 80)}%`} // Posición horizontal aleatoria
          className="w-36 md:w-56"
        />
      ))}
    </div>
  );
};

const Card = ({ containerRef, src, alt, top, left, rotate, className }: any) => {
  const [zIndex, setZIndex] = useState(0);

  const updateZIndex = () => {
    const els = document.querySelectorAll(".drag-elements");

    let maxZIndex = -Infinity;

    els.forEach((el) => {
      let zIndex = parseInt(
        window.getComputedStyle(el).getPropertyValue("z-index")
      );

      if (!isNaN(zIndex) && zIndex > maxZIndex) {
        maxZIndex = zIndex;
      }
    });

    setZIndex(maxZIndex + 1);
  };

  return (
    <motion.img
      onMouseDown={updateZIndex}
      style={{
        top,
        left,
        rotate,
        zIndex,
      }}
      className={twMerge(
        "drag-elements absolute bg-neutral-200 p-1 pb-4",
        className
      )}
      src={src}
      alt={alt}
      drag
      dragConstraints={containerRef}
      dragElastic={0.65}
    />
  );
};
