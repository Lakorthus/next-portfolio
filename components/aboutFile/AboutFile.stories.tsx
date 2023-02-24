import { ComponentMeta, ComponentStory } from '@storybook/react';
import AboutFile, { IAboutFile } from './AboutFile';
import { mockAboutFileProps } from './AboutFile.mocks';

export default {
  title: 'components/AboutFile',
  component: AboutFile,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {},
} as ComponentMeta<typeof AboutFile>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof AboutFile> = (args) => (
  <AboutFile {...args} />
);

export const Base = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args

Base.args = {
  ...mockAboutFileProps.base,
} as IAboutFile;
