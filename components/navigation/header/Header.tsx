'use client';

import { motion } from 'framer-motion';
import { useState } from 'react';

import { faBars } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Navegation from '../navegationList/Navegation';

export interface IHeader extends React.ComponentPropsWithoutRef<'header'> {}

const variants = {
  open: { opacity: 1, x: 0 },
  closed: { opacity: 0, x: '-100%' },
};

const Header: React.FC<IHeader> = ({ className, ...headerProps }) => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <header {...headerProps} className={`bg-primary ${className}`}>
      <FontAwesomeIcon
        icon={faBars}
        color="#ffd700"
        size="3x"
        className="hamburger-icon"
        onClick={() => setIsOpen((isOpen) => !isOpen)}
      />
      <motion.nav animate={isOpen ? 'open' : 'closed'} variants={variants}>
        <ul>
          <Navegation />
        </ul>
      </motion.nav>
    </header>
  );
};

export default Header;
