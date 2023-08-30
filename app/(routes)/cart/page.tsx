import type { Metadata } from 'next';

import { Summary } from './_components/summary';
import { CartList } from './_components/cart-list';

export const revalidate = 0;

export const metadata: Metadata = {
  title: 'Cart | Store',
};

export default function CartPage() {
  return (
    <>
      <h2 className='mb-4 text-3xl font-bold'>Shopping Cart</h2>
      <div className='lg:grid lg:grid-cols-12 lg:items-start lg:gap-x-12'>
        <CartList />
        <Summary />
      </div>
    </>
  );
}
