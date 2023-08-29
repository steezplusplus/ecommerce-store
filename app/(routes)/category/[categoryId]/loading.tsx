import { LoadingSkeleton } from '@/components/loading-skeleton';

export default function Loading() {
  return (
    <div className='h-full w-full p-8'>
      <LoadingSkeleton className='aspect-square w-full rounded-xl md:aspect-[2.4/1]' />
      <div className='mt-8 h-full lg:grid lg:grid-cols-5 lg:gap-x-8'>
        <div className='hidden lg:block'>
          <LoadingSkeleton className='h-[500px] w-full rounded-xl' />
        </div>
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
  );
}
