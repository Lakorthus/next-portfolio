import { ComponentMeta, ComponentStory } from '@storybook/react';
import AboutSpan, { IAboutSpan } from './AboutSpan';
import { mockAboutSpanProps } from './AboutSpan.mocks';

export default {
  title: 'components/AboutSpan',
  component: AboutSpan,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {},
} as ComponentMeta<typeof AboutSpan>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof AboutSpan> = (args) => (
  <AboutSpan {...args} />
);

export const Base = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args

Base.args = {
  ...mockAboutSpanProps.base,
} as IAboutSpan;
