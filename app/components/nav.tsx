import Link from 'next/link';

import { Container } from '@/components/ui/container';
import { NavLinks } from './nav-links';

const categories = [
  {
    name: 'Link 1',
    id: 'link-1',
    billboard: {
      id: 'billboard-1',
      name: 'Billboard 1',
      imageUrl: 'www.fakeurl.com',
    },
  },
  {
    name: 'Link 2',
    id: 'link-2',
    billboard: {
      id: 'billboard-2',
      name: 'Billboard 2',
      imageUrl: 'www.fakeurl.com',
    },
  },
];

export function Nav() {
  return (
    <nav className='border-b'>
      <Container>
        <ul className='flex items-center gap-x-2 px-4 py-2 sm:gap-x-4 sm:px-6 lg:gap-x-6 lg:px-8'>
          <li>
            <Link href='/'>
              <h1 className='text-xl font-bold'>STORE</h1>
            </Link>
          </li>
          <NavLinks categories={categories} />
        </ul>
      </Container>
    </nav>
  );
}
