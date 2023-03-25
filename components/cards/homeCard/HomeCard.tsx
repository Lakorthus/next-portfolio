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
        active === id ? 'md:flex-[3.5] flex-[10]' : 'md:flex-[1.5] flex-[5]'
      } flex items-center justify-center min-w-[170px] h-[500px] transition-[flex] duration-[0.7s] ease-out-flex`}
      onClick={() => handleClick(id)}
    >
      <Image
        src={imgUrl}
        alt="image-project"
        className={`absolute w-auto min-h-20 object-contain rounded-[24px] cursor-pointer ${
          active === id ? 'glass' : ''
        }`}
        width={500}
        height={500}
        priority
      />
      {active !== id ? (
        <h3 className="absolute font-semibold p-2 md:text-[26px] text-[18px] z-0 lg:bottom-20 md:rotate-[-90deg] md:origin-[0,0] text-info">
          {title}
        </h3>
      ) : (
        <div className="absolute bottom-0 p-8 grid grid-cols-2 place-items-center z-10 text-info text-md md:text-xl ">
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
