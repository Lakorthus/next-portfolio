import cartoon1 from '../../../public/cartoon1.jpg';
import { IHomeCard } from './HomeCard';

const base: IHomeCard = {
  id: '1',
  imgUrl: cartoon1,
  title: 'Title',
  index: 1,
  active: 'active',
  handleClick: () => {},
};

export const mockHomeCardProps = {
  base,
};
