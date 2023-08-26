import { Billboard as BillboardType } from '@/types';

type BillboardProps = {
  data: BillboardType;
};

// TODO Move to components/ui
export function Billboard(props: BillboardProps) {
  const { data } = props;
  return (
    <div className='overflow-hidden rounded-xl p-4 sm:p-6 lg:p-8'>
      <div
        className='relative aspect-square overflow-hidden rounded-xl bg-cover md:aspect-[2.4/1]'
        style={{ backgroundImage: `url(${data?.imageUrl})` }}
      >
        <div className='flex h-full w-full flex-col items-center justify-center gap-y-8 text-center'>
          <p className='text-white max-w-xs text-3xl font-bold sm:max-w-xl sm:text-5xl lg:text-6xl drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,0.8)]'>
            {data.label}
          </p>
        </div>
      </div>
    </div>
  );
}
