import Image from 'next/image';
import { X } from 'lucide-react';

import { IconButton } from '@/components/icon-button';
import { Currency } from '@/components/currency';
import { useCart } from '@/hooks/use-cart';
import { Product } from '@/types';

type CartItemProps = {
  data: Product;
};

export function CartItem(props: CartItemProps) {
  const { data } = props;
  const cart = useCart();

  const onRemove = () => {
    cart.removeItem(data.id);
  };

  return (
    <li className="flex border-b py-6 first:pt-0">
      <div className="relative h-24 w-24 overflow-hidden rounded-md sm:h-48 sm:w-48">
        <Image
          fill
          src={data.images[0].url}
          alt={`Image of ${data.name}`}
          className="object-cover object-center"
          sizes="30vw"
        />
      </div>
      <div className="relative ml-4 flex flex-1 flex-col justify-between sm:ml-6">
        <div className="absolute right-0 top-0 z-10">
          <IconButton onClick={onRemove} icon={<X size={15} />} />
        </div>
        <div className="relative pr-9 sm:grid sm:grid-cols-2 sm:gap-x-6 sm:pr-0">
          <div className="flex justify-between">
            <p className=" text-lg font-semibold text-black">{data.name}</p>
          </div>

          <div className="mt-1 flex text-sm">
            <p className="text-gray-500">{data.color.name}</p>
          </div>
          <Currency value={data.price} />
        </div>
      </div>
    </li>
  );
}
