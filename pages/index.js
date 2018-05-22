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
    <Title>Welcome to Index page!</Title>
    <Link href="/about">
      <a href="/">See the About page</a>
    </Link>
  </div>
);
