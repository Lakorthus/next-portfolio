import { ComponentMeta, ComponentStory } from '@storybook/react';
import RootLayout from '../../app/contact/page';

export default {
  title: 'app/Contact',
  component: RootLayout,
  argTypes: {},
} as ComponentMeta<typeof RootLayout>;

const Template: ComponentStory<typeof RootLayout> = (args: any) => (
  <RootLayout {...args} />
);

export const Base = Template.bind({});
