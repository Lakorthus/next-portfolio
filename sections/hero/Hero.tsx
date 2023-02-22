'use client';
import { motion } from 'framer-motion';
import { Carousel, NeonCard } from '../../components';
import { slideIn, staggerContainer, textVariant } from '../../utils/motion';
export interface IHero {}

const Hero: React.FC<IHero> = () => {
  return (
    <section id="hero" className={`yPaddings pl-16 md:pl-32  lg:pl-72`}>
      <div className="gradient-02 z-0" />

      <motion.div
        variants={staggerContainer(0.1, 0.1)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.25 }}
        className={`innerWidth mx-auto flex flex-col`}
      >
        <div className="flex justify-center items-center flex-col relative z-10">
          <motion.div variants={textVariant(1.1)} className={`heroHeading`}>
            <h1>Juli</h1>
            <div className={`heroOText`} />
          </motion.div>
          <motion.div
            variants={textVariant(1.2)}
            className="flex flex-row justify-center items-center"
          >
            <h1 className={`heroHeading`}>Velez</h1>
            <h1 className={`heroHeading`}>Moro</h1>
          </motion.div>
        </div>
        {/* this will be selfclosing as is only for the gradient */}
        <motion.div
          variants={slideIn('right', 'tween', 0.2, 1)}
          className="relative right-0 w-full "
        >
          <NeonCard />
          <Carousel />
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Hero;
