import { ComponentMeta, ComponentStory } from '@storybook/react';
import RootLayout from '../../app/projects/page';

export default {
  title: 'app/Projects',
  component: RootLayout,
  argTypes: {},
} as ComponentMeta<typeof RootLayout>;

const Template: ComponentStory<typeof RootLayout> = (args: any) => (
  <RootLayout {...args} />
);

export const Base = Template.bind({});
