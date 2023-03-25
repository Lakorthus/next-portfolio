'use client';
import { motion } from 'framer-motion';
import Image from 'next/image';
import { HeroList } from '../../components';
import infoImage from '../../public/vschair.png';
import {
  imageMe,
  slideIn,
  staggerContainer,
  textVariant,
} from '../../utils/motion';

import Link from 'next/link';
import {
  FaBootstrap,
  FaGulp,
  FaNode,
  FaNpm,
  FaReact,
  FaSass,
} from 'react-icons/fa';
import {
  SiCss3,
  SiFigma,
  SiFirebase,
  SiHtml5,
  SiJavascript,
  SiMongodb,
  SiPostgresql,
  SiSass,
  SiTailwindcss,
  SiTypescript,
} from 'react-icons/si';

export interface IHero {}

const Hero: React.FC<IHero> = () => {
  const icons = [
    {
      icon: <FaReact />,
    },
    {
      icon: <SiPostgresql />,
    },
    {
      icon: <SiJavascript />,
    },
    {
      icon: <SiFirebase />,
    },
    {
      icon: <SiTailwindcss />,
    },
    {
      icon: <SiSass />,
    },
    {
      icon: <FaSass />,
    },
    {
      icon: <FaBootstrap />,
    },
    {
      icon: <FaGulp />,
    },
    {
      icon: <FaNpm />,
    },
    {
      icon: <SiMongodb />,
    },
    {
      icon: <SiHtml5 />,
    },
    {
      icon: <SiCss3 />,
    },
    {
      icon: <FaNode />,
    },
    {
      icon: <SiTypescript />,
    },
    {
      icon: <SiFigma />,
    },
  ];
  return (
    <section id="info">
      <motion.div
        variants={staggerContainer(0.05, 0.05)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.25 }}
        className={`h-screen grid grid-cols-1 grid-rows-1 align-middle bg-neutral sm:grid-cols-2 overflow-hidden relative`}
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
          <div className="hidden absolute bottom-0 w-full h-[15vh] bg-neutral sm:grid">
            <div className="table w-full h-full animate-pulse z-0 relative">
              <div className="shadow-inset inline-flex items-center bg-neutral absolute top-0 left-0 right-0 bottom-0 m-auto w-full h-20  justify-center overflow-hidden whitespace-nowrap monitor ">
                <p className="monitorText absolute text-2xl text-info opacity-60">
                  Build with: JavaScript, React, Next.js, TypeScript,
                  TailwindCSS, Framer Motion
                </p>
              </div>
            </div>
          </div>
        </motion.div>
        <motion.div
          variants={imageMe('left')}
          className="absolute w-screen flexCenter z-30 sm:bottom-[38%] "
        >
          <Link
            href={'./contact'}
            className="hidden krona-one sm:flexCenter text-center text-xl font-bold w-[15vh] h-[15vh] rounded-full bg-info tracking-[0.5rem] text-accent -rotate-30"
          >
            HIRE
            <br />
            ME
          </Link>
        </motion.div>
        <motion.div
          variants={slideIn('left', 'tween', 0.2, 1)}
          className="absolute bottom-0 left-0 w-screen h-[15vh] bg-neutral z-30 col-auto xPaddings grid sm:w-[50vw]"
        >
          <div>
            {icons.map((icon, idx) => (
              <div
                key={idx}
                className="inline-flex justify-center items-center w-10 h-10 mx-2 my-2 text-2xl text-info"
              >
                {icon.icon}
              </div>
            ))}
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Hero;
