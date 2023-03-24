'use client';
import { motion } from 'framer-motion';
import Image from 'next/image';
import { HeroList } from '../../components';
import infoImage from '../../public/vschair.png';

import { slideIn, staggerContainer, textVariant } from '../../utils/motion';
export interface IHero {}

const Hero: React.FC<IHero> = () => {
  return (
    //yPaddings pl-16 md:pl-32  lg:pl-72
    //
    <section id="info">
      <motion.div
        variants={staggerContainer(0.05, 0.05)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.25 }}
        className={`h-screen grid grid-cols-1 grid-rows-1 align-middle bg-neutral sm:grid-cols-2 overflow-hidden`}
      >
        <motion.div
          variants={slideIn('left', 'tween', 0.2, 1)}
          className="relative innerWidth mx-auto flex flex-col sm:pt-24 sm:z-30 bg-secondary"
        >
          <motion.div
            variants={textVariant(1.1)}
            className="flex flex-col justify-left items-left paddings mt-6 sm:mt-0 text-neutral"
          >
            <h2 className="krona-one text-2xl font-bold sm:text-3xl md:text-6xl leading-none drop-shadow-[2px_1.2px_1.2px_rgba(255,245,217)]">
              JULIO
            </h2>
            <h1 className="krona-one text-3xl font-semibold sm:mt-1 sm:text-5xl md:text-7xl  drop-shadow-[4px_1.2px_1.2px_rgba(255,245,217)]">
              VELEZMORO
            </h1>
            <p className="krona-one text-xl mt-3 font-bold sm:text-2xl md:text-3xl drop-shadow-[2px_1.2px_1.2px_rgba(255,245,217)]">
              Full Stack Developer
            </p>
          </motion.div>
          <motion.div
            variants={textVariant(1.2)}
            className="flex justify-left items-center paddings"
          >
            <HeroList />
          </motion.div>
        </motion.div>

        <motion.div
          variants={slideIn('right', 'tween', 0.2, 1)}
          className={`relative z-20 h-[50vh] w-full bg-accent sm:h-screen sm:overflow-hidden`}
        >
          <Image
            src={infoImage}
            alt="Julio Velezmoro holding a giant chair"
            className="absolute h-[65vh] w-auto bottom-16 left-0 sm:z-10 sm:-left-4 sm:-bottom-12 sm:h-screen sm:w-[40vw]"
            priority
          />
          <div className="absolute bottom-0 left-0 w-screen h-[15vh] bg-neutral" />
        </motion.div>
        <div className="absolute bottom-0 left-0 w-[50vw] h-[15vh] bg-neutral z-30"></div>
      </motion.div>
    </section>
  );
};

export default Hero;
