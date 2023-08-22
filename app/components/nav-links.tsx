'use client';

import { useParams, usePathname } from 'next/navigation';
import Link from 'next/link';

import { cn } from '@/lib/utils';

type NavLinksProps = {
  data: {
    name: string;
    id: string;
  }[];
};

type Routes = {
  label: string;
  href: string;
  active: boolean;
}[];

export function NavLinks(props: NavLinksProps) {
  const { data } = props;
  const params = useParams();
  const pathName = usePathname();

  const routes: Routes = data.map((route) => ({
    label: route.name,
    href: `/category/${route.id}`,
    active: pathName.startsWith(`/category/${route.id}`),
  }));

  return (
    <>
      {routes.map((route) => {
        return (
          <li key={route.href}>
            <Link
              href={route.href}
              className={cn(
                'text-sm font-medium transition-colors hover:text-primary',
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
