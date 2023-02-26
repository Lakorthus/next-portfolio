'use client';
import Image from 'next/image';
import { useEffect, useRef, useState } from 'react';
import cartoonPic1 from '../../public/cartoon1.png';
import cartoonPic2 from '../../public/cartoon2.png';
import cartoonPic3 from '../../public/cartoon3.png';

export interface ICarousel {}

const imageNumber = [cartoonPic1, cartoonPic2, cartoonPic3];
const delay = 2500;

const Carousel: React.FC<ICarousel> = () => {
  const [index, setIndex] = useState(0);
  const timeoutRef = useRef<any>(null);

  function resetTimeout() {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
  }

  useEffect(() => {
    resetTimeout();
    timeoutRef.current = setTimeout(
      () =>
        setIndex((prevIndex) =>
          prevIndex === imageNumber.length - 1 ? 0 : prevIndex + 1
        ),
      delay
    );

    return () => {
      resetTimeout();
    };
  }, [index]);

  return (
    <div className="m-[0,auto] overflow-hidden rounded-tl-[140px] z-10 relative md:h-[500px] h-[350px]">
      <div
        className="whitespace-nowrap transition-all duration-500 ease-in-out transform "
        style={{ transform: `translate3d(${-index * 100}%, 0, 0)` }}
      >
        {imageNumber.map((image, index) => (
          <div className="inline-block h-96 w-full" key={index}>
            <Image
              src={image}
              alt="cartoon image"
              className="w-full lg:h-[480px] md:h-[400px] h-[350px] object-cover z-10 "
              priority
              draggable={false}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Carousel;
