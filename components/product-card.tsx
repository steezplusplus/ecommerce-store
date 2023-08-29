'use client';

import Image from 'next/image';
import Link from 'next/link';
import { Expand, ShoppingCart } from 'lucide-react';

import { Product } from '@/types';
import { usePreviewModal } from '@/hooks/use-preview-modal';
import { useCart } from '@/hooks/use-cart';
import { IconButton } from '@/components/icon-button';
import { Currency } from '@/components/currency';

type ProductCardProps = {
  data: Product;
};

// TODO Replace IconButton?
export function ProductCard(props: ProductCardProps) {
  const { data } = props;
  const previewModal = usePreviewModal();
  const cart = useCart();

  const onPreview = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    previewModal.onOpen(data);
  };

  const onAdd = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    cart.addItem(data);
  };

  return (
    <Link
      href={`/product/${data.id}`}
      className='group space-y-4 rounded-xl border bg-white p-3'
    >
      {/* Images and Actions */}
      <div className='rounded-cl relative aspect-square bg-gray-100'>
        <Image
          className='aspect-square rounded-md object-cover'
          src={data?.images?.[0]?.url}
          fill
          alt={`Image of ${data.name}`}
        />
        <div className='absolute bottom-5 w-full px-6 opacity-0 transition group-hover:opacity-100 '>
          <div className='flex justify-center gap-x-6'>
            <IconButton
              onClick={onPreview}
              icon={<Expand size={20} className='text-gray-600' />}
            />
            <IconButton
              onClick={onAdd}
              icon={<ShoppingCart size={20} className='text-gray-600' />}
            />
          </div>
        </div>
      </div>
      {/* Info */}
      <div>
        <p className='text-lg font-semibold'>{data.name}</p>
        <p className='text-sm text-gray-500'>{data.category.name}</p>
      </div>
      {/* Price */}
      <div className='flex items-center justify-center'>
        <Currency value={data.price} />
      </div>
    </Link>
  );
}
