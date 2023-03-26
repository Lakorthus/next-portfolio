'use client';

import { motion } from 'framer-motion';
import Image, { StaticImageData } from 'next/image';
import Link from 'next/link';

import { fadeIn } from '../../../utils/motion';
export interface IHomeCard {
  id: string;
  imgUrl: StaticImageData;
  title: string;

  index: number;
  active: string;
  // eslint-disable-next-line no-unused-vars
  handleClick: (id: any) => void;
}

const HomeCard: React.FC<IHomeCard> = ({
  id,
  imgUrl,
  title,
  index,
  active,
  handleClick,
}) => {
  return (
    <motion.div
      variants={fadeIn('right', 'spring', index * 0.5, 0.75)}
      className={`relative ${
        active === id ? 'sm:flex-[3.5] flex-[10]' : 'sm:flex-[1.5] flex-[5]'
      } flex items-center justify-center min-h-[200px] sm:min-h-[500px] transition-[flex] duration-[0.7s] ease-out-flex`}
      onClick={() => handleClick(id)}
    >
      <Image
        src={imgUrl}
        alt="image-project"
        className={`absolute h-auto w-full object-contain rounded-[24px] cursor-pointer ${
          active === id ? 'glass' : ''
        }`}
        priority
      />
      {active !== id ? (
        <h3 className="absolute font-semibold p-2 text-lg z-0 bg-base-100 md:text-2xl md:bottom-20 md:rotate-[-90deg] sm:origin-[0,0] text-info md:bg-transparent">
          {title}
        </h3>
      ) : (
        <div className="absolute bottom-0 p-8 grid grid-cols-2 place-items-center z-10 text-info text-md sm:text-xl ">
          <h2 className="flexCenter font-semibold rounded-md bg-base-100 h-12 w-full">
            {title}
          </h2>
          <Link href={'/portfolio'} className="text-sm btn btn-primary">
            Click to see more
          </Link>
        </div>
      )}
    </motion.div>
  );
};

export default HomeCard;
