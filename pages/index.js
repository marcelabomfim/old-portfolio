import Link from 'next/link';

export default () => (
  <div>
    Welcome to Index page!
    <Link href="/about">
      <a href="/">See the About page</a>
    </Link>
  </div>
);
