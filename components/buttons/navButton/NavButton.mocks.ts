import { FaUserAlt } from 'react-icons/fa';
import { INavButton } from './NavButton';

const base: INavButton = {
  faIcon: FaUserAlt,
  path: '/',
  placeholder: 'GitHub',
};

export const mockNavButtonProps = {
  base,
};
