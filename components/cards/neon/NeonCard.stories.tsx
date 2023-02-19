import { ComponentMeta, ComponentStory } from '@storybook/react';
import NeonCard, { INeonCard } from './NeonCard';
import { mockNeonCardProps } from './NeonCard.mocks';

export default {
  title: 'cards/NeonCard',
  component: NeonCard,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {},
} as ComponentMeta<typeof NeonCard>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof NeonCard> = (args) => (
  <NeonCard {...args} />
);

export const Base = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args

Base.args = {
  ...mockNeonCardProps.base,
} as INeonCard;
