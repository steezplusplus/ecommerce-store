import { LoadingSkeleton } from '@/components/loading-skeleton';

export default function Loading() {
  return (
    <div>
      {/* Billboard */}
      <div className='rounded-xl'>
        <LoadingSkeleton className='aspect-square w-full rounded-xl md:aspect-[2.4/1]' />
      </div>

      {/* Heading */}
      <div className='h-[76px]' />

      {/* Product List */}
      <div className='grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4'>
        <LoadingSkeleton className='aspect-square rounded-xl' />
        <LoadingSkeleton className='aspect-square rounded-xl' />
        <LoadingSkeleton className='aspect-square rounded-xl' />
        <LoadingSkeleton className='aspect-square rounded-xl' />
        <LoadingSkeleton className='aspect-square rounded-xl' />
        <LoadingSkeleton className='aspect-square rounded-xl' />
        <LoadingSkeleton className='aspect-square rounded-xl' />
        <LoadingSkeleton className='aspect-square rounded-xl' />
      </div>
    </div>
  );
}
