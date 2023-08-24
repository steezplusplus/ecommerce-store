'use client';

import { useState, useEffect } from 'react';
import { ShoppingBag } from 'lucide-react';

import { Button } from '@/components/ui/button';

export function NavActions() {
  const [isMounted, setIsMounted] = useState<boolean>(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) {
    return null; // Prevent server from generating html
  }

  return (
    <>
      <li className='ml-auto pr-4'>
        <Button className='flex items-center rounded-full bg-black px-4 py-2'>
          <ShoppingBag size={20} color='white' />
          <span className='ml-2 text-sm font-medium text-white'>0</span>
        </Button>
      </li>
    </>
  );
}