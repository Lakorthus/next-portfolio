import Link from 'next/link';

import '../styles/globals.css';

export default function FourOhFour() {
  return (
    <>
      <div className="flex flex-col items-center">
        <div className="flexCenter h-screen w-full text-info">
          <h1>404 - Page Not Found</h1>

          <Link href="/">Go back home</Link>
        </div>
      </div>
    </>
  );
}
