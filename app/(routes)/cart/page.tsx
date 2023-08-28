import type { Metadata } from 'next';

import { Container } from '@/components/ui/container';
import { Summary } from './components/summary';
import { CartList } from './components/cart-list';

export const revalidate = 0;

export const metadata: Metadata = {
  title: 'Cart | Store',
};

// TODO Do not return the  empty <ul> when cart empty
export default function CartPage() {

  return (
    <div className="bg-white">
      <Container>
        <div className="px-4 py-16 sm:px-6 lg:px-8">
          <h1 className="text-3xl font-bold text-black">Shopping Cart</h1>
          <div className="mt-12 lg:grid lg:grid-cols-12 lg:items-start gap-x-12">
            <CartList />
            <Summary />
          </div>
        </div>
      </Container>
    </div>
  );
};
