import PrimaryLayout from '../components/layouts/primary/PrimaryLayout';

import { NextPageWithLayout } from './page';

const Home: NextPageWithLayout = () => {
  return (
    <section className="flex items-center justify-center min-h-screen">
      Populate me with Sanity Content
    </section>
  );
};

export default Home;

Home.getLayout = (page) => {
  return <PrimaryLayout justify="items-center">{page}</PrimaryLayout>;
};
