import { Billboard as BillboardType } from '@/types';

type BillboardProps = {
  data: BillboardType;
};

// TODO Image component
export function Billboard(props: BillboardProps) {
  const { data } = props;
  return (
    <div className='overflow-hidden rounded-xl'>
      <div
        className='relative aspect-square overflow-hidden rounded-xl bg-cover md:aspect-[2.4/1]'
        style={{ backgroundImage: `url(${data?.imageUrl})` }}
      >
        <div className='flex h-full w-full flex-col items-center justify-center gap-y-8 text-center'>
          <p className='max-w-xs text-3xl font-bold text-white drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,0.8)] sm:max-w-xl sm:text-5xl lg:text-6xl'>
            {data.label}
          </p>
        </div>
      </div>
    </div>
  );
}
