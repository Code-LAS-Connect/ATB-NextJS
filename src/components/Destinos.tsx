import React from 'react';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import destinosBD  from '../api/destinos/imgs.json'

export function Destinos({ destinosRef }:any) {
  const destinos = destinosBD

  return (
    <section id="destinos" ref={destinosRef} className="nt py-16 bg-gradient-to-r from-blue-100 to-purple-100 animate-fadeIn">
      <div className="container">
        <h2 className="text-3xl font-bold text-center mb-12 text-blue-800">Nuestros Destinos</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {destinos.map((destino) => (
            <Dialog key={destino.id}>
              <DialogTrigger asChild>
                <Card className="overflow-hidden transition-transform hover:scale-105 cursor-pointer">
                  <CardHeader className="bg-gradient-to-r from-blue-500 to-purple-500">
                    <CardTitle className="text-white">{destino.name_destino}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <img
                      src={`${destino.img_url}`}
                      alt={destino.name_destino}
                      className="w-full h-48 object-cover rounded-md"
                    />
                  </CardContent>
                </Card>
              </DialogTrigger>
              <DialogContent>
                <DialogHeader>
                  <DialogTitle>{destino.name_destino}</DialogTitle>
                </DialogHeader>
                <div className="mt-4">
                  <img
                    src={`${destino.img_url}`}
                    alt={`Vista panorámica de ${destino.name_destino}`}
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
