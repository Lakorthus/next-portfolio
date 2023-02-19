import { ComponentMeta, ComponentStory } from '@storybook/react';
import HomeCard, { IHomeCard } from './HomeCard';
import { mockHomeCardProps } from './HomeCard.mocks';

export default {
  title: 'templates/HomeCard',
  component: HomeCard,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {},
} as ComponentMeta<typeof HomeCard>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof HomeCard> = (args) => (
  <HomeCard {...args} />
);

export const Base = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args

Base.args = {
  ...mockHomeCardProps.base,
} as IHomeCard;
