import Image from 'next/image';
import Link from 'next/link';
import GoogleImage from '../public/Google.png';

const Home = () => {
  return (
    <>
      <section className="relative">
        <div className="gradient-03 z-0" />

        <Image
          src={GoogleImage}
          alt="Google Logo"
          width={272}
          height={92}
          priority
        />

        <p>
          Google offered in:{' '}
          <Link className="underline text-blue-600" href="/">
            Spanish
          </Link>
        </p>
      </section>
    </>
  );
};

export default Home;
