import { ComponentMeta, ComponentStory } from '@storybook/react';
import Contact, { IContact } from './Contact';
import { mockContactProps } from './Contact.mocks';

export default {
  title: 'sections/Contact',
  component: Contact,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {},
} as ComponentMeta<typeof Contact>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof Contact> = (args) => (
  <Contact {...args} />
);

export const Base = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args

Base.args = {
  ...mockContactProps.base,
} as IContact;
