// Header.tsx
"use client";

import { useState } from 'react';
import SliderItem from './slider-item';
import SliderThumbnailItem from './slider-thumbnail-item';
import Arrows from './arrows';

interface HeaderProps {
  scrollToSection: (ref: React.RefObject<HTMLDivElement>) => void;
  destinosRef: React.RefObject<HTMLDivElement>;
  headerRef: React.RefObject<HTMLDivElement>;
}

const Header: React.FC<HeaderProps> = ({ scrollToSection, destinosRef, headerRef }) => {
  const [itemActive, setItemActive] = useState<number>(1);
  const countItems = 5;

  const onNext = () => {
    setItemActive((prev) => (prev >= countItems ? 1 : prev + 1));
  };

  const onPrevious = () => {
    setItemActive((prev) => (prev === 1 ? countItems : prev - 1));
  };

  const scrollToDestinos = () => {
    scrollToSection(destinosRef);
  };

  return (
    <header ref={headerRef} className='relative h-screen bg-cover bg-center'>
      <div className='absolute inset-0 flex flex-col justify-center items-center'>
        <ul className='relative h-full'>
          <SliderItem
            itemActive={itemActive}
            id={1}
            image='/header-1.jpg'
            brand='Dodge'
            name='Challenger'
            desc='El Dodge Challenger es un potente muscle car con diseño clásico y altas prestaciones, destacando por su fuerza y estilo impactante.'
            scrollToDestinos={scrollToDestinos}
          />
          <SliderItem
            itemActive={itemActive}
            id={2}
            image='/header-1.jpg'
            brand='Dodge'
            name='Camaro'
            desc='El Dodge Camaro es un icónico muscle car con líneas agresivas, rendimiento poderoso y una estética moderna que cautiva a los amantes de la velocidad.'
            scrollToDestinos={scrollToDestinos}
          />
          <SliderItem
            itemActive={itemActive}
            id={3}
            image='/header-1.jpg'
            brand='Dodge'
            name='Charger'
            desc='El Dodge Charger es una sedán deportivo con diseño imponente, potente rendimiento y características de alto nivel, fusionando estilo y velocidad.'
            scrollToDestinos={scrollToDestinos}
          />
          <SliderItem
            itemActive={itemActive}
            id={4}
            image='/header-1.jpg'
            brand='Jeep'
            name='Jeep'
            desc='Jeep, sinónimo de aventura todoterreno. Modelos como el Wrangler y Grand Cherokee ofrecen robustez y estilo icónico en cada viaje.'
            scrollToDestinos={scrollToDestinos}
          />
          <SliderItem
            itemActive={itemActive}
            id={5}
            image='/header-1.jpg'
            brand='Dodge'
            name='Ram'
            desc='La Dodge Ram es una robusta camioneta con poderoso rendimiento y lujoso interior. Con un diseño imponente, es líder en fuerza y comodidad.'
            scrollToDestinos={scrollToDestinos}
          />
        </ul>
        <Arrows onClickPrev={onPrevious} onClickNext={onNext} />
      </div>

      {/* Thumbnails */}
      <ul className='absolute bottom-0 z-10 flex sm:justify-end gap-3 w-full h-[250px] px-14 overflow-y-hidden overflow-x-auto'>
        <SliderThumbnailItem
          itemActive={itemActive}
          image='/header-1.jpg'
          id={1}
          name='Challenger'
          onClick={() => setItemActive(1)}
        />
        <SliderThumbnailItem
          itemActive={itemActive}
          image='/header-1.jpg'
          id={2}
          name='Camaro'
          onClick={() => setItemActive(2)}
        />
        <SliderThumbnailItem
          itemActive={itemActive}
          image='/header-1.jpg'
          id={3}
          name='Charger'
          onClick={() => setItemActive(3)}
        />
        <SliderThumbnailItem
          itemActive={itemActive}
          image='/header-1.jpg'
          id={4}
          name='Jeep'
          onClick={() => setItemActive(4)}
        />
        <SliderThumbnailItem
          itemActive={itemActive}
          image='/header-1.jpg'
          id={5}
          name='Ram'
          onClick={() => setItemActive(5)}
        />
      </ul>
    </header>
  );
};

export default Header;
