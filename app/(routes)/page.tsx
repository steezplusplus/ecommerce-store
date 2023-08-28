import { Container } from '@/components/ui/container';

import { Billboard } from './components/billboard';
import { ProductList } from '@/components/ui/product-list';
import { getBillboard } from '@/actions/get-billboard';
import { getProducts } from '@/actions/get-products';

export const revalidate = 0;

export default async function HomePage() {
  const products = await getProducts({ isFeatured: true });
  const billboard = await getBillboard('3622c3a7-e75b-4e84-a3bd-9107e76e4430'); // TODO pull primary billboard id out to env var?
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
