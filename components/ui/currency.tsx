'use client';

import { useState, useEffect } from 'react';

type CurrencyProps = {
  value?: string | number;
};

export function Currency(props: CurrencyProps) {
  const { value } = props;
  const [isMounted, setIsMounted] = useState<boolean>(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) {
    return null;
  }

  return (
    <div className="font-semibold">
      {priceFormatter().format(Number(value))}
    </div>
  );
}

function priceFormatter() {
  return new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
  });
}
