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
      className={`menuItem menuMenuItem`}
    >
      <Link
        className="w-full flex items-center justify-start"
        href={path}
        {...(download ? { locale: false } : {})}
        {...(target ? { target: '_blank', rel: 'noreferrer' } : {})}
      >
        <div
          className={`menuIcon glass flex items-center justify-center border-2 border-solid`}
        >
          {faIcon}
        </div>
        <div
          className={`placeHolder glass w-[8rem] flex items-center justify-center border-2 border-solid`}
        >
          <h2>{placeholder}</h2>
        </div>
      </Link>
    </motion.div>
  );
};

export default NavButton;
