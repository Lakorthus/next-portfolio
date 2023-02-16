'use client';
import {
  faCodepen,
  faGithub,
  faLinkedin,
  faTwitter,
} from '@fortawesome/free-brands-svg-icons';
import {
  faEnvelope,
  faHome,
  faSuitcase,
  faUser,
} from '@fortawesome/free-solid-svg-icons';
import { motion } from 'framer-motion';
import NavButton from '../../buttons/menuItem/NavButton';
import { navigationVariants } from '../../utils/motion';

export interface INavigation {}

const Navigation: React.FC<INavigation> = () => {
  return (
    <>
      <motion.ul variants={navigationVariants}>
        <NavButton faIcon={faEnvelope} path={'/'} colorIndex={1} />
        <NavButton faIcon={faHome} path={'/'} colorIndex={2} />
        <NavButton faIcon={faSuitcase} path={'/'} colorIndex={3} />
        <NavButton faIcon={faUser} path={'/'} colorIndex={4} />
        <NavButton faIcon={faCodepen} path={'/'} colorIndex={5} />
        <NavButton faIcon={faGithub} path={'/'} colorIndex={6} />
        <NavButton faIcon={faLinkedin} path={'/'} colorIndex={7} />
        <NavButton faIcon={faTwitter} path={'/'} colorIndex={8} />
      </motion.ul>
    </>
  );
};

export default Navigation;
