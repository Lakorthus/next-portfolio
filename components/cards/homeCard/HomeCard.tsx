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
        active === id ? 'lg:flex-[3.5] flex-[10]' : 'lg:flex-[1.5] flex-[5]'
      } flex items-center justify-center min-w-[170px] h-[500px] transition-[flex] duration-[0.7s] ease-out-flex`}
      onClick={() => handleClick(id)}
    >
      <Image
        src={imgUrl}
        alt="image-project"
        className={`absolute mb-[8rem] w-full object-contain rounded-[24px] cursor-pointer ${
          active === id ? 'glass' : ''
        }`}
        width={500}
        height={500}
        priority
      />

      {active !== id ? (
        <h3 className="font-semibold p-2 sm:text-[32px] text-[26px] bg-base-100 border-primary border-2 absolute z-0 lg:border-none lg:bg-transparent lg:bottom-20 lg:rotate-[-90deg] lg:origin-[0,0] cursor-pointer">
          {title}
        </h3>
      ) : (
        <div className="absolute bottom-0 p-8 flexCenter w-full flex-col bg-base-100 rounded-b-[24px] cursor-pointer z-10">
          <h2 className="mt-[14px] font-semibold sm:text-[22px] text-[18px]">
            {title}
          </h2>
          <Link
            href={'/portfolio'}
            className="mt-2 text-[14px] btn btn-primary"
          >
            Click to see more about this project
          </Link>
        </div>
      )}
    </motion.div>
  );
};

export default HomeCard;
