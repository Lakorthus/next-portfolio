import Frame from '../../../public/frame.png';
import { IHomeCard } from './HomeCard';

const base: IHomeCard = {
  id: '1',
  imgUrl: Frame,
  title: 'Title',
  index: 1,
  active: 'active',
  handleClick: () => {},
};

export const mockHomeCardProps = {
  base,
};
