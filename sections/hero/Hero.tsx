'use client';
import { motion } from 'framer-motion';
import Image from 'next/image';
import infoImage from '../../public/vschair.png';

import { slideIn, staggerContainer, textVariant } from '../../utils/motion';
export interface Iinfo {}

const info: React.FC<Iinfo> = () => {
  return (
    //yPaddings pl-16 md:pl-32  lg:pl-72
    //
    <section id="info">
      <motion.div
        variants={staggerContainer(0.1, 0.1)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.25 }}
        className={`h-screen grid grid-cols-1 grid-rows-1 align-middle bg-secondary md:grid-cols-2 overflow-hidden`}
      >
        <div className="relative innerWidth mx-auto flex flex-col md:pt-32 z-20">
          <motion.div
            variants={textVariant(1.1)}
            className="flex flex-col justify-left items-left paddings"
          >
            <h2 className="krona-one text-2xl font-bold text-info md:text-7xl">
              Julio
            </h2>
            <h1 className="krona-one text-4xl font-bold text-info md:text-8xl md:-mt-1">
              Velezmoro
            </h1>
            <p className="krona-one text-xl font-bold text-info md:text-3xl">
              Full Stack Developer
            </p>
          </motion.div>
          <motion.div
            variants={textVariant(1.2)}
            className="flex justify-left items-center paddings"
          ></motion.div>
        </div>

        <motion.div
          variants={slideIn('right', 'tween', 0.2, 1)}
          className={`relative z-10 h-[50vh] w-full bg-accent md:h-screen md:overflow-hidden`}
        >
          <Image
            src={infoImage}
            alt="Julio Velezmoro holding a giant chair"
            className="absolute h-[65vh] w-auto bottom-16 left-0 md:z-10 md:-left-4 md:-bottom-12 md:h-screen md:w-[40vw]"
            priority
          />
          <div className="absolute bottom-0 left-0 w-screen h-[15vh] bg-neutral" />
        </motion.div>
        <div className="absolute bottom-0 left-0 w-screen h-[15vh] bg-neutral "></div>
      </motion.div>
    </section>
  );
};

export default info;
