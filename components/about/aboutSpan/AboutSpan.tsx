'use client';
import { motion } from 'framer-motion';
import { spanAbout } from '../../../utils/motion';

export interface IAboutSpan {
  start: number;
  end: number;
}

const AboutSpan: React.FC<IAboutSpan> = ({ start, end }) => {
  let result: number[] = [];
  function numbers() {
    for (let i = start; i <= end; i++) {
      result.push(i);
    }
    return result;
  }

  return (
    <>
      <motion.div
        className={`flex flex-col mt-24 lg:text-lg text-sm`}
        initial="hidden"
        animate="visible"
        variants={spanAbout}
      >
        {numbers().map((number, index) => (
          <span
            key={index}
            className={
              number <= 5
                ? 'opacity-30'
                : number > 5 && number <= 10
                ? 'opacity-70'
                : number > 10 && number <= 20
                ? 'opacity-100'
                : number > 22 && number <= 27
                ? 'opacity-70'
                : number > 27 && number <= 33
                ? 'opacity-30'
                : ''
            }
          >
            {number}
          </span>
        ))}
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
