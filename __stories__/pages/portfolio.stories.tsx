import { ComponentMeta, ComponentStory } from '@storybook/react';
import RootLayout from '../../app/portfolio/(view)/page';

export default {
  title: 'app/Portfolio',
  component: RootLayout,
  argTypes: {},
} as ComponentMeta<typeof RootLayout>;

const Template: ComponentStory<typeof RootLayout> = (args: any) => (
  <RootLayout {...args} />
);

export const Base = Template.bind({});
