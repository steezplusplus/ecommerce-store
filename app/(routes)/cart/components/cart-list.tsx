'use client';

import { CartItem } from "./cart-item";
import { useCart } from '@/hooks/use-cart';

export function CartList() {
  const cart = useCart();

  return (
    <div className="lg:col-span-7">
      {cart.items.length === 0 && <p className="text-neutral-500">No items added to cart.</p>}
      <ul>
        {cart.items.map((item) => (
          <CartItem key={item.id} data={item} />
        ))}
      </ul>
    </div>
  );
}