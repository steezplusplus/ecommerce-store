'use client';

import { useState } from 'react';
import { Plus, X } from 'lucide-react';
import { Dialog } from '@headlessui/react';

import { Color } from '@/types';
import { Button } from '@/components/button';
import { IconButton } from '@/components/icon-button';
import { Filter } from './filter';

type MobileFilterProps = {
  colors: Color[];
};

export function MobileFilter(props: MobileFilterProps) {
  const { colors } = props;
  const [isOpen, setIsOpen] = useState<boolean>(false);

  return (
    <>
      <Button
        aria-pressed={isOpen}
        onClick={() => setIsOpen(true)}
        className='flex items-center text-white'
      >
        <span className='mr-2'>Filters</span>
        <Plus size={20} />
      </Button>
      <Dialog
        open={isOpen}
        onClose={() => setIsOpen(false)}
        className='relative z-40'
      >
        <div className='fixed inset-0 bg-black bg-opacity-25'>
          <Dialog.Panel className='relative ml-auto flex h-full w-full max-w-xs flex-col overflow-y-auto bg-white py-4 pb-6 shadow-xl'>
            <div className='flex items-center justify-end px-4'>
              <IconButton icon={<X />} onClick={() => setIsOpen(false)} />
            </div>
            <div className='p-4'>
              <Filter valueKey='colorId' name='Colors' data={colors} />
            </div>
          </Dialog.Panel>
        </div>
      </Dialog>
    </>
  );
}
