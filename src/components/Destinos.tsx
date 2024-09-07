import React from 'react';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import destinosBD from '../api/destinos/imgs.json';
import Image from 'next/image';
import Carousel from "@/components/ui/carrousel";
import Costos from '@/components/ui/costos';

export function Destinos({ destinosRef }: any) {
  const destinos = destinosBD;

  return (
    <section id="destinos" ref={destinosRef} className="ct py-16 bg-gradient-to-r from-yellow-100 to-pink-100 animate-fadeIn">
      <div className="container">
        <h2 className="text-3xl font-bold text-center mb-12 text-[#6b4226]">Nuestros Destinos</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {destinos.map((destino) => (
            <Dialog key={destino.id}>
              <DialogTrigger asChild>
                <Card className="overflow-hidden transition-transform hover:scale-105 cursor-pointer bg-[#f5f2e9]">
                  <CardHeader className="bg-gradient-to-r from-[#6b4226] to-[#8b5d3e]">
                    <CardTitle className="text-[#f5f2e9]">{destino.name}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <Image
                      src={destino.image}
                      alt={destino.name}
                      width={500}  // Ajusta el ancho según tus necesidades
                      height={300} // Ajusta la altura según tus necesidades
                      className="rounded-md"
                    />
                  </CardContent>
                </Card>
              </DialogTrigger>
              <DialogContent className="bg-[#f0e3d1] text-[#4a3c31] overflow-y-auto "
              style={{width: '90vw', height: '90vh'}}>
                <DialogHeader>
                  <DialogTitle>{destino.name}</DialogTitle>
                </DialogHeader>
                <div className="relative">
                  <Carousel
                    images={[
                      {
                        img: destino.image,
                        title: destino.name,
                        description: `Vista panorámica de ${destino.name}`,
                      },
                      {
                        img: destino.image, // se puede añadir mas imagenes anexandolas al JSOn
                        title: destino.name,
                        description: `Vista panorámica de ${destino.name}`,
                      },
                      {
                        img: destino.image, // se puede añadir mas imagenes anexandolas al JSOn
                        title: destino.name,
                        description: `Vista panorámica de ${destino.name}`,
                      }
                    ]}
                  />
                </div>
                <Costos />
              </DialogContent>
            </Dialog>
          ))}
        </div>
      </div>
    </section>
  );
}
