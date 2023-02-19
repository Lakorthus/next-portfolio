'use client';
import { motion } from 'framer-motion';
import AboutList from '../../components/aboutList/AboutList';
import { fadeIn, staggerContainer, textVariant2 } from '../../utils/motion';

export interface IAbout {}

const About: React.FC<IAbout> = () => {
  return (
    <section className="paddings relative z-10">
      <motion.div
        variants={staggerContainer(0.1, 0.1)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.25 }}
        className={`innerWidth mx-auto flexCenter flex-col`}
      >
        <motion.h2
          variants={textVariant2}
          initial="hidden"
          whileInView="show"
          className={`mt-[8px] font-bold md:text-[64px] text-[40px] text-white `}
        >
          | About Me as a Developer
        </motion.h2>

        <div className={`flexCenter w-full flex flex-col md:flex-row gap-3`}>
          <AboutList text={'About 1 Lorem imput Lorem imput'} number={1} />
          <AboutList text={'About 2Lorem imput Lorem imput'} number={2} />
          <AboutList text={'About 3 Lorem imput'} number={3} />
        </div>

        <motion.img
          variants={fadeIn('up', 'tween', 0.3, 1)}
          src="/vercel.svg"
          alt="arrow down"
          className="w-[18px] h-[28px] object-contain mt-[28px]"
        />
      </motion.div>
    </section>
  );
};

export default About;
