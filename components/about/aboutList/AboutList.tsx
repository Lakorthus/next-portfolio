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
    delaySpeed: 20000,
    typeSpeed: 100,
    deleteSpeed: 100,
  });
  return (
    <div className="relative h-[11rem] inline-flex items-center pl-2 text-lg text-info sm:text-xl">
      <motion.p
        variants={fadeIn('up', 'tween', 0.2, 1)}
        className="font-bold flexCenter h-14 w-16 rounded-full bg-[#7073b0] "
      >
        {number}
      </motion.p>

      <motion.p
        variants={fadeIn('up', 'tween', 0.2, 1)}
        className="w-full font-normal flex items-center ml-8"
      >
        {useText}
        <Cursor cursorColor="orange" />
      </motion.p>
    </div>
  );
};

export default AboutList;
