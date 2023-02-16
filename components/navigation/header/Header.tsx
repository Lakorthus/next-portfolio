'use client';

import { motion, useCycle } from 'framer-motion';
import MenuToggle from '../../buttons/menuToggle/MenuToggle';
import { sidebarVariant } from '../../utils/motion';
import Navigation from '../navigationList/Navigation';

export interface IHeader extends React.ComponentPropsWithoutRef<'header'> {}

const Header: React.FC<IHeader> = ({ className, ...headerProps }) => {
  const [isOpen, toggleOpen] = useCycle(false, true);
  return (
    <header {...headerProps} className={`${className}`}>
      <motion.nav
        className={`h-screen w-[8rem] p-5 ${className} ${
          isOpen ? 'glass' : ''
        }`}
        initial={false}
        animate={isOpen ? 'open' : 'closed'}
      >
        <motion.div variants={sidebarVariant} />
        <MenuToggle toggle={() => toggleOpen()} />
        <Navigation />
      </motion.nav>
    </header>
  );
};

export default Header;
