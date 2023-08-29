'use client';

import Link from 'next/link';
import { ShoppingBag } from 'lucide-react';

import { useCart } from '@/hooks/use-cart';

export function NavActions() {
  const cart = useCart();

  return (
    <li className='ml-auto'>
      <Link href={`/cart`} className='flex items-center rounded-full bg-black px-4 py-2'>
        <ShoppingBag size={20} color='white' />
        <span className='ml-2 text-sm font-medium text-white'>
          {cart.items.length}
        </span>
      </Link>
    </li>
  );
}
