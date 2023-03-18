'use client';
import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { AboutList } from '../../components/';
import avatar from '../../public/avatar.png';
import speach from '../../public/speach.png';

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
        className={`my-4 font-bold md:text-[40px] text-[34px] md:my-8 tracking-[15px]`}
      >
        About me
      </motion.h2>
      <motion.div
        variants={staggerContainer(0.1, 0.1)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.25 }}
        className={`innerWidth mx-auto flex items-center justify-around flex-col md:flex-row`}
      >
        <Link href="/about" className="flex-1">
          <motion.div
            variants={imageMe('left')}
            className={`w-full h-96 flexCenter group`}
          >
            <Image
              src={avatar}
              alt="get-started"
              className="w-auto h-96 object-contain group-hover:hidden z-40"
              width={500}
              height={500}
              priority
            />
            <Image
              src={speach}
              alt="get-started"
              className="w-auto h-96 object-contain group-hover:block hidden"
              width={500}
              height={500}
              priority
            />
          </motion.div>
        </Link>
        <div
          className={`flex-1 min-h-[24rem] grid grid-row-3 gap-6 self-center justify-self-stretch`}
        >
          <AboutList
            text={'Took a leap of faith at 26 and moved to the UK.'}
            number={1}
          />
          <AboutList
            text={'Discovered a true passion for coding at School of Code.'}
            number={2}
          />
          <AboutList
            text={
              'Strives to positively impact as many people as possible in life.'
            }
            number={3}
          />
        </div>
      </motion.div>
    </section>
  );
};

export default About;
