import { ComponentMeta, ComponentStory } from '@storybook/react';
import Movie, { IMovie } from './Movie';
import { mockMovieProps } from './Movie.mocks';

export default {
  title: 'movie/Movie',
  component: Movie,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {},
} as ComponentMeta<typeof Movie>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof Movie> = (args) => <Movie {...args} />;

export const Base = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args

Base.args = {
  ...mockMovieProps.base,
} as IMovie;
