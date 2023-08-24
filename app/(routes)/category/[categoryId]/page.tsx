import { getProducts } from "@/actions/get-products";
import { getSizes } from "@/actions/get-sizes";
import { getColors } from "@/actions/get-colors";
import { getCategory } from "@/actions/get-category";
import { Container } from "@/components/ui/container";
import { Billboard } from "../../components/billboard";


export const revalidate = 0;

type CategoryPageProps = {
  params: {
    categoryId: string;
  };
  searchParams: {
    colorId: string;
    sizeId: string;
  };
};

export default async function CategoryPage(props: CategoryPageProps) {
  const { params, searchParams } = props;
  const { categoryId } = params;
  const { colorId, sizeId } = searchParams;

  const products = await getProducts({
    categoryId,
    colorId,
    sizeId,
  });

  const sizes = await getSizes();
  const colors = await getColors();
  const category = await getCategory(categoryId)

  return (
    <>
      <div className='bg-white'>
        <Container>
          <Billboard data={category.billboard} />
        </Container>
      </div>
      <div>
        <p>Products:</p>
        {products.map((product) => (
          <p key={product.id}>{product.name}</p>
        ))}
        <br />
        <p>Sizes:</p>
        {sizes.map((size) => (
          <p key={size.id}>{size.name}</p>
        ))}
        <br />
        <p>Colors:</p>
        {colors.map((color) => (
          <p key={color.id}>{color.name}</p>
        ))}
        <br />
        <p>Category {category.name}</p>
      </div>
    </>
  );
}