import { ComponentMeta, ComponentStory } from '@storybook/react';
import NavButton, { INavButton } from './NavButton';
import { mockNavButtonProps } from './NavButton.mocks';

export default {
  title: 'navigation/NavButton',
  component: NavButton,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {},
} as ComponentMeta<typeof NavButton>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof NavButton> = (args) => (
  <NavButton {...args} />
);

export const Base = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args

Base.args = {
  ...mockNavButtonProps.base,
} as INavButton;
