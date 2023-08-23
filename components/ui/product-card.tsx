'use client';

import Image from "next/image";
import { Expand, ShoppingCart } from "lucide-react";

import { Product } from "@/types";
import { IconButton } from "@/components/ui/icon-button";
import { Currency } from "@/components/ui/currency";

type ProductCardProps = {
  data: Product;
}

// TODO Image alt text
export function ProductCard(props: ProductCardProps) {
  const { data } = props;

  return (
    <div className='bg-white group rounded-xl border p-3 space-y-4'>
      {/* Images and Actions */}
      <div className='aspect-square rounded-cl bg-gray-100 relative'>
        <Image
          className='aspect-square object-cover rounded-md'
          src={data?.images?.[0]?.url}
          fill
          alt="image"
        />
        <div className='opacity-0 group-hover:opacity-100 transition absolute w-full px-6 bottom-5 '>
          <div className='flex gap-x-6 justify-center'>
            <IconButton
              onClick={() => { }}
              icon={<Expand size={20} className="text-gray-600 " />}
            />
            <IconButton
              onClick={() => { }}
              icon={<ShoppingCart size={20} className="text-gray-600 " />}
            />
          </div>
        </div>
      </div>
      {/* Images and Actions */}
      <div>
        <p className="font-semibold text-lg">{data.name}</p>
        <p className="text-sm text-gray-500">
          {data.category.name}
        </p>
      </div>
      {/* Price */}
      <div className='flex items-center justify-center'>
        <Currency value={data.price} />
      </div>
    </div>
  );
}