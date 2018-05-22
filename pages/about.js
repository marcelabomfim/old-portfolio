import Link from 'next/link';

import { Title } from 'components/Title';

export default () => (
  <div>
    <Title>Welcome to About page!</Title>
    <Link href="/">
      <a href="/">See the Index page</a>
    </Link>
  </div>
);
