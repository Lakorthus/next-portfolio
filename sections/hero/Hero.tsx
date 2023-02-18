'use client';
import { motion } from 'framer-motion';
import Image from 'next/image';
import { slideIn, staggerContainer, textVariant } from '../../utils/motion';
export interface IHero {}

const Hero: React.FC<IHero> = () => {
  return (
    <section className={`yPaddings pl-16 md:pl-32  lg:pl-72`}>
      <motion.div
        variants={staggerContainer(0.1, 0.1)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.25 }}
        className={`innerWidth mx-auto flex flex-col`}
      >
        <motion.div
          variants={slideIn('right', 'tween', 0.2, 1)}
          className="relative right-0 w-full "
        >
          {/* this will be selfclosing as is only for the gradient */}
          <div className="absolute w-full right-0 h-[300px] hero-gradient rounded-tl-[140px] z-[0] -top-[30px] " />

          <div className="carousel relative md:h-[500px] h-[350px] carousel-end object-cover rounded-tl-[140px] z-10 ">
            <div className="carousel-item w-auto ">
              <Image
                src="https://placeimg.com/640/480/any"
                alt="Drink"
                width={640}
                height={480}
                className="w-full sm:h-[500px] h-[350px] object-cover  z-10 relative bg-neutral"
                priority
              />
            </div>
            <div className="carousel-item w-auto">
              <Image
                src="https://placeimg.com/640/480/any"
                alt="Drink"
                width={640}
                height={480}
                className="w-full sm:h-[500px] h-[350px] object-cover  z-10 relative bg-neutral"
                priority
              />
            </div>
            <div className="carousel-item w-auto">
              <Image
                src="https://placeimg.com/640/480/any"
                alt="Drink"
                width={640}
                height={480}
                className="w-full sm:h-[500px] h-[350px] object-cover  z-10 relative bg-neutral"
                priority
              />
            </div>
            <div className="carousel-item w-auto">
              <Image
                src="https://placeimg.com/640/480/any"
                alt="Drink"
                width={640}
                height={480}
                className="w-full sm:h-[500px] h-[350px] object-cover  z-10 relative bg-neutral"
                priority
              />
            </div>
            <div className="carousel-item w-auto">
              <Image
                src="https://placeimg.com/640/480/any"
                alt="Drink"
                width={640}
                height={480}
                className="w-full sm:h-[500px] h-[350px] object-cover  z-10 relative bg-neutral"
                priority
              />
            </div>
            <div className="carousel-item w-auto">
              <Image
                src="https://placeimg.com/640/480/any"
                alt="Drink"
                width={640}
                height={480}
                className="w-full sm:h-[500px] h-[350px] object-cover  z-10 relative bg-neutral"
                priority
              />
            </div>
            <div className="carousel-item">
              <Image
                src="https://placeimg.com/640/480/any"
                alt="Drink"
                width={640}
                height={480}
                className="w-full sm:h-[500px] h-[350px] object-cover  z-10 relative bg-neutral"
                priority
              />
            </div>
          </div>
        </motion.div>
        <div className="flex mt-8 justify-center items-center flex-col relative z-10">
          <motion.h1 variants={textVariant(1.1)} className={`heroHeading`}>
            Juli
            <div className={`heroOText`} />
          </motion.h1>
          <motion.div
            variants={textVariant(1.2)}
            className="flex flex-row justify-center items-center"
          >
            <h1 className={`heroHeading`}>Velez</h1>
            <h1 className={`heroHeading`}>Moro</h1>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
};

export default Hero;
