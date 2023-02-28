'use client';
import { motion } from 'framer-motion';
import { Cursor, useTypewriter } from 'react-simple-typewriter';
import { fadeIn } from '../../../utils/motion';

export interface IAboutList {
  text: string;
  number: number;
}

const AboutList: React.FC<IAboutList> = ({ text, number }) => {
  const [useText] = useTypewriter({
    loop: true,
    words: [text],
    delaySpeed: 4000,
    typeSpeed: 100,
    deleteSpeed: 100,
  });
  return (
    <div className="relative flexCenter min-h-28 pl-2">
      <div className={`flexCenter min-h-16 w-1/4 rounded-[24px] bg-[#323F5D]`}>
        <motion.p
          variants={fadeIn('up', 'tween', 0.2, 1)}
          className="font-bold text-[20px]  text-white"
        >
          {number}
        </motion.p>
      </div>
      <div className={`flexCenter w-full h-full ml-8`}>
        <motion.p
          variants={fadeIn('up', 'tween', 0.2, 1)}
          className="w-full font-normal md:text-[30px] text-[24px] text-[#B0B0B0] leading-[32.4px]"
        >
          {useText}
          <Cursor cursorColor="orange" />
        </motion.p>
      </div>
    </div>
  );
};

export default AboutList;
