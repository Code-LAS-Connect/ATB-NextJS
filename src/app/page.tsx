'use client';

import React, { useRef } from 'react';
import { Header } from '../components/Header';
import { Hero } from '../components/Hero';
import { Conocenos } from '../components/Conocenos';
import { Destinos } from '../components/Destinos';
import { SobreNosotros } from '../components/SobreNosotros';
import { Contacto } from '../components/Contacto';
import { Footer } from '../components/Footer';
import WhatsappButton from '../components/WhatsappButton';


export default function Page() {
  const conocenosRef = useRef(null);
  const destinosRef = useRef(null);
  const sobreNosotrosRef = useRef(null);
  const contactoRef = useRef(null);

  const scrollToSection = (ref: any) => {
    if (ref.current) {
      ref.current.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div>
      <Header
        scrollToSection={scrollToSection}
        conocenosRef={conocenosRef}
        destinosRef={destinosRef}
        sobreNosotrosRef={sobreNosotrosRef}
        contactoRef={contactoRef}
      />
      <Hero scrollToSection={scrollToSection} destinosRef={destinosRef} />
      <Conocenos conocenosRef={conocenosRef} />
      <Destinos destinosRef={destinosRef} />
      <SobreNosotros sobreNosotrosRef={sobreNosotrosRef} />
      <Contacto contactoRef={contactoRef} />
      <Footer />
      <WhatsappButton 
        onClick={() => {
          window.open('https://wa.me/1234567890', '_blank');
        }}
      />
    </div>
  );
}
