'use client';

import qs from 'query-string';
import { useSearchParams } from 'next/navigation';
import { useRouter } from 'next/navigation';

import { Color } from '@/types';
import { Button } from '@/components/button';

type FilterProps = {
  data: Color[];
  valueKey: string;
  name: string;
};

export function Filter(props: FilterProps) {
  const { valueKey, name, data } = props;
  const router = useRouter();
  const searchParams = useSearchParams();
  const selectedValue = searchParams.get(valueKey);

  const onToggle = (filterId: string) => {
    const currentParams = qs.parse(searchParams.toString());

    const newParams = {
      ...currentParams,
      [valueKey]: filterId,
    };

    if (currentParams[valueKey] === filterId) {
      newParams[valueKey] = null;
    }

    const url = qs.stringifyUrl(
      {
        url: window.location.href,
        query: newParams,
      },
      { skipNull: true }
    );

    router.push(url, { scroll: false });
  };

  return (
    <fieldset>
      <legend className='text-lg font-semibold'>{name}</legend>
      <div className='flex flex-wrap gap-2'>
        {data.map((filter) => (
          <div key={filter.id} className='flex items-center'>
            <Button
              aria-pressed={selectedValue === filter.id}
              onClick={() => onToggle(filter.id)}
              style={{
                backgroundColor: filter.value,
                color: filter.value === '#FFFFFF' ? 'black' : 'white',
              }}
              className='group rounded-md border border-gray-300 p-2 text-sm'
            >
              <span className='group-aria-pressed:underline group-aria-pressed:transition'>
                {filter.name}
              </span>
            </Button>
          </div>
        ))}
      </div>
    </fieldset>
  );
}
