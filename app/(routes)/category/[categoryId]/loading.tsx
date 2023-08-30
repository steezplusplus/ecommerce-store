import { LoadingSkeleton } from '@/components/loading-skeleton';

export default function Loading() {
  return (
    <div>
      {/* Billboard */}
      <LoadingSkeleton className='aspect-square w-full md:aspect-[2.4/1]' />

      {/* Heading and mobile filter */}
      <div className='h-[76px]' />

      {/* Desktop Filter and product list */}
      <div className='lg:grid lg:grid-cols-4 lg:gap-x-8'>
        <div className='hidden lg:col-span-1 lg:block'>
          <LoadingSkeleton className='aspect-square h-full w-full' />
        </div>

        <div className='lg:col-span-3'>
          <div className='grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3'>
            <LoadingSkeleton className='aspect-square w-full' />
            <LoadingSkeleton className='aspect-square w-full' />
            <LoadingSkeleton className='aspect-square w-full' />
            <LoadingSkeleton className='aspect-square w-full' />
            <LoadingSkeleton className='aspect-square w-full' />
            <LoadingSkeleton className='aspect-square w-full' />
          </div>
        </div>
      </div>
    </div>
  );
}
