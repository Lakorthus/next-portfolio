'use client';
import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { AboutList } from '../../components/';

import mekid from '../../public/mekid.png';

import {
  fadeIn,
  imageMe,
  staggerContainer,
  textVariant2,
} from '../../utils/motion';

export interface IAbout {}

const About: React.FC<IAbout> = () => {
  return (
    <section
      id="about"
      className="paddings relative z-10 flexCenter flex-col min-h-[60vh]"
    >
      <motion.h2
        variants={textVariant2}
        initial="hidden"
        whileInView="show"
        className={`krona-one my-4 font-bold text-xl sm:text-3xl  sm:my-8`}
      >
        Short About
      </motion.h2>
      <motion.div
        variants={staggerContainer(0.1, 0.1)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.25 }}
        className={`innerWidth mx-auto flex items-center justify-around flex-col relative overflow-hidden sm:flex-row`}
      >
        <motion.div
          variants={imageMe('left')}
          className={`w-full h-96 flexCenter flex-1 z-30`}
        >
          <Image
            src={mekid}
            alt="Julio Velezmoro when he was 1 years old."
            className="w-auto h-96 object-contain group-hover:hidden z-40"
            width={500}
            height={500}
            priority
          />
        </motion.div>

        <div
          className={`flex-1 grid grid-row-3 gap-6 self-center justify-self-stretch xPaddings z-30`}
        >
          <AboutList
            text={'Took a leap of faith at 26 and moved to the UK.'}
            number={1}
          />
          <AboutList
            text={
              'Strives to positively impact as many people as possible in life.'
            }
            number={2}
          />
          <motion.div
            variants={fadeIn('up', 'tween', 0.2, 1)}
            className="flex justify-end"
          >
            <Link
              href={'./about'}
              className="btn btn-primary w-1/2 max-w-[280px] rounded-3xl underline underline-offset-2 tracking-wide text-md mr-4"
            >
              Read More
            </Link>
          </motion.div>
        </div>

        <div
          className={`bubble bubble-1 absolute right-[90%] bottom-[-200px] w-[100px] h-[100px] rounded-full opacity-[0.8] bg-accent z-10`}
        />
        <div
          className={`bubble bubble-2 absolute right-[30%] bottom-[-400px] w-[50px] h-[50px] rounded-full bg-accent z-10`}
        />
        <div
          className={`bubble bubble-3 absolute right-[40%] bottom-[-150px] w-[50px] h-[50px] rounded-full opacity-[0.8] bg-success z-10`}
        />
        <div
          className={`bubble bubble-4 absolute right-[80%] bottom-[-200px] w-[100px] h-[100px] rounded-full opacity-[0.8] bg-primary z-10`}
        />
      </motion.div>
    </section>
  );
};

export default About;
