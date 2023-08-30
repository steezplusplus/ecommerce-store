import { Metadata } from 'next';

import { NoResults } from '@/components/no-results';
import { Billboard } from '@/components/billboard';
import { ProductList } from '@/components/product-list';
import { getBillboard } from '@/actions/get-billboard';
import { getProducts } from '@/actions/get-products';

export const revalidate = 0;

export const metadata: Metadata = {
  title: 'Featured Products | Store',
};

export default async function HomePage() {
  const products = await getProducts({ isFeatured: true });
  const billboard = await getBillboard('3622c3a7-e75b-4e84-a3bd-9107e76e4430'); // TODO pull primary billboard id out to env var?

  return (
    <>
      <Billboard data={billboard} />
      <h3 className='mb-4 mt-6 text-3xl font-bold'>Featured Products</h3>

      {products.length === 0 ? (
        <NoResults />
      ) : (
        <ProductList products={products} />
      )}
    </>
  );
}
