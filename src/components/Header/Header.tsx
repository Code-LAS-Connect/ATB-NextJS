// components/Header/Header.tsx
import React, { forwardRef, useRef } from 'react';
import Slider from 'react-slick';
import Slide from './Slide'; // Ajusta la ruta según tu estructura de carpetas
import ArrowButton from './ArrowButton'; // Ajusta la ruta según tu estructura de carpetas
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

interface HeaderProps {
  scrollToSection: (ref: React.RefObject<HTMLDivElement>) => void;
  destinosRef: React.RefObject<HTMLDivElement>;
  headerRef?: React.RefObject<HTMLDivElement>; // Propiedad opcional para la referencia
}

const Header = forwardRef<HTMLDivElement, HeaderProps>(({ scrollToSection, destinosRef, headerRef }, ref) => {
  const sliderRef = useRef<Slider>(null);

  const slidesData = [
    {
      imageSrc: "/header-1.jpg",
      alt: "Playa paradisíaca",
      text1: "Descubre hermosos lugares con ATB",
      text2: "Vive experiencias inolvidables",
      text3: "en los destinos más relajantes",
    },
    {
      imageSrc: "/header-1.jpg",
      alt: "Otra vista de la playa",
      text1: "Explora el mundo",
      text2: "con nuestro servicio",
      text3: "de viajes exclusivos",
    },
  ];

  const restartAnimation = () => {
    const animatedTextElements = document.querySelectorAll(".animated-text");
    animatedTextElements.forEach((element) => {
      const htmlElement = element as HTMLElement;
      htmlElement.style.animation = "none";
      htmlElement.offsetHeight; /* trigger reflow */
      htmlElement.style.animation = "";
    });
  };

  const handleAfterChange = () => {
    restartAnimation();
  };

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
    nextArrow: <ArrowButton direction="next" onClick={() => sliderRef.current?.slickNext()} />,
    prevArrow: <ArrowButton direction="prev" onClick={() => sliderRef.current?.slickPrev()} />,
    afterChange: handleAfterChange,
  };

  const handleExploreNow = () => {
    scrollToSection(destinosRef);
  };

  return (
    <section id="header" ref={headerRef} className="relative">
      <Slider {...settings} ref={sliderRef}>
        {slidesData.map((slide, index) => (
          <Slide
            key={index}
            imageSrc={slide.imageSrc}
            alt={slide.alt}
            text1={slide.text1}
            text2={slide.text2}
            text3={slide.text3}
            onExploreNow={handleExploreNow}
          />
        ))}
      </Slider>
    </section>
  );
});
Header.displayName = 'Header';

export default Header;
