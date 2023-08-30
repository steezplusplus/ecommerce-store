import Image from 'next/image';

import { Billboard as BillboardType } from '@/types';

type BillboardProps = {
  billboard: BillboardType;
  alt: string;
};

export function Billboard(props: BillboardProps) {
  const { billboard, alt } = props;
  return (
    <div className="relative aspect-square overflow-hidden rounded-xl bg-cover md:aspect-[2.4/1]">
      <Image
        priority={true}
        src={billboard.imageUrl}
        alt={alt}
        fill
        sizes="100vw"
        className="object-cover object-center"
      />
      <div className="flex h-full w-full items-center justify-center text-center">
        <p className="max-w-xs text-3xl font-bold text-white drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,0.8)] sm:max-w-xl sm:text-5xl lg:text-6xl">
          {billboard.label}
        </p>
      </div>
    </div>
  );
}
