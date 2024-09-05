import React from 'react';
import { Plane } from 'lucide-react';

export function Header({ scrollToSection, conocenosRef, destinosRef, sobreNosotrosRef, contactoRef }:any) {
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-white/95 backdrop-blur supports-[backdrop-filter]:bg-white/60">
      <div className="container flex h-16 items-center">
        <div className="mr-4 flex flex-1 items-center justify-around">
          <a className="flex items-center space-x-2" href="/">
            <Plane className="h-6 w-6 text-blue-600" />
            <span className="font-bold text-blue-600 text-xl">TravelDreams</span>
          </a>
          <nav className="flex items-center space-x-6 text-sm font-medium">
            <button onClick={() => scrollToSection(conocenosRef)} className="transition-colors hover:text-blue-600 text-gray-600">Conócenos</button>
            <button onClick={() => scrollToSection(destinosRef)} className="transition-colors hover:text-blue-600 text-gray-600">Nuestros Destinos</button>
            <button onClick={() => scrollToSection(sobreNosotrosRef)} className="transition-colors hover:text-blue-600 text-gray-600">Sobre Nosotros</button>
            <button onClick={() => scrollToSection(contactoRef)} className="transition-colors hover:text-blue-600 text-gray-600">Contacto</button>
          </nav>
        </div>
      </div>
    </header>
  );
}
