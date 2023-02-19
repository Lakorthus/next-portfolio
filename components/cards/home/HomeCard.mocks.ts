import { IHomeCard } from './HomeCard';

const base: IHomeCard = {
  id: '1',
  imgUrl: 'placeimg.com/640/480/any',
  title: 'Title',
  index: 1,
  active: 'active',
  handleClick: () => {},
};

export const mockHomeCardProps = {
  base,
};
