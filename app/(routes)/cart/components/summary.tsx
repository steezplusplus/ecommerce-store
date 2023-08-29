'use client';

import { toast } from 'react-hot-toast';

import { useCart } from '@/hooks/use-cart';
import { Button } from '@/components/button';
import { Currency } from '@/components/currency';

export function Summary() {
  const items = useCart((cart) => cart.items);

  const totalPrice = items.reduce((sum, item) => {
    return sum += Number(item.price);
  }, 0);

  const onCheckout = () => {
    return toast.success('Hold on! This is just a demo site.');
  }

  return (
    <div className='border rounded-lg bg-gray-50 px-4 py-6 sm:p-6 lg:col-span-5 lg:mt-0 lg:p-8'>
      <h2 className='text-lg font-medium text-gray-900'>
        Order summary
      </h2>
      <div className='mt-6 space-y-4'>
        <div className='flex items-center justify-between border-t border-gray-200 pt-4'>
          <div className='text-base font-medium text-gray-900'>Order total</div>
          <Currency value={totalPrice} />
        </div>
      </div>
      <Button onClick={onCheckout} className='w-full mt-6 text-white'>
        Checkout
      </Button>
    </div>
  );
}