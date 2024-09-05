// components/Slide.tsx
import React from "react";
import Image from "next/image";

interface SlideProps {
  imageSrc: string;
  alt: string;
  text1: string;
  text2: string;
  text3: string;
  onExploreNow: () => void;
}

const Slide: React.FC<SlideProps> = ({
  imageSrc,
  alt,
  text1,
  text2,
  text3,
  onExploreNow,
}) => (
  <div className="relative w-full h-[calc(100vh+50px)]">
    <Image
      src={imageSrc}
      alt={alt}
      fill
      style={{ objectFit: "cover" }}
      className="w-full h-full"
    />
    <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-black/40 flex items-center justify-center">
      <div
        className="text-center text-white max-w-lg mx-auto"
        style={{ transform: "translateX(-300px)" }}
      >
        <h1 className="text-4xl md:text-5xl font-bold mb-6 drop-shadow-lg animate-fadeInDown">
          {text1}
        </h1>
        <p className="text-lg md:text-xl mb-6 drop-shadow animate-fadeInUp">
          {text2}
        </p>
        <p className="text-lg md:text-xl mb-6 drop-shadow animate-fadeInUp">
          {text3}
        </p>
        <div className="flex flex-col space-y-2 items-center">
          <button
            className="bg-yellow-400 text-blue-900 hover:bg-yellow-300 px-4 py-2 rounded-lg max-w-[200px]"
            onClick={onExploreNow}
          >
            Explora Ahora
          </button>
        </div>
        
      </div>
    </div>
  </div>
);
Slide.displayName = 'Slide';

export default Slide;
