import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import '../app/styles/sobreNosotros.css';
import textosData from '../api/sobreNosotros/SobreNosotros.json';
import personasData from '../api/sobreNosotros/equipoTrabajo.json';
import sectionsData from '../api/sobreNosotros/visionMision.json';

export function SobreNosotros({ sobreNosotrosRef }: any) {
  const { sections } = sectionsData;
  const texts = textosData;
  const personas = personasData;

  return (
    <section id="sobre-nosotros" ref={sobreNosotrosRef} className="sn py-16 bg-white animate-fadeIn">
      <div className="container">
        <h2 className="text-3xl font-bold text-center mb-12 text-blue-800">Sobre Nosotros</h2>
        {texts.texts.map((texto) => (
          <div  className='containerName' key={texto.id}>
            <p>{texto.texto1}</p>
            <p>{texto.texto2}</p>
            <p>{texto.texto3}</p>
          </div>
        ))}
        <h2 className="nuestroEquipo text-3xl font-bold text-center mb-12 text-blue-800">Nuestro Equipo</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {personas.map((persona) => (
            <div className='containerUsers' key={persona.id}>
              <div className='card'>
                <div className='front'>
                  <img className='foto' src={persona['url?']} alt={persona['name?']} />
                </div>
                <div className='back'>
                  <h1 className='name'>{persona['name?']}</h1>
                  <p className='info'>{persona['info?']}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
        <h2 className="nuestroEquipo text-3xl font-bold text-center mb-12 text-blue-800">Mision, Vision y Terminos</h2>
        <div className="nuestroEquipo grid grid-cols-1 md:grid-cols-3 gap-8">
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
