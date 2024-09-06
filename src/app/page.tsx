// Page.tsx
"use client";

import React, { useRef } from "react";
import { Navbar } from "../components/Navbar";
import Header from "../components/Header/Header"; // Asegúrate de que la ruta sea correcta
import { Conocenos } from "../components/Conocenos";
import { Destinos } from "../components/Destinos";
import { SobreNosotros } from "../components/SobreNosotros";
import { Contacto } from "../components/Contacto";
import { Footer } from "../components/Footer";
import WhatsappButton from "../components/WhatsappButton";

export default function Page() {
  const conocenosRef = useRef<HTMLDivElement>(null);
  const destinosRef = useRef<HTMLDivElement>(null);
  const sobreNosotrosRef = useRef<HTMLDivElement>(null);
  const contactoRef = useRef<HTMLDivElement>(null);
  const headerRef = useRef<HTMLDivElement>(null); // Referencia para Header

  const scrollToSection = (ref: React.RefObject<HTMLDivElement>) => {
    if (ref.current) {
      ref.current.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div>
      <Navbar
        scrollToSection={scrollToSection}
        conocenosRef={conocenosRef}
        destinosRef={destinosRef}
        sobreNosotrosRef={sobreNosotrosRef}
        contactoRef={contactoRef}
        headerRef={headerRef} // 
      />
      <div style={{ marginTop: "-95px" }}>
        <Header
          scrollToSection={scrollToSection}
          destinosRef={destinosRef}
          headerRef={headerRef} // Pasar la referencia aquí
        />
        <Conocenos conocenosRef={conocenosRef} />
        <Destinos destinosRef={destinosRef} />
        <SobreNosotros sobreNosotrosRef={sobreNosotrosRef} />
        <Contacto contactoRef={contactoRef} />
        <Footer />
        <WhatsappButton
          onClick={() => {// Abre WhatsApp en una nueva pestaña
            window.open("https://wa.me/1234567890", "_blank");
          }}
        />
      </div>
    </div>
  );
}
