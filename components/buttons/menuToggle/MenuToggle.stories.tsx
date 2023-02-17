import { ComponentMeta, ComponentStory } from '@storybook/react';
import MenuToggle, { IMenuToggle } from './MenuToggle';
import { mockMenuToggleProps } from './MenuToggle.mocks';

export default {
  title: 'buttons/MenuToggle',
  component: MenuToggle,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {},
} as ComponentMeta<typeof MenuToggle>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof MenuToggle> = (args) => (
  <MenuToggle {...args} />
);

export const Base = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args

Base.args = {
  ...mockMenuToggleProps.base,
} as IMenuToggle;
