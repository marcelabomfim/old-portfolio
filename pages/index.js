import Link from 'next/link';

import { Title } from 'components/Title';

export default () => (
  <div>
    <Title>Welcome to Index page!</Title>
    <Link href="/about">
      <a href="/">See the About page</a>
    </Link>
  </div>
);
