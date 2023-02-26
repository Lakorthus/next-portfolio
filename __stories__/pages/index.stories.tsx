import { ComponentMeta, ComponentStory } from '@storybook/react';
import RootLayout from '../../app/(home)/page';

export default {
  title: 'app/Home',
  component: RootLayout,
  argTypes: {},
} as ComponentMeta<typeof RootLayout>;

const Template: ComponentStory<typeof RootLayout> = (args: any) => (
  <RootLayout {...args} />
);

export const Base = Template.bind({});
