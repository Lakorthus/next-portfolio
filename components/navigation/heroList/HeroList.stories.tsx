import { ComponentMeta, ComponentStory } from '@storybook/react';
import HeroList, { IHeroList } from './HeroList';
import { mockHeroListProps } from './HeroList.mocks';

export default {
  title: 'HeroList/HeroList',
  component: HeroList,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {},
} as ComponentMeta<typeof HeroList>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof HeroList> = (args) => (
  <HeroList {...args} />
);

export const Base = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args

Base.args = {
  ...mockHeroListProps.base,
} as IHeroList;
