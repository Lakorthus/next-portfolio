import { SanityDocument } from '@sanity/client';
import { GetStaticPaths, GetStaticProps } from 'next';
import { groq } from 'next-sanity';
import { PreviewSuspense } from 'next-sanity/preview';
import { lazy } from 'react';
import PrimaryLayout from '../components/layouts/primary/PrimaryLayout';

import Movie from '../components/movie/Movie';
import { client } from '../lib/sanity.client';

const PreviewMovie = lazy(
  () => import('../components/movie-preview/MoviePreview')
);
const query = groq`*[_type == "movie" && slug.current == $slug][0]{
  title,
  poster,
  overview
}`;

export const getStaticPaths: GetStaticPaths = async () => {
  const paths = await client.fetch(
    groq`*[_type == "movie" && defined(slug.current)][]{
      "params": { "slug": slug.current }
    }`
  );

  return { paths, fallback: true };
};

export const getStaticProps: GetStaticProps = async ({
  params,
  preview = false,
}) => {
  const queryParams = { slug: params?.slug ?? `` };

  if (preview) {
    return { props: { preview, data: { queryParams } } };
  }

  const movie = await client.fetch(query, queryParams);

  return {
    props: {
      preview,
      data: {
        movie,
        queryParams: {},
      },
    },
  };
};

function Page({
  preview,
  data,
}: {
  preview: Boolean;
  data: {
    movie: SanityDocument;
    queryParams: {};
  };
}) {
  return preview ? (
    <PreviewSuspense fallback="Loading...">
      <PreviewMovie query={query} queryParams={data.queryParams} />
    </PreviewSuspense>
  ) : (
    <Movie movie={data.movie} />
  );
}

Page.getLayout = (page: any) => {
  return <PrimaryLayout justify="items-center">{page}</PrimaryLayout>;
};
export default Page;
