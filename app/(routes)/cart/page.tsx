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
    <Container>
      <div className="py-16 px-4 sm:px-6 lg:px-8">
        <h2 className="mb-12 text-3xl font-bold">Shopping Cart</h2>
        <div className="lg:grid lg:grid-cols-12 lg:items-start gap-x-12">
          <CartList />
          <Summary />
        </div>
      </div>
    </Container>
  );
};
