import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import sectionsData from '../api/sobreNosotros/SobreNosotros.json';
import personasData from '../api/sobreNosotros/equipoTrabajo.json'

export function SobreNosotros({ sobreNosotrosRef }: any) {
  const { sections } = sectionsData;

  return (
    <section id="sobre-nosotros" ref={sobreNosotrosRef} className="py-16 bg-white animate-fadeIn">
      <div className="container">
        <h2 className="text-3xl font-bold text-center mb-12 text-blue-800">Sobre Nosotros</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {sections.map((section) => (
            <Card key={section.title}>
              <CardHeader>
                <CardTitle className="text-blue-600">{section.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-700">{section.content}</p>
              </CardContent>
            </Card>
          ))}
        </div>

      </div>
    </section>
  );
}
