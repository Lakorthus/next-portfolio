import { ComponentMeta, ComponentStory } from '@storybook/react';
import Navegation, { INavegation } from './Navegation';
import { mockNavegationProps } from './Navegation.mocks';

export default {
  title: 'navegationList/Navegation',
  component: Navegation,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {},
} as ComponentMeta<typeof Navegation>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof Navegation> = (args) => (
  <Navegation {...args} />
);

export const Base = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args

Base.args = {
  ...mockNavegationProps.base,
} as INavegation;
