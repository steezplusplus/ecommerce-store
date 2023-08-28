import type { Metadata, ResolvingMetadata } from 'next';

import { Container } from '@/components/ui/container';
import { ProductList } from '@/components/ui/product-list';
import { Gallery } from '@/components/ui/gallery';
import { Info } from '@/components/ui/info';
import { getProducts } from '@/actions/get-products';
import { getProduct } from '@/actions/get-product';

type ProductPageProps = {
  params: {
    productId: string;
  };
};

export const revalidate = 0;

export async function generateMetadata(props: ProductPageProps, parent: ResolvingMetadata): Promise<Metadata> {
  const { params } = props;
  const product = await getProduct(params.productId);
  return {
    title: `${product.name} | Store`,
  };
}

export default async function ProductPage(props: ProductPageProps) {
  const { params } = props;

  const product = await getProduct(params.productId);

  const suggestedProducts = await getProducts({
    categoryId: product?.category?.id,
  });

  return (
    <div className='bg-white'>
      <Container>
        <div className='px-4 py-10 sm:px-6 lg:px-8'>
          <div className='lg:grid lg:grid-cols-2 lg:items-start lg:gap-x-8'>
            <Gallery images={product.images} />
            <div className='mt-10 px-4 sm:mt-16 sm:px-0 lg:mt-0'>
              <Info data={product} />
            </div>
          </div>
          <hr className='my-10' />
          <ProductList title='Related Items' items={suggestedProducts} />
        </div>
      </Container>
    </div>
  );
}
