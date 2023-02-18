'use client';
import Image from 'next/image';
import { useEffect, useRef, useState } from 'react';
export interface ICarousel {}

const imageNumber = ['#0088FE', '#00C49F', '#FFBB28'];
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
    <div className=" m-[0,auto] overflow-hidden rounded-tl-[140px] z-10 relative md:h-[500px] h-[350px]">
      <div
        className="whitespace-nowrap transition-all duration-500 ease-in-out transform "
        style={{ transform: `translate3d(${-index * 100}%, 0, 0)` }}
      >
        {imageNumber.map((backgroundColor, index) => (
          <div
            className="inline-block h-96 w-full rounded-lg"
            key={index}
            style={{ backgroundColor }}
          >
            <Image
              src="https://placeimg.com/640/480/any"
              alt="Drink"
              width={640}
              height={480}
              className="w-full sm:h-[500px] h-[350px] object-cover  z-10 relative bg-neutral"
              priority
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Carousel;
