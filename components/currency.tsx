'use client';

import { useState, useEffect } from 'react';

type CurrencyProps = {
  value?: string | number;
  className?: string;
};

function priceFormatter() {
  return new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
  });
}

// TODO Why is this a client component? For using INTL?
export function Currency(props: CurrencyProps) {
  const { value = 0, className } = props;
  const [isMounted, setIsMounted] = useState<boolean>(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) {
    return null;
  }

  return (
    <p className={`font-semibold ${className}`}>
      {priceFormatter().format(Number(value))}
    </p>
  );
}
