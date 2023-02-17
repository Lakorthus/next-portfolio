import { motion } from 'framer-motion';
import { toggleSvgVariant } from '../../utils/motion';

export interface IMenuToggle {
  toggle?: () => void;
}

const Path = (props: any) => (
  <motion.path
    fill="transparent"
    strokeWidth="3"
    stroke={'#fff'}
    strokeLinecap="round"
    {...props}
  />
);

const MenuToggle: React.FC<IMenuToggle> = ({ toggle }) => {
  return (
    <button className={`menuToggle`} onClick={toggle}>
      <svg width="23" height="23" viewBox="0 0 23 23">
        <Path variants={toggleSvgVariant.one} />
        <Path
          d="M 2 9.423 L 20 9.423"
          variants={toggleSvgVariant.two}
          transition={{ duration: 0.1 }}
        />
        <Path variants={toggleSvgVariant.three} />
      </svg>
    </button>
  );
};

export default MenuToggle;
