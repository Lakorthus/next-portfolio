'use client';
import {
  BsEnvelopeFill,
  BsFillCloudArrowDownFill,
  BsGithub,
  BsHouseFill,
  BsLinkedin,
  BsTwitter,
} from 'react-icons/bs';
import { FaSuitcase, FaUserAlt } from 'react-icons/fa';

import { motion } from 'framer-motion';
import { navigationVariants } from '../../../utils/motion';
import NavButton from '../../buttons/navButton/NavButton';

export interface INavigation {
  className?: string;
}

const Navigation: React.FC<INavigation> = ({ className }) => {
  return (
    <>
      <motion.div
        className={`menu menuMenuItem  ${className}`}
        variants={navigationVariants}
      >
        <div className="absolute w-full inset-0 gradient-01" />

        <NavButton placeholder={'Home'} faIcon={<BsHouseFill />} path={'/'} />
        <NavButton
          placeholder={'About'}
          faIcon={<FaUserAlt />}
          path={'/about'}
        />
        <NavButton
          placeholder={'Projects'}
          faIcon={<FaSuitcase />}
          path={'/portfolio'}
        />
        <NavButton
          placeholder={'Contact'}
          faIcon={<BsEnvelopeFill />}
          path={'/contact'}
        />

        <NavButton
          placeholder={'Github'}
          faIcon={<BsGithub />}
          path={'https://github.com/Lakorthus'}
          target
        />
        <NavButton
          placeholder={'LinkedIn'}
          faIcon={<BsLinkedin />}
          path={'https://www.linkedin.com/in/jv-frontend-developer/'}
          target
        />
        <NavButton
          placeholder={'Twitter'}
          faIcon={<BsTwitter />}
          path={'https://twitter.com/Lakorthus'}
          target
        />
        <NavButton
          placeholder={'Download CV'}
          faIcon={<BsFillCloudArrowDownFill />}
          path={'/JulioCV.pdf'}
          download
          target
        />
      </motion.div>
    </>
  );
};

export default Navigation;
