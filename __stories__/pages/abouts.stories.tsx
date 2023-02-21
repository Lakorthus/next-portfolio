import { ComponentMeta, ComponentStory } from '@storybook/react';
import RootLayout from '../../app/about/page';

export default {
  title: 'app/About',
  component: RootLayout,
  argTypes: {},
} as ComponentMeta<typeof RootLayout>;

const Template: ComponentStory<typeof RootLayout> = (args: any) => (
  <RootLayout {...args} />
);

export const Base = Template.bind({});
