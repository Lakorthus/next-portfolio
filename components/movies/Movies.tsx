import type { SanityDocument } from '@sanity/client';
import imageUrlBuilder from '@sanity/image-url';
import Image from 'next/image';
import Link from 'next/link';
import { client } from '../../lib/sanity.client';

const builder = imageUrlBuilder(client);

export interface IMovies {
  movies: SanityDocument['poster' | 'title' | 'slug' | 'relaseDate'];
}

const Movies: React.FC<IMovies> = ({ movies }) => {
  return (
    <>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5 py-5">
        {movies.map(
          (movie: {
            _id: string;
            slug: { current: any };
            title: string;
            poster: string;
            releaseDate: string;
          }) => (
            <Link
              key={movie._id}
              href={movie.slug.current}
              className="movie flex flex-col items-center justify-between 
              rounded-[50px] bg-[#F9F9F9] p-4 hover:bg-[#E0E0E0] hover:shadow-lg hover:scale-105"
            >
              <div className="flex flex-col items-center">
                <h2 className="text-2xl p-2 font-semibold text-[#A2a2a2] hover:text-black">
                  {movie.title}
                </h2>
                <span className="text-sm font-bold italic pb-2">
                  {movie.releaseDate.slice(0, -16)}
                </span>
              </div>
              <div className="relative w-64 h-52">
                <Image
                  priority
                  className="m-0 w-1/3 mr-4 rounded-lg"
                  src={builder.image(movie.poster).width(300).height(300).url()}
                  fill={true}
                  sizes="(max-width: 768px) 100vw,
                  33vw"
                  alt={movie.title}
                />
              </div>
            </Link>
          )
        )}
      </div>
    </>
  );
};

export default Movies;
