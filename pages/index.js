import Link from 'next/link'

export default () => (
  <div>
    Welcome to Index page!
    <Link href='/about'>
      <a>See the About page</a>
    </Link>
  </div>
)
