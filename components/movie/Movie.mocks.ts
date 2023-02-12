import { IMovie } from './Movie';

const base: IMovie = {
  movie: [
    {
      title: 'The Shawshank Redemption',
      poster: 'https://image.tmdb.org/t/p/w500/9O7gLzmreU0nGkIB6K3BsJbzvNv.jpg',
      overview: 'hello',
    },
  ],
};

export const mockMovieProps = {
  base,
};
