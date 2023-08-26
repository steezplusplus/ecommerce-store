import { Container } from '@/components/ui/container';

import { Billboard } from './components/billboard';
import { ProductList } from '@/components/ui/product-list';
import { getBillboard } from '@/actions/get-billboard';
import { getProducts } from '@/actions/get-products';

export const revalidate = 0;

export default async function HomePage() {
  const products = await getProducts({ isFeatured: true });
  const billboard = await getBillboard('4e00e51c-4dbf-4430-b20d-f9e171cef23d');
  return (
    <Container>
      <div className='space-y-10 pb-10'>
        <Billboard data={billboard} />
        <div className='flex flex-col gap-y-8 px-4 sm:px-6 lg:px-8'>
          <ProductList title='Featured Products' items={products} />
        </div>
      </div>
    </Container>
  );
}
