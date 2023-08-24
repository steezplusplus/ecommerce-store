'use client';

import { useState } from 'react';
import { Plus, X } from 'lucide-react';
import { Dialog } from '@headlessui/react';

import { Color, Size } from '@/types';
import { Button } from '@/components/ui/button';
import { IconButton } from '@/components/ui/icon-button';
import { Filter } from './filter';

type MobileFilterProps = {
  sizes: Size[];
  colors: Color[];
};

// TODO Replace Button and Dialog with button and dialog
export function MobileFilter(props: MobileFilterProps) {
  const { sizes, colors } = props;
  const [isOpen, setIsOpen] = useState<boolean>(false);

  return (
    <>
      <Button
        onClick={() => setIsOpen(true)}
        className='flex items-center lg:hidden text-white'
      >
        <span className="mr-2">Filters</span>
        <Plus size={20} />
      </Button>
      <Dialog
        open={isOpen}
        onClose={() => setIsOpen(false)}
        className="relative z-40 lg:hidden"
      >
        <div className="fixed inset-0 bg-black bg-opacity-25">
          <Dialog.Panel className="relative ml-auto h-full w-full max-w-xs flex flex-col overflow-y-auto bg-white py-4 pb-6 shadow-xl">
            <div className="flex items-center justify-end px-4">
              <IconButton icon={<X />} onClick={() => setIsOpen(false)} />
            </div>
            <div className='p-4'>
              <Filter
                valueKey="sizeId"
                name="Sizes"
                data={sizes}
              />
              <Filter
                valueKey="colorId"
                name="Colors"
                data={colors}
              />
            </div>
          </Dialog.Panel>
        </div>
      </Dialog>
    </>
  );
}