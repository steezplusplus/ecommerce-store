import { LoadingSkeleton } from '@/components/loading-skeleton';

export default function Loading() {
  return (
    <div>
      <div className='lg:grid lg:grid-cols-2 lg:items-start lg:gap-x-8'>
        {/* Gallery */}
        <LoadingSkeleton className='aspect-square' />
        <div className='sm:mt-16 lg:mt-0'>
          {/* Info */}
          <LoadingSkeleton className='aspect-square' />
        </div>
      </div>
      <hr className='my-10' />
      {/* Product List */}
      <div className='grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4'>
        <LoadingSkeleton className='aspect-square' />
        <LoadingSkeleton className='aspect-square' />
        <LoadingSkeleton className='aspect-square' />
        <LoadingSkeleton className='aspect-square' />
      </div>
    </div>
  );
}
