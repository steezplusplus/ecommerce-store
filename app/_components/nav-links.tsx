/**
 * Creates a Link to navigate to each category in the store
 */

'use client';

import { usePathname } from 'next/navigation';
import Link from 'next/link';

import { Category } from '@/types';

type NavLinksProps = {
  categories: Category[];
};

type Routes = {
  label: string;
  href: string;
  ariaCurrent: 'page' | undefined;
}[];

export function NavLinks(props: NavLinksProps) {
  const { categories } = props;
  const pathName = usePathname();

  const routes: Routes = categories.map((category) => ({
    label: category.name,
    href: `/category/${category.id}`,
    ariaCurrent: pathName.startsWith(`/category/${category.id}`)
      ? 'page'
      : undefined,
  }));

  return (
    <>
      {routes.map((route) => {
        const { label, href, ariaCurrent } = route;

        return (
          <li key={href}>
            <Link
              href={href}
              className='group text-sm font-medium transition duration-300'
              aria-current={ariaCurrent}
            >
              {label}
              <span className='block h-0.5 max-w-0 bg-black transition-all duration-700 group-aria-[current=page]:max-w-full' />
            </Link>
          </li>
        );
      })}
    </>
  );
}
