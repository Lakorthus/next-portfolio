import type { SanityDocument } from '@sanity/client';
import { groq } from 'next-sanity';
import { PreviewSuspense } from 'next-sanity/preview';
import { lazy } from 'react';
import PrimaryLayout from '../components/layouts/primary/PrimaryLayout';
import Movies from '../components/movies/Movies';
import { client } from '../lib/sanity.client';

const PreviewMovies = lazy(
  () => import('../components/movie-preview/MoviePreview')
);

const query = groq`*[_type == "movie" && defined(slug.current)]{
  _id,
  title, 
  slug,
  poster,
  releaseDate
}`;
export const getStaticProps = async ({ preview = false }) => {
  if (preview) {
    return { props: { preview } };
  }

  const data = await client.fetch(query);

  return { props: { preview, data } };
};

const Home = ({
  preview,
  data,
}: {
  preview: Boolean;
  data: SanityDocument[];
}) => {
  return (
    <section className="flex justify-center w-full">
      {preview ? (
        <PreviewSuspense fallback="Loading...">
          <PreviewMovies query={query} />
        </PreviewSuspense>
      ) : (
        <Movies movies={data} />
      )}
    </section>
  );
};

export default Home;

Home.getLayout = (page: any) => {
  return <PrimaryLayout justify="items-center">{page}</PrimaryLayout>;
};
