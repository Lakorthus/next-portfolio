'use client';
import {
  faGithub,
  faLinkedin,
  faTwitter,
} from '@fortawesome/free-brands-svg-icons';
import {
  faEnvelope,
  faFileDownload,
  faHome,
  faSuitcase,
  faUser,
} from '@fortawesome/free-solid-svg-icons';
import { motion } from 'framer-motion';
import NavButton from '../../buttons/menuItem/NavButton';
import { navigationVariants } from '../../../utils/motion';

export interface INavigation {
  className?: string;
}

const Navigation: React.FC<INavigation> = ({ className }) => {
  return (
    <>
      <motion.ul
        className={`menu menuMenuItem  ${className}`}
        variants={navigationVariants}
      >
        <div className="absolute w-full inset-0 gradient-01" />

        <NavButton
          placeholder={'Home'}
          faIcon={faHome}
          path={'/'}
          colorIndex={2}
        />
        <NavButton
          placeholder={'About'}
          faIcon={faUser}
          path={'/'}
          colorIndex={4}
        />
        <NavButton
          placeholder={'Portfolio'}
          faIcon={faSuitcase}
          path={'/'}
          colorIndex={3}
        />
        <NavButton
          placeholder={'Contact'}
          faIcon={faEnvelope}
          path={'/'}
          colorIndex={1}
        />

        <NavButton
          placeholder={'Github'}
          faIcon={faGithub}
          path={'/'}
          colorIndex={6}
        />
        <NavButton
          placeholder={'Linked In'}
          faIcon={faLinkedin}
          path={'/'}
          colorIndex={7}
        />
        <NavButton
          placeholder={'Twitter'}
          faIcon={faTwitter}
          path={'/'}
          colorIndex={8}
        />
        <NavButton
          placeholder={'Download CV'}
          faIcon={faFileDownload}
          path={'/'}
          colorIndex={5}
        />
      </motion.ul>
    </>
  );
};

export default Navigation;
