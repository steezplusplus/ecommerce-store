'use client';

import { CartItem } from './cart-item';
import { useCart } from '@/hooks/use-cart';

export function CartList() {
  const cart = useCart();

  if (cart.items.length === 0) {
    return (
      <div className='lg:col-span-7 mb-16'>
        <p className='text-neutral-500'>No items added to cart.</p>
      </div>
    );
  }

  return (
    <div className='lg:col-span-7 mb-16'>
      <ul>
        {cart.items.map((item) => (
          <CartItem key={item.id} data={item} />
        ))}
      </ul>
    </div>
  );
}