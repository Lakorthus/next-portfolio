import { ComponentMeta, ComponentStory } from '@storybook/react';
import TabProjects, { ITabProjects } from './TabProjects';
import { mockTabProjectsProps } from './TabProjects.mocks';

export default {
  title: 'navigation/TabProjects',
  component: TabProjects,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {},
} as ComponentMeta<typeof TabProjects>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof TabProjects> = (args) => (
  <TabProjects {...args} />
);

export const Base = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args

Base.args = {
  ...mockTabProjectsProps.base,
} as ITabProjects;
