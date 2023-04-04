import { ComponentMeta, ComponentStory } from '@storybook/react';
import Three, { IThree } from '../../projects/three/Three';
import { mockThreeProps } from '../../projects/three/Three.mocks';

export default {
  title: 'templates/Three',
  component: Three,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {},
} as ComponentMeta<typeof Three>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof Three> = (args) => <Three {...args} />;

export const Base = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args

Base.args = {
  ...mockThreeProps.base,
} as IThree;
