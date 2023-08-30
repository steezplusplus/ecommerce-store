'use client';

import NextImage from 'next/image';
import { Tab } from '@headlessui/react';

import { cn } from '@/lib/utils';
import { Image } from '@/types';

type GalleryProps = {
  images: Image[];
  name: string;
};

export function Gallery(props: GalleryProps) {
  const { images, name } = props;
  return (
    <Tab.Group as='div' className='flex flex-col-reverse'>
      <div className='mx-auto mt-6 hidden w-full max-w-2xl sm:block lg:max-w-none'>
        <Tab.List className='grid grid-cols-4 gap-6'>
          {images.map((image) => (
            <GalleryTab key={image.id} image={image} name={name} />
          ))}
        </Tab.List>
      </div>
      <Tab.Panels className='aspect-square w-full'>
        {images.map((image) => (
          <Tab.Panel key={image.id}>
            <div className='relative aspect-square h-full w-full overflow-hidden sm:rounded-lg'>
              <NextImage
                fill
                src={image.url}
                alt={`Image of ${name}`}
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
  name: string;
};

function GalleryTab(props: GalleryTabProps) {
  const { image, name } = props;
  return (
    <Tab className='relative flex aspect-square cursor-pointer items-center justify-center rounded-md bg-white'>
      {({ selected }) => (
        <div>
          <span className='absolute inset-0 aspect-square h-full w-full overflow-hidden rounded-md'>
            <NextImage
              fill
              src={image.url}
              alt={`Image of ${name}`}
              className='object-cover object-center'
            />
          </span>
          <span
            className={cn(
              'absolute inset-0 rounded-md ring-2 ring-offset-2',
              selected ? 'ring-black' : 'ring-transparent'
            )}
          />
        </div>
      )}
    </Tab>
  );
}
