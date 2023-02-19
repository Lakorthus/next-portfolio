import { ComponentMeta, ComponentStory } from '@storybook/react';
import AboutList, { IAboutList } from './AboutList';
import { mockAboutListProps } from './AboutList.mocks';

export default {
  title: 'components/AboutList',
  component: AboutList,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {},
} as ComponentMeta<typeof AboutList>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof AboutList> = (args) => (
  <AboutList {...args} />
);

export const Base = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args

Base.args = {
  ...mockAboutListProps.base,
} as IAboutList;
