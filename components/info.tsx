'use client';

import { ShoppingCart } from 'lucide-react';

import { useCart } from '@/hooks/use-cart';
import { Currency } from '@/components/currency';
import { Button } from '@/components/button';
import { Product } from '@/types';

type InfoProps = {
  data: Product;
};

// TODO only the button and currency needs to be a client component
// TODO Hover show name of color
export function Info(props: InfoProps) {
  const { data } = props;
  const cart = useCart();

  const onAdd = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.stopPropagation();
    cart.addItem(data);
  };

  return (
    <div>
      <h2 className="mb-4 text-3xl font-bold text-gray-900">{data.name}</h2>
      <Currency value={data.price} className="text-2xl text-gray-900" />
      <hr className="my-4" />

      <div className="flex items-center gap-x-4">
        <h3 className="font-semibold text-black">Color:</h3>
        <div
          className="h-6 w-6 rounded-full border border-gray-600"
          style={{ backgroundColor: data.color.value }}
        >
          <p className="sr-only">{data.color.name}</p>
        </div>
      </div>

      <Button
        onClick={onAdd}
        className="mt-4 flex items-center gap-x-2 text-white"
      >
        <ShoppingCart size={20} />
        <span className="ml-2 text-lg font-medium text-white">Add to cart</span>
      </Button>
    </div>
  );
}

export default Info;
