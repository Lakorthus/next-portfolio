import { ComponentMeta, ComponentStory } from '@storybook/react';
import Weather, { IWeather } from './Weather';
import { mockWeatherProps } from './Weather.mocks';

export default {
  title: 'projects/Weather',
  component: Weather,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {},
} as ComponentMeta<typeof Weather>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof Weather> = (args) => (
  <Weather {...args} />
);

export const Base = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args

Base.args = {
  ...mockWeatherProps.base,
} as IWeather;
