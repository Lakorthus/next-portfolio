'use client';
import { motion } from 'framer-motion';
import Image from 'next/image';
import {
  fadeIn,
  imageMe,
  staggerContainer,
  textVariant2,
} from '../../utils/motion';
import './contact.scss';

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
        className={`my-4 font-bold md:text-[40px] text-[34px] text-white md:my-8 tracking-[15px]`}
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
        <motion.div
          variants={imageMe('left')}
          className={`absolute top-[50%] left-[50%] z-20`}
        >
          <div className="letter-image">
            <div className="animated-mail">
              <div className="back-fold"></div>
              <div className="letter">
                <div className="letter-border"></div>
                <button className="contact-btn btn btn-secondary text-white mt-2">
                  Get in touch!
                </button>
                <div className="letter-context"></div>
              </div>
              <div className="top-fold"></div>
              <div className="body"></div>
              <div className="left-fold"></div>
            </div>
            <div className="shadow"></div>
          </div>
        </motion.div>
        <div className="center table w-full animate-pulse h-40 z-0">
          <div className="monitor bg-neutral center">
            <p className="text text-secondary">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
          </div>
        </div>
        <div className="gradient-03 z-10" />
      </motion.div>
    </section>
  );
};

export default Contact;
