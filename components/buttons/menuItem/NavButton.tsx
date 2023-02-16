'use client';
import { IconProp } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Link from 'next/link';

import { motion } from 'framer-motion';

export interface INavButton {
  faIcon: IconProp;
  path: string | '/';
  classname?: string;
  target?: boolean;
  colorIndex: number;
}
const variants = {
  open: {
    y: 0,
    opacity: 1,
    transition: {
      y: { stiffness: 1000, velocity: -100 },
    },
  },
  closed: {
    y: 50,
    opacity: 0,
    transition: {
      y: { stiffness: 1000 },
    },
  },
};

const colors = [
  '#FF008C',
  '#D309E1',
  '#9C1AFF',
  '#7700FF',
  '#4400FF',
  '#FF008C',
  '#D309E1',
  '#9C1AFF',
];

const NavButton: React.FC<INavButton> = ({
  faIcon,
  path,
  classname,
  target,
  colorIndex,
}) => {
  const style = { border: `2px solid ${colors[colorIndex]}` };

  return (
    <motion.li
      variants={variants}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.95 }}
    >
      <div className="icon-placeholder" style={style}>
        <Link
          className="contact-link"
          href={path}
          {...(target ? { target: '_blank', rel: 'noreferrer' } : {})}
        >
          <FontAwesomeIcon
            icon={faIcon}
            color="#4d4d4e"
            className={`${classname}`}
          />
        </Link>
      </div>
      <div className="text-placeholder" style={style} />
    </motion.li>
  );
};

export default NavButton;
