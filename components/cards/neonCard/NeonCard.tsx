'use client';
import { useEffect, useState } from 'react';
export interface INeonCard {
  children?: React.ReactNode;
}

const NeonCard: React.FC<INeonCard> = ({ children }) => {
  const [index, setIndex] = useState(0);
  const neonTypeColors = [
    {
      shadow: 'shadow-light-pink shadow-2xl',
      border: 'border-light-pink',
      background: 'bg-light-pink',
    },
    {
      shadow: 'shadow-light-yellow shadow-2xl',
      border: 'border-light-yellow',
      background: 'bg-light-yellow',
    },
    {
      shadow: 'shadow-light-blue shadow-2xl',
      border: 'border-light-blue',
      background: 'bg-light-blue',
    },
    {
      shadow: 'shadow-light-pink shadow-2xl',
      border: 'border-light-pink',
      background: 'bg-light-pink',
    },
  ];

  useEffect(() => {
    const loop = setInterval(() => {
      if (index >= 3) {
        setIndex(0);
      } else {
        setIndex(index + 1);
      }
    }, 2000);
    return () => {
      clearInterval(loop);
    };
  }, [index]);

  const { shadow, border, background } = neonTypeColors[index];

  return (
    <>
      <div
        className={`absolute w-full right-0 h-[360px] md:h-[420px] lg:h-[490px] rounded-tl-[140px] z-[0] border-y-4 border-l-4  ${border}  ${shadow} transition-all duration-1000 ${background} bg-opacity-20`}
      >
        <div className={`w-full h-full rounded-tl-[140px] opacity-50 glass`} />
        {children}
      </div>
    </>
  );
};

export default NeonCard;
