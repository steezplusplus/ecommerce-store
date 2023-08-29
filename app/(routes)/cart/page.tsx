import type { Metadata } from 'next';

import { Summary } from './_components/summary';
import { CartList } from './_components/cart-list';

export const revalidate = 0;

export const metadata: Metadata = {
  title: 'Cart | Store',
};

export default function CartPage() {
  return (
    <div className='px-4 py-16 sm:px-6 lg:px-8'>
      <h2 className='mb-12 text-3xl font-bold'>Shopping Cart</h2>
      <div className='gap-x-12 lg:grid lg:grid-cols-12 lg:items-start'>
        <CartList />
        <Summary />
      </div>
    </div>
  );
}
