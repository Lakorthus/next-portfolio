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
    <div className="relative flexCenter pl-2">
      <div className={`flexCenter w-24 h-16 rounded-full bg-[#323F5D]`}>
        <motion.p
          variants={fadeIn('up', 'tween', 0.2, 1)}
          className="font-bold text-[20px]"
        >
          {number}
        </motion.p>
      </div>
      <div className={`flexCenter w-full h-44 ml-8`}>
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
