import { Product } from '@/types';
import { NoResults } from '@/components/no-results';
import { ProductCard } from '@/components/product-card';

type ProductListProps = {
  products: Product[];
};

export function ProductList(props: ProductListProps) {
  const { products } = props;
  return (
    <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
      {products.map((product) => (
        <ProductCard key={product.id} data={product} />
      ))}
    </div>
  );
}
