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
        initial={isLoading ? false : true}
        animate={isOpen || isLoading ? 'closed' : 'open'}
      >
        <motion.div className={`sidebarBg `} variants={sidebarVariant} />

        <MenuToggle toggle={() => toggleOpen()} />
        <Navigation className={`${isOpen ? `hidden` : ``}`} />
      </motion.nav>
    </header>
  );
};

export default Header;
