'use client';
import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';
import { spanAbout } from '../../../utils/motion';

export interface IAboutSpan {
  start: number;
  end: number;
}

const AboutSpan: React.FC<IAboutSpan> = ({ start, end }) => {
  const [result, setResult] = useState<number[]>([]);

  useEffect(() => {
    let arr: number[] = [];
    for (let i = start; i <= end; i++) {
      arr.push(i);
    }
    setResult(arr);
  }, [start, end]);

  return (
    <>
      <motion.div
        className={`flex flex-col lg:text-lg text-sm`}
        initial="hidden"
        animate="visible"
        variants={spanAbout}
      >
        {result.map((number, index) => {
          if (number === 21 || number === 33) {
            return (
              <div key={index} className={`flexCenter gap-1`}>
                <span className="opacity-90">{number}</span>
                <div className="opacity-90 w-2 h-2 rounded-full bg-red-600" />
              </div>
            );
          } else {
            return (
              <span
                key={index}
                className={
                  number <= 16
                    ? 'opacity-60'
                    : number > 16 && number <= 20
                    ? 'opacity-70'
                    : number > 27 && number <= 31
                    ? 'opacity-70'
                    : number > 31 && number <= 34
                    ? 'opacity-60'
                    : ''
                }
              >
                {number}
              </span>
            );
          }
        })}
      </motion.div>
      <div
        className={`w-px h-96 ml-2 lg:ml-4 bg-gradient-to-b from-transparent via-white to-transparent`}
      ></div>
      <div
        className={`w-px h-44 m-auto ml-2 lg:ml-4 bg-gray-300 bg-opacity-20`}
      ></div>
    </>
  );
};

export default AboutSpan;
