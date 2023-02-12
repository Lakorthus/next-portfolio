import { ComponentMeta, ComponentStory } from '@storybook/react';
import MoviePreview, { IMoviePreview } from './MoviePreview';
import { mockMoviePreviewProps } from './MoviePreview.mocks';

export default {
  title: 'movie-preview/MoviePreview',
  component: MoviePreview,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {},
} as ComponentMeta<typeof MoviePreview>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof MoviePreview> = (args) => (
  <MoviePreview {...args} />
);

export const Base = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args

Base.args = {
  ...mockMoviePreviewProps.base,
} as IMoviePreview;
