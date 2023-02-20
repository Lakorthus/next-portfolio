'use client';
import { motion } from 'framer-motion';
import Image from 'next/image';
import { AboutList } from '../../components/';
import { imageMe, staggerContainer, textVariant2 } from '../../utils/motion';

export interface IAbout {}

const About: React.FC<IAbout> = () => {
  return (
    <section
      id="about"
      className="paddings relative z-10 flexCenter flex-col min-h-[75vh]"
    >
      <motion.h2
        variants={textVariant2}
        initial="hidden"
        whileInView="show"
        className={`my-4 font-bold md:text-[40px] text-[34px] text-white md:my-8`}
      >
        About me
      </motion.h2>
      <motion.div
        variants={staggerContainer(0.1, 0.1)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.25 }}
        className={`innerWidth mx-auto`}
      >
        <motion.div variants={imageMe('left')} className={`flex-1 flexCenter`}>
          <Image
            src="/avatar.png"
            alt="get-started"
            width={380}
            height={480}
            className=" object-contain py-5"
            priority
          />
        </motion.div>
        <div
          className={`flex flex-col w-full min-h-[16rem] md:grid grid-cols-3 gap-4 mt-2 md:mt-6 lg:mt-8`}
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
      </motion.div>
    </section>
  );
};

export default About;
