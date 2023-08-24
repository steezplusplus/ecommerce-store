'use client';

import { useState, useEffect } from 'react';

type CurrencyProps = {
  value?: string | number;
};

function priceFormatter() {
  return new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
  });
}

export function Currency(props: CurrencyProps) {
  const { value = 0 } = props;
  const [isMounted, setIsMounted] = useState<boolean>(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) {
    return null;
  }

  return (
    <p className='font-semibold'>{priceFormatter().format(Number(value))}</p>
  );
}
