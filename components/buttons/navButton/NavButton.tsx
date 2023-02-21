'use client';
import { IconProp } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { navButtonVariants } from '../../../utils/motion';

export interface INavButton {
  faIcon: IconProp;
  path: string | '/';
  placeholder?: string;
  target?: boolean;
  colorIndex: number;
}

const colors = [
  '#fff',
  '#fff',
  '#fff',
  '#fff',
  '#fff',
  '#fff',
  '#fff',
  '#fff',
  '#fff',
];

const NavButton: React.FC<INavButton> = ({
  faIcon,
  path,
  placeholder,
  target,
  colorIndex,
}) => {
  const style = {
    border: `2px solid ${colors[colorIndex]}`,
  };
  const text = {
    color: `${colors[colorIndex]}`,
  };

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
        {...(target ? { target: '_blank', rel: 'noreferrer' } : {})}
      >
        <div
          className={`menuIcon glass flex items-center justify-center`}
          style={style}
        >
          <FontAwesomeIcon icon={faIcon} style={text} />
        </div>
        <div
          className={`placeHolder glass w-[8rem] flex items-center justify-center`}
          style={style}
        >
          <h2 style={text}>{placeholder}</h2>
        </div>
      </Link>
    </motion.div>
  );
};

export default NavButton;
