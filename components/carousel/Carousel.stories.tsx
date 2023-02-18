import { ComponentMeta, ComponentStory } from '@storybook/react';
import Carousel, { ICarousel } from './Carousel';
import { mockCarouselProps } from './Carousel.mocks';

export default {
  title: 'components/Carousel',
  component: Carousel,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {},
} as ComponentMeta<typeof Carousel>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof Carousel> = (args) => (
  <Carousel {...args} />
);

export const Base = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args

Base.args = {
  ...mockCarouselProps.base,
} as ICarousel;
