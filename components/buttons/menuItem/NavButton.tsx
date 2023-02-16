'use client';
import { IconProp } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { navButtonVariants } from '../../utils/motion';

export interface INavButton {
  faIcon: IconProp;
  path: string | '/';
  classname?: string;
  target?: boolean;
  colorIndex: number;
}

const colors = [
  '#FF008C',
  '#D309E1',
  '#9C1AFF',
  '#7700FF',
  '#4400FF',
  '#FF008C',
  '#D309E1',
  '#9C1AFF',
  '#4400FF',
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
      variants={navButtonVariants}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.95 }}
      className="bg-slate-100"
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
