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
import { navigationVariants } from '../../../utils/motion';
import NavButton from '../../buttons/menuItem/NavButton';

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
          path={'/about'}
          colorIndex={4}
        />
        <NavButton
          placeholder={'Portfolio'}
          faIcon={faSuitcase}
          path={'/portfolio'}
          colorIndex={3}
        />
        <NavButton
          placeholder={'Contact'}
          faIcon={faEnvelope}
          path={'/contact'}
          colorIndex={1}
        />

        <NavButton
          placeholder={'Github'}
          faIcon={faGithub}
          path={'https://github.com/Lakorthus'}
          colorIndex={6}
          target
        />
        <NavButton
          placeholder={'LinkedIn'}
          faIcon={faLinkedin}
          path={'https://www.linkedin.com/in/jv-frontend-developer/'}
          colorIndex={7}
          target
        />
        <NavButton
          placeholder={'Twitter'}
          faIcon={faTwitter}
          path={'https://twitter.com/Lakorthus'}
          colorIndex={8}
          target
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
