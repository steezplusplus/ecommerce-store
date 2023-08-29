import type { Metadata } from 'next';

import { Summary } from './components/summary';
import { CartList } from './components/cart-list';
import { Container } from '@/components/container';

export const revalidate = 0;

export const metadata: Metadata = {
  title: 'Cart | Store',
};

export default function CartPage() {
  return (
    <Container>
      <div className='py-16 px-4 sm:px-6 lg:px-8'>
        <h2 className='mb-12 text-3xl font-bold'>Shopping Cart</h2>
        <div className='lg:grid lg:grid-cols-12 lg:items-start gap-x-12'>
          <CartList />
          <Summary />
        </div>
      </div>
    </Container>
  );
};
