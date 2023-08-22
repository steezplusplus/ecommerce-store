'use client';

import { useParams, usePathname } from 'next/navigation';
import Link from 'next/link';

import { Category } from '@/types';
import { cn } from '@/lib/utils';

type NavLinksProps = {
  categories: Category[];
};

type Routes = {
  label: string;
  href: string;
  active: boolean;
}[];

export function NavLinks(props: NavLinksProps) {
  const { categories } = props;
  const pathName = usePathname();

  const routes: Routes = categories.map((category) => ({
    label: category.name,
    href: `/category/${category.id}`,
    active: pathName.startsWith(`/category/${category.id}`),
  }));

  return (
    <>
      {routes.map((route) => {
        return (
          <li key={route.href}>
            <Link
              href={route.href}
              className={cn(
                'hover:text-primary text-sm font-medium transition-colors',
                route.active
                  ? 'text-black dark:text-white'
                  : 'text-muted-foreground'
              )}
            >
              {route.label}
            </Link>
          </li>
        );
      })}
    </>
  );
}
