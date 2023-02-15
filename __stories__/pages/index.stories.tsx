import { ComponentMeta, ComponentStory } from '@storybook/react';
import Home from '../../app/page';

export default {
  title: 'app/Home',
  component: Home,
  argTypes: {},
} as ComponentMeta<typeof Home>;

const Template: ComponentStory<typeof Home> = (args: any) => <Home {...args} />;

export const Base = Template.bind({});
