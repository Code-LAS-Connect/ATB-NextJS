import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import "../app/styles/sobreNosotros.css";
import textosData from "../api/sobreNosotros/SobreNosotros.json";
import personasData from "../api/sobreNosotros/equipoTrabajo.json";
import sectionsData from "../api/sobreNosotros/visionMision.json";
import Image from "next/image";

export function SobreNosotros({ sobreNosotrosRef }: any) {
  const { sections } = sectionsData;
  const { texts } = textosData;
  const personas = personasData;

  return (
    <section
      id="sobre-nosotros"
      ref={sobreNosotrosRef}
      className="ct py-16 bg-gradient-to-r from-yellow-100 to-pink-100 animate-fadeIn"
    >
      <div className="container">
        <h2 className="text-3xl font-bold text-center mb-12 text-amber-800">
          Sobre Nosotros
        </h2>
        {texts.map((texto) => (
          <div className="containerName" key={texto.id}>
            <p className="text-gray-800">{texto.texto1}</p>
            <p className="text-gray-800">{texto.texto2}</p>
            <p className="text-gray-800">{texto.texto3}</p>
          </div>
        ))}
        <h2 className="nuestroEquipo text-3xl font-bold text-center mb-12 text-amber-800">
          Nuestro Equipo
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {personas.map((persona) => (
            <div className="containerUsers" key={persona.id}>
              <div className="card">
                <div className="front">
                  <Image
                    className="foto"
                    src={persona["url?"]}
                    alt={persona["name?"]}
                    width={500} 
                    height={300} 
                  />
                </div>
                <div className="back">
                  <h1 className="name text-gray-800">{persona["name?"]}</h1>
                  <p className="info text-gray-600">{persona["info?"]}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
        <h2 className="nuestroEquipo text-3xl font-bold text-center mb-12 text-amber-800">
          Misión, Visión y Términos
        </h2>
        <div className="nuestroEquipo grid grid-cols-1 md:grid-cols-3 gap-8">
          {sections.map((section) => (
            <Card key={section.title}>
              <CardHeader>
                <CardTitle className="text-amber-600">
                  {section.title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-800">{section.content}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
