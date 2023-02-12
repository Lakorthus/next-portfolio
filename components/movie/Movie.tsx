import { PortableText } from '@portabletext/react';
import type { SanityDocument } from '@sanity/client';
import imageUrlBuilder from '@sanity/image-url';
import Image from 'next/image';
import { client } from '../../lib/sanity.client';

const builder = imageUrlBuilder(client);

export interface IMovie {
  movie: SanityDocument['title' | 'poster' | 'overview'];
}

const Movie: React.FC<IMovie> = ({ movie }) => {
  return (
    <div className={`text-2xl text-green-900`}>
      <main className="container mx-auto prose prose-lg p-4">
        <h1>{movie.title}</h1>
        <Image
          className="float-left m-0 w-1/3 mr-4 rounded-lg"
          src={builder.image(movie.poster).width(300).height(300).url()}
          width={300}
          height={300}
          alt={movie.title}
        />
        <PortableText value={movie.overview} />
      </main>
    </div>
  );
};

export default Movie;
