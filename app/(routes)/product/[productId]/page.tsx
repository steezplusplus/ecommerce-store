type ProductPageProps = {
  params: {
    productId: string;
  }
};

export default function ProducePage(props: ProductPageProps) {
  const { params } = props;
  return (
    <div>
      Show product:{' '}
      {params.productId}
    </div>
  );
}