import React from 'react';
import { Button } from "@/components/ui/button";

export function Hero({ scrollToSection, destinosRef }:any) {
  return (
    <section id="hero" className="relative">
      <img
        src="https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=1600&h=900&fit=crop&crop=focalpoint"
        alt="Playa paradisíaca"
        className="w-full h-[70vh] object-cover"
      />
      <div className="absolute inset-0 bg-gradient-to-r from-blue-600/70 to-purple-600/70 flex items-center justify-center">
        <div className="text-center text-white">
          <h1 className="text-5xl font-bold mb-4 drop-shadow-lg animate-fadeInDown">Descubre el Paraíso</h1>
          <p className="text-xl mb-8 drop-shadow animate-fadeInUp">Vive experiencias inolvidables en los destinos más hermosos del mundo</p>
          <Button size="lg" className="bg-yellow-400 text-blue-900 hover:bg-yellow-300" onClick={() => scrollToSection(destinosRef)}>Explora Ahora</Button>
        </div>
      </div>
    </section>
  );
}
