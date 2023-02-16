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

const variants = {
  open: {
    transition: { staggerChildren: 0.07, delayChildren: 0.2 },
  },
  closed: {
    transition: { staggerChildren: 0.05, staggerDirection: -1 },
  },
};
export interface INavegation {
  i?: number;
}

const itemIds = [1, 2, 3, 4, 6, 7, 8];
const icons = [
  faEnvelope,
  faHome,
  faSuitcase,
  faUser,
  faCodepen,
  faGithub,
  faLinkedin,
  faTwitter,
];

const Navegation: React.FC<INavegation> = () => {
  return (
    <>
      <motion.ul variants={variants}>
        {itemIds.map((i) => (
          <NavButton faIcon={icons[i]} path={'/'} colorIndex={i} key={i} />
        ))}
      </motion.ul>
    </>
  );
};

export default Navegation;
