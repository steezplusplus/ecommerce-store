import type { Metadata, ResolvingMetadata } from 'next';

import { getProducts } from "@/actions/get-products";
import { getColors } from "@/actions/get-colors";
import { getCategory } from "@/actions/get-category";
import { Container } from "@/components/ui/container";
import { NoResults } from "@/components/ui/no-results";
import { ProductCard } from "@/components/ui/product-card";
import { Filter } from "./components/filter";
import { MobileFilter } from "./components/mobile-filter";
import { Billboard } from "../../components/billboard";

export const revalidate = 0;

type CategoryPageProps = {
  params: {
    categoryId: string;
  };
  searchParams: {
    colorId: string;
  };
};

export async function generateMetadata(props: CategoryPageProps, parent: ResolvingMetadata): Promise<Metadata> {
  const { params } = props;
  const category = await getCategory(params.categoryId);
  return {
    title: `${category.name} | Store`,
  };
}

export default async function CategoryPage(props: CategoryPageProps) {
  const { params, searchParams } = props;
  const { categoryId } = params;
  const { colorId } = searchParams;

  const products = await getProducts({
    categoryId,
    colorId,
  });

  const colors = await getColors();
  const category = await getCategory(categoryId)

  return (
    <div>
      <Container>
        <Billboard data={category.billboard} />
        <div className="px-4 sm:px-6 lg:px-8 pb-24">
          <div className="lg:grid lg:grid-cols-5 lg:gap-x-8">
            <MobileFilter colors={colors} />
            <div className="hidden lg:block">
              <Filter
                valueKey="colorId"
                name="Colors"
                data={colors}
              />
            </div>
            <div className="mt-6 lg:col-span-4 lg:mt-0">
              {products.length === 0 && <NoResults />}
              <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4'>
                {products.map((product) => (
                  <ProductCard key={product.id} data={product} />
                ))}
              </div>
            </div>
          </div>
        </div>
      </Container>

    </div>
  );
}