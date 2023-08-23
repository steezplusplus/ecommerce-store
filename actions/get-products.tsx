import qs from "query-string";

import { Product } from "@/types";

const API_URL = process.env.NEXT_PUBLIC_API_URL;
const URL = `${API_URL}/products`;

type ProductsQuery = {
  categoryId?: string;
  colorId?: string;
  sizeId?: string;
  isFeatured?: boolean;
};

export async function getProducts(query: ProductsQuery): Promise<Product[]> {
  const url = qs.stringifyUrl({
    url: URL,
    query: {
      categoryId: query.categoryId,
      colorId: query.colorId,
      sizeId: query.sizeId,
      isFeatured: query.isFeatured,
    },
  });

  const res = await fetch(URL);

  if (!res.ok) {
    throw new Error(`[GET_PRODUCTS]: ${res.statusText}`);
  }

  return res.json();
}
