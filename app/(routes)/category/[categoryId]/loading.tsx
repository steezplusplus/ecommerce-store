import { LoadingSkeleton } from '@/components/loading-skeleton';

export default function Loading() {
  return (
    <div className='flex flex-col'>
      {/* Billboard */}
      <div className='rounded-xl p-4 sm:p-6 lg:p-8'>
        <LoadingSkeleton className='aspect-square w-full rounded-xl md:aspect-[2.4/1]' />
      </div>

      <div className='px-4 sm:px-6 lg:px-8'>
        <div className='lg:grid lg:grid-cols-5 lg:gap-x-8'>
          {/* Filters */}
          {/* TODO Mobile Filter */}
          <div className='hidden lg:block'>
            <LoadingSkeleton className='h-full w-full rounded-xl' />
          </div>

          {/* Product List */}
          <div className='mt-6 lg:col-span-4 lg:mt-0'>
            <div className='grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3'>
              <LoadingSkeleton className='aspect-square rounded-xl' />
              <LoadingSkeleton className='aspect-square rounded-xl' />
              <LoadingSkeleton className='aspect-square rounded-xl' />
              <LoadingSkeleton className='aspect-square rounded-xl' />
              <LoadingSkeleton className='aspect-square rounded-xl' />
              <LoadingSkeleton className='aspect-square rounded-xl' />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
