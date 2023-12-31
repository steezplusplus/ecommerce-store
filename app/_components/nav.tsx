import Link from 'next/link';

import { getCategories } from '@/actions/get-categories';
import { NavLinks } from './nav-links';
import { NavActions } from './nav-actions';

export const revalidate = 0; // Never cache

// TODO Mobile layout collapse
export async function Nav() {
  const categories = await getCategories();
  return (
    <nav className="border-b">
      <ul className="flex h-full items-center gap-x-2 px-4 sm:gap-x-4 sm:px-6 lg:gap-x-6 lg:px-8">
        <li className="mr-2">
          <Link href="/">
            <h1 className="text-2xl font-bold">STORE</h1>
          </Link>
        </li>
        <NavLinks categories={categories} />
        <NavActions />
      </ul>
    </nav>
  );
}
