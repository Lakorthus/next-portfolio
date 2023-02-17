import { faUser } from '@fortawesome/free-solid-svg-icons';
import { INavButton } from './NavButton';

const base: INavButton = {
  faIcon: faUser,
  path: '/',
  colorIndex: 1,
  placeholder: 'GitHub',
};

export const mockNavButtonProps = {
  base,
};
