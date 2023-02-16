'use client';

import { motion, useCycle } from 'framer-motion';
import { useEffect, useState } from 'react';
import MenuToggle from '../../buttons/menuToggle/MenuToggle';
import { sidebarVariant } from '../../utils/motion';
import Navigation from '../navigationList/Navigation';

export interface IHeader extends React.ComponentPropsWithoutRef<'header'> {}

const Header: React.FC<IHeader> = ({ className, ...headerProps }) => {
  const [isOpen, toggleOpen] = useCycle(false, true);

  //loader
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 1000);
  }, []);

  return (
    <header {...headerProps} className={`${className}`}>
      <motion.nav
        className={` ${className}`}
        initial={isLoading ? false : true}
        animate={isOpen || isLoading ? 'closed' : 'open'}
        // initial={false}
        // animate={isOpen ? 'open' : 'closed'}
      >
        <motion.div
          className={`h-screen bg-red-300`}
          variants={sidebarVariant}
        />

        <MenuToggle toggle={() => toggleOpen()} />
        <Navigation />
      </motion.nav>
    </header>
  );
};

export default Header;
