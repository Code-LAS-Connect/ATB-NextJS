import React from 'react';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export function Destinos({ destinosRef }:any) {
  const destinos = ['Bali', 'Santorini', 'Maldivas', 'Cancún', 'Tokio', 'París'];

  return (
    <section id="destinos" ref={destinosRef} className="py-16 bg-gradient-to-r from-blue-100 to-purple-100 animate-fadeIn">
      <div className="container">
        <h2 className="text-3xl font-bold text-center mb-12 text-blue-800">Nuestros Destinos</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {destinos.map((destino) => (
            <Dialog key={destino}>
              <DialogTrigger asChild>
                <Card className="overflow-hidden transition-transform hover:scale-105 cursor-pointer">
                  <CardHeader className="bg-gradient-to-r from-blue-500 to-purple-500">
                    <CardTitle className="text-white">{destino}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <img
                      src={`https://source.unsplash.com/400x300/?${destino}`}
                      alt={destino}
                      className="w-full h-48 object-cover rounded-md"
                    />
                  </CardContent>
                </Card>
              </DialogTrigger>
              <DialogContent>
                <DialogHeader>
                  <DialogTitle>{destino}</DialogTitle>
                </DialogHeader>
                <div className="mt-4">
                  <img
                    src={`https://source.unsplash.com/800x400/?${destino}`}
                    alt={`Vista panorámica de ${destino}`}
                    className="w-full rounded-lg"
                  />
                  <p className="mt-4 text-sm text-gray-500">
                    Incluye vuelos, alojamiento de lujo y una gordita...
                  </p>
                </div>
              </DialogContent>
            </Dialog>
          ))}
        </div>
      </div>
    </section>
  );
}
