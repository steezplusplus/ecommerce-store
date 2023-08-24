'use client';

import qs from 'query-string';
import { useSearchParams } from 'next/navigation';
import { useRouter } from 'next/navigation';

import { cn } from '@/lib/utils';
import { Color, Size } from '@/types';
import { Button } from '@/components/ui/button';

type FilterProps = {
  data: (Color | Size)[];
  valueKey: string;
  name: string;
};

// TODO Replace buttons with radios
export function Filter(props: FilterProps) {
  const { valueKey, name, data } = props;
  const router = useRouter();
  const searchParams = useSearchParams();
  const selectedValue = searchParams.get(valueKey);

  const handleClick = (id: string) => {
    const current = qs.parse(searchParams.toString());

    const query = {
      ...current,
      [valueKey]: id,
    };

    if (current[valueKey] === id) {
      query[valueKey] = null;
    }

    const url = qs.stringifyUrl({
      url: window.location.href,
      query,
    }, { skipNull: true });

    router.push(url);
  }

  return (
    <div className='mb-8'>
      <h3 className='text-lg font-semibold'>{name}</h3>
      <hr className='my-8' />
      <div className='flex flex-wrap gap-2'>
        {data.map((filter) => (
          <div key={filter.id} className='flex items-center'>
            <Button
              onClick={() => handleClick(filter.id)}
              className={cn(
                'rounded-md text-sm text-gray-8-- p-2 bg-white border border-gray-300',
                selectedValue === filter.id && 'bg-black text-white'
              )}
            >
              {filter.name}
            </Button>
          </div>
        ))}
      </div>
    </div>
  );
}