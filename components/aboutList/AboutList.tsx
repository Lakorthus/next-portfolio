'use client';
import { motion } from 'framer-motion';
import { Cursor, useTypewriter } from 'react-simple-typewriter';
import { fadeIn } from '../../utils/motion';

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
    <div className="relative flexCenter">
      <div
        className={`flexCenter w-[70px] h-[70px] rounded-[24px] bg-[#323F5D]`}
      >
        <motion.p
          variants={fadeIn('up', 'tween', 0.2, 1)}
          className="font-bold text-[20px] text-white"
        >
          {number}
        </motion.p>
      </div>

      <motion.p
        variants={fadeIn('up', 'tween', 0.2, 1)}
        className=" ml-[30px] font-normal md:text-[30px] text-[24px] text-[#B0B0B0] leading-[32.4px]"
      >
        {useText}
        <Cursor cursorColor="orange" />
      </motion.p>
    </div>
  );
};

export default AboutList;
