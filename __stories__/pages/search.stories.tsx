import { ComponentMeta, ComponentStory } from '@storybook/react';
import Results from '../../pages/results';

export default {
  title: 'pages/Results',
  component: Results,
  argTypes: {},
} as ComponentMeta<typeof Results>;

const Template: ComponentStory<typeof Results> = (args: any) => (
  <Results {...args} />
);

export const Base = Template.bind({});
