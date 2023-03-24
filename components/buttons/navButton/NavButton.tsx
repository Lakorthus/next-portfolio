'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { navButtonVariants } from '../../../utils/motion';

export interface INavButton {
  faIcon?: any;
  path: string | '/';
  placeholder?: string;
  target?: boolean;
  download?: boolean;
}

const NavButton: React.FC<INavButton> = ({
  faIcon,
  path,
  placeholder,
  target,
  download,
}) => {
  return (
    <motion.div
      variants={navButtonVariants}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.95 }}
      className={`hidden sm:block mb-4  hover:bg-primary hover:bg-opacity-30 rounded-full p-4`}
    >
      <Link
        className={`w-full h-auto flex flex-col items-center justify-start text-neutral ani hover:animate-spin-slow`}
        href={path}
        {...(download ? { locale: false } : {})}
        {...(target ? { target: '_blank', rel: 'noreferrer' } : {})}
      >
        <span
          className={`text-xl lg:text-3xl drop-shadow-[2px_1.2px_1.2px_rgba(255,245,217)]`}
        >
          {faIcon}
        </span>

        <h2
          className={`flex-1 drop-shadow-[2px_1.2px_1.2px_rgba(255,245,217)]`}
        >
          {placeholder}
        </h2>
      </Link>
    </motion.div>
  );
};

export default NavButton;
