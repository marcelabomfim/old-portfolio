import Link from 'next/link';

import styled from 'styled-components';

const Title = styled.h1`
  font-weight: bold;

  &:hover {
    color: red;
  }
`;

export default () => (
  <div>
    <Title>Welcome to About page!</Title>
    <Link href="/">
      <a href="/">See the Index page</a>
    </Link>
  </div>
);
