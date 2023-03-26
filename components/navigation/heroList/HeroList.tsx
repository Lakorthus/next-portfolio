'use client';
import {
  BsFillCloudArrowDownFill,
  BsGithub,
  BsLinkedin,
  BsTwitter,
} from 'react-icons/bs';

import { motion } from 'framer-motion';
import { navigationVariants } from '../../../utils/motion';
import NavButton from '../../buttons/navButton/NavButton';

export interface IHeroList {}

const HeroList: React.FC<IHeroList> = () => {
  const navLinks = [
    {
      placeholder: 'Github',
      faIcon: <BsGithub />,
      path: 'https://github.com/Lakorthus',
    },
    {
      placeholder: 'LinkedIn',
      faIcon: <BsLinkedin />,
      path: 'https://www.linkedin.com/in/jv-frontend-developer/',
    },
    {
      placeholder: 'Twitter',
      faIcon: <BsTwitter />,
      path: 'https://twitter.com/Lakorthus',
    },
    {
      placeholder: 'Julio CV',
      faIcon: <BsFillCloudArrowDownFill />,
      path: '/JulioCV.pdf',
      download: true,
    },
  ];
  return (
    <motion.div
      className={`flex justify-left items-center justify-between w-full h-full flex-wrap`}
      variants={navigationVariants}
    >
      {navLinks.map((link, idx) => (
        <NavButton
          key={idx}
          placeholder={link.placeholder}
          faIcon={link.faIcon}
          path={link.path}
          download={link.download}
          target
        />
      ))}
    </motion.div>
  );
};

export default HeroList;
