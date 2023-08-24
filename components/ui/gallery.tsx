'use client';

import NextImage from 'next/image';
import { Tab } from '@headlessui/react';

import { cn } from '@/lib/utils';
import { Image } from '@/types';

type GalleryProps = {
  images: Image[];
};

export function Gallery(props: GalleryProps) {
  const { images } = props;
  return (
    <Tab.Group as='div' className='flex flex-col-reverse'>
      <div className='mx-auto mt-6 hidden w-full max-w-2xl sm:block lg:max-w-none'>
        <Tab.List className='grid grid-cols-4 gap-6'>
          {images.map((image) => (
            <GalleryTab key={image.id} image={image} />
          ))}
        </Tab.List>
      </div>
      <Tab.Panels className='aspect-square w-full'>
        {images.map((image) => (
          <Tab.Panel key={image.id}>
            <div className='aspect-square relative h-full w-full sm:rounded-lg overflow-hidden'>
              <NextImage
                fill
                src={image.url}
                alt='Image' // TODO
                className='object-cover object-center'
              />
            </div>
          </Tab.Panel>
        ))}
      </Tab.Panels>
    </Tab.Group>
  );
}

type GalleryTabProps = {
  image: Image;
};

function GalleryTab(props: GalleryTabProps) {
  const { image } = props;
  return (
    <Tab className='relative flex aspect-square cursor-pointer items-center justify-center rounded-md bg-white'>
      {({ selected }) => (
        <div>
          <span className='absolute h-full w-full aspect-square inset-0 overflow-hidden rounded-md'>
            <NextImage
              fill
              src={image.url}
              alt='' // TODO
              className='object-cover object-center'
            />
          </span>
          <span
            className={cn(
              'absolute inset-0 rounded-md ring-2 ring-offset-2',
              selected ? 'ring-black' : 'ring-transparent',
            )}
          />
        </div>
      )}
    </Tab>
  );
}