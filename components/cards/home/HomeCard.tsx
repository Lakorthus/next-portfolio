'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';

import { fadeIn } from '../../../utils/motion';
export interface IHomeCard {
  id: string;
  imgUrl: string;
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
        active === id ? 'lg:flex-[3.5] flex-[10]' : 'lg:flex-[0.5] flex-[2]'
      } flex items-center justify-center min-w-[170px] h-[700px] transition-[flex] duration-[0.7s] ease-out-flex cursor-pointer`}
      onClick={() => handleClick(id)}
    >
      <Image
        src={imgUrl}
        alt="image-project"
        width={640}
        height={640}
        className="absolute w-full h-full object-contain rounded-[24px]"
        priority
      />
      {active !== id ? (
        <h3 className="font-semibold sm:text-[26px] text-[18px] text-white absolute z-0 lg:bottom-20 lg:rotate-[-90deg] lg:origin-[0,0]">
          {title}
        </h3>
      ) : (
        <div className="absolute bottom-0 p-8 flexCenter w-full flex-col bg-[rgba(0,0,0,0.5)] rounded-b-[24px]">
          <h2 className="mt-[14px] font-semibold sm:text-[22px] text-[18px] text-white">
            {title}
          </h2>
          <div className="cardGradient z-10" />
        </div>
      )}
    </motion.div>
  );
};

export default HomeCard;
