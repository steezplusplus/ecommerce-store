'use client';

import { ShoppingCart } from 'lucide-react';

import { Currency } from '@/components/ui/currency';
import { Button } from '@/components/ui/button';
import { Product } from '@/types';

type InfoProps = {
  data: Product;
};

export function Info(props: InfoProps) {
  const { data } = props;

  const onAddToCart = () => {
    // TODO
  };

  return (
    <div>
      <h1 className='text-3xl font-bold text-gray-900'>{data.name}</h1>
      <div className='mt-3 flex items-end justify-between'>
        <div className='text-2xl text-gray-900'>
          <Currency value={data.price} />
        </div>
      </div>
      <hr className='my-4' />
      <div className='flex flex-col gap-y-6'>
        <div className='flex items-center gap-x-4'>
          <h3 className='font-semibold text-black'>Size:</h3>
          <div>{data?.size?.value}</div>
        </div>
        <div className='flex items-center gap-x-4'>
          <h3 className='font-semibold text-black'>Color:</h3>
          <div
            className='h-6 w-6 rounded-full border border-gray-600'
            style={{ backgroundColor: data?.color?.value }}
          />
        </div>
      </div>
      <div className='mt-10 flex items-center gap-x-3'>
        <Button
          onClick={onAddToCart}
          className='flex items-center gap-x-2 text-white'
        >
          Add To Cart
          <ShoppingCart size={20} />
        </Button>
      </div>
    </div>
  );
}

export default Info;
