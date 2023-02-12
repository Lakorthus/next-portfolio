import { ComponentMeta, ComponentStory } from '@storybook/react';
import Movies, { IMovies } from './Movies';
import { mockMoviesProps } from './Movies.mocks';

export default {
  title: 'movies/Movies',
  component: Movies,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {},
} as ComponentMeta<typeof Movies>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof Movies> = (args) => <Movies {...args} />;

export const Base = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args

Base.args = {
  ...mockMoviesProps.base,
} as IMovies;
