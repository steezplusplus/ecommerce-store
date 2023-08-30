import type { Metadata, ResolvingMetadata } from 'next';

import { ProductList } from '@/components/product-list';
import { Gallery } from '@/components/gallery';
import { Info } from '@/components/info';
import { getProducts } from '@/actions/get-products';
import { getProduct } from '@/actions/get-product';

type ProductPageProps = {
  params: {
    productId: string;
  };
};

export const revalidate = 0;

export async function generateMetadata(
  props: ProductPageProps,
  parent: ResolvingMetadata
): Promise<Metadata> {
  const { params } = props;
  const product = await getProduct(params.productId);
  return {
    title: `${product.name} | Store`,
  };
}

export default async function ProductPage(props: ProductPageProps) {
  const { params } = props;

  const product = await getProduct(params.productId);

  // TODO Bug: Sometimes suggests the product the user is already viewing.
  // TODO Limit to 4 suggest products being shown
  const suggestedProducts = await getProducts({
    categoryId: product?.category?.id,
  });

  return (
    <>
      <div className='lg:grid lg:grid-cols-2 lg:items-start lg:gap-x-8'>
        <Gallery name={product.name} images={product.images} />
        <div className='sm:mt-16 lg:mt-0'>
          <Info data={product} />
        </div>
      </div>
      <hr className='my-10' />
      <h3 className='mb-4 mt-6 text-3xl font-bold'>Featured Products</h3>
      <ProductList products={suggestedProducts} />
    </>
  );
}
