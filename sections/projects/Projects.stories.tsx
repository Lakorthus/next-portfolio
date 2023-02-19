import { ComponentMeta, ComponentStory } from '@storybook/react';
import Projects, { IProjects } from './Projects';
import { mockProjectsProps } from './Projects.mocks';

export default {
  title: 'sections/Projects',
  component: Projects,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {},
} as ComponentMeta<typeof Projects>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof Projects> = (args) => (
  <Projects {...args} />
);

export const Base = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args

Base.args = {
  ...mockProjectsProps.base,
} as IProjects;
