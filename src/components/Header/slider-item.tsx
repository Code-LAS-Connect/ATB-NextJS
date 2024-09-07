import Image from 'next/image';
import { cn } from '../../lib/utils';

interface SliderItemProps {
  itemActive: number;
  id: number;
  image: string;
  brand: string;
  name: string;
  desc: string;
  scrollToDestinos: () => void;  
}

const SliderItem = ({
  itemActive,
  id,
  image,
  brand,
  name,
  desc,
  scrollToDestinos
}: SliderItemProps) => {
  console.log('SliderItemProps', itemActive, id, image, brand, name, desc, scrollToDestinos);
  return (
    <li
      className={cn(
        'absolute inset-0 overflow-hidden after:absolute after:w-full after:h-full after:left-0 after:bottom-0 after:bg-slider transition-all duration-500',
        itemActive === id ? 'opacity-100 z-10' : 'opacity-0'
      )}

    >
      <div className='relative w-full h-full img_h'>
        <Image 
          src={image} 
          alt={name} 
          fill // Esto permite que la imagen se ajuste al contenedor
          className='object-cover' 
          priority // Marca la imagen como de alta prioridad
          sizes='(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 100vw' // Ajusta según el tamaño del contenedor
        />
      </div>
      <div className='space-y-4 absolute left-[10%] top-[20%] w-[500px] max-w-[80%] z-10'>
        <p
          className={cn(
            'uppercase tracking-[10px] text-white translate-y-[30px] blur-[20px] opacity-0 animation-delay-300',
            itemActive === id && 'animate-show-content'
          )}
        >
          {brand}
        </p>
        <h2
          className={cn(
            'text-6xl lg:text-8xl m-0 text-white font-bold translate-y-[30px] blur-[20px] opacity-10 animation-delay-400',
            itemActive === id && 'animate-show-content'
          )}
        >
          {name}
        </h2>
        <p
          className={cn(
            'text-gray-200 translate-y-[30px] blur-[20px] opacity-0 animation-delay-500',
            itemActive === id && 'animate-show-content'
          )}
        >
          {desc}
        </p>
      </div>
      <button
        onClick={scrollToDestinos}
        className='absolute bottom-4 right-4 px-4 py-2 bg-blue-500 text-white rounded-lg'
      >
        Explorar Destinos
      </button>
    </li>
  );
};

export default SliderItem;
