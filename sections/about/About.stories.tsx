import { ComponentMeta, ComponentStory } from '@storybook/react';
import About, { IAbout } from './About';
import { mockAboutProps } from './About.mocks';

export default {
  title: 'sections/About',
  component: About,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {},
} as ComponentMeta<typeof About>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof About> = (args) => <About {...args} />;

export const Base = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args

Base.args = {
  ...mockAboutProps.base,
} as IAbout;
