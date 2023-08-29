import { LoadingSkeleton } from '@/components/loading-skeleton';

export default function Loading() {
  return (
    <div className='flex flex-col'>
      {/* Billboard */}
      <div className='rounded-xl p-4 sm:p-6 lg:p-8'>
        <LoadingSkeleton className='aspect-square w-full rounded-xl md:aspect-[2.4/1]' />
      </div>
      {/* Product List */}
      <div className='px-4 sm:px-6 lg:px-8'>
        <h3 className='text-3xl font-bold'>Featured Products</h3>
        <div className='grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4'>
          <LoadingSkeleton className='aspect-square rounded-xl' />
          <LoadingSkeleton className='aspect-square rounded-xl' />
          <LoadingSkeleton className='aspect-square rounded-xl' />
          <LoadingSkeleton className='aspect-square rounded-xl' />
          <LoadingSkeleton className='aspect-square rounded-xl' />
          <LoadingSkeleton className='aspect-square rounded-xl' />
        </div>
      </div>
    </div>
  );
}
