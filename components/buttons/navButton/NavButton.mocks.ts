import { FaUserAlt } from 'react-icons/fa';
import { INavButton } from './NavButton';

const base: INavButton = {
  faIcon: FaUserAlt,
  path: '/',
  colorIndex: 1,
  placeholder: 'GitHub',
};

export const mockNavButtonProps = {
  base,
};
