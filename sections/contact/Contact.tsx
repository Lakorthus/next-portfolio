'use client';
import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';

import { fadeIn, staggerContainer } from '../../utils/motion';

export interface IContact {}

const Contact: React.FC<IContact> = () => {
  return (
    <section
      id="contact"
      className="paddings relative z-10 flexCenter flex-col min-h-[95vh]"
    >
      <motion.div
        variants={staggerContainer(0.1, 0.1)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.25 }}
        className={`innerWidth mx-auto flex flex-col`}
      >
        <motion.div
          variants={fadeIn('up', 'tween', 0.3, 1)}
          className="relative mt-3 flex-1 flexCenter w-full min-h-[30vh]"
        >
          <Image
            src="/map.png"
            alt="contact map"
            width={640}
            height={550}
            className="w-full h-auto object-cover absolute"
            priority
          />
          <div className="table w-full h-40  animate-pulse z-0">
            <div className="shadow-inset bg-neutral absolute top-0 left-0 right-0 bottom-0 m-auto w-full h-20 flex items-center justify-center overflow-hidden whitespace-nowrap monitor ">
              <p className="monitorText">
                Build with: JavaScript, React, Next.js, TypeScript, TailwindCSS,
                Framer Motion
              </p>
            </div>
          </div>
        </motion.div>
        <Link href="./contact" className="btn btn-lg btn-primary z-20">
          Contact me
        </Link>
      </motion.div>

      <div className="gradient-03 z-10" />
    </section>
  );
};

export default Contact;
