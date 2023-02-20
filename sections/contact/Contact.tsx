'use client';
import { motion } from 'framer-motion';
import Image from 'next/image';
import { fadeIn, staggerContainer, textVariant2 } from '../../utils/motion';

export interface IContact {}

const Contact: React.FC<IContact> = () => {
  return (
    <section
      id="contact"
      className="paddings relative z-10 flexCenter flex-col min-h-[75vh]"
    >
      <motion.h2
        variants={textVariant2}
        initial="hidden"
        whileInView="show"
        className={`my-4 font-bold md:text-[40px] text-[34px] text-white md:my-8`}
      >
        Contact
      </motion.h2>

      <motion.div
        variants={staggerContainer(0.1, 0.1)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.25 }}
        className={`innerWidth mx-auto flex flex-col`}
      >
        <motion.div
          variants={fadeIn('up', 'tween', 0.3, 1)}
          className="relative mt-[68px] flex w-full h-[550px]"
        >
          <Image
            src="/map.png"
            alt="map"
            width={640}
            height={550}
            className="w-full h-full object-cover"
            priority
          />
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Contact;
