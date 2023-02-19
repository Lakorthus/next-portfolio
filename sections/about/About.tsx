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
          className={`my-4 font-bold md:text-[40px] text-[34px] text-white md:my-8`}
        >
          About me
        </motion.h2>

        <div
          className={`flex flex-col w-full md:grid grid-cols-3 gap-4 mt-2 md:mt-6 lg:mt-8`}
        >
          <AboutList
            text={
              'About 1 Lorem imput Lorem imput.About 1 Lorem imput Lorem imput.'
            }
            number={1}
          />
          <AboutList
            text={
              'About 2 Lorem imput Lorem imput.About 1 Lorem imput Lorem imput.'
            }
            number={2}
          />
          <AboutList
            text={
              'About 3 Lorem imput Lorem imputAbout 1 Lorem imput Lorem imput..'
            }
            number={3}
          />
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
