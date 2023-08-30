import type { Metadata, ResolvingMetadata } from 'next';

import { getProducts } from '@/actions/get-products';
import { getColors } from '@/actions/get-colors';
import { getCategory } from '@/actions/get-category';
import { NoResults } from '@/components/no-results';
import { ProductCard } from '@/components/product-card';
import { Billboard } from '@/components/billboard';
import { Filter } from './_components/filter';
import { MobileFilter } from './_components/mobile-filter';

export const revalidate = 0;

type CategoryPageProps = {
  params: {
    categoryId: string;
  };
  searchParams: {
    colorId: string;
  };
};

export async function generateMetadata(
  props: CategoryPageProps,
  parent: ResolvingMetadata
): Promise<Metadata> {
  const { params } = props;
  const category = await getCategory(params.categoryId);
  return {
    title: `${category.name} | Store`,
  };
}

// TODO Only get colors that exist for the current categoryId
export default async function CategoryPage(props: CategoryPageProps) {
  const { params, searchParams } = props;
  const { categoryId } = params;
  const { colorId } = searchParams;

  const products = await getProducts({
    categoryId,
    colorId,
  });

  const colors = await getColors();
  const category = await getCategory(categoryId);

  return (
    <>
      <Billboard data={category.billboard} />
      <div className='mb-4 mt-6 flex items-center justify-between'>
        <h3 className='text-3xl font-bold'>{category.name}</h3>
        <span className='block lg:hidden'>
          <MobileFilter colors={colors} />
        </span>
      </div>

      <div className='lg:grid lg:grid-cols-4 lg:gap-x-8'>
        <div className='hidden lg:col-span-1 lg:block'>
          <Filter valueKey='colorId' name='Colors' data={colors} />
        </div>

        <div className='lg:col-span-3'>
          {products.length === 0 && <NoResults />}
          <div className='grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3'>
            {products.map((product) => (
              <ProductCard key={product.id} data={product} />
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
