import { Product } from "@/types";

const API_URL = process.env.NEXT_PUBLIC_API_URL;
const URL = `${API_URL}/products`;

export async function getProduct(id: string): Promise<Product> {
  const res = await fetch(`${URL}/${id}`);

  if (!res.ok) {
    throw new Error(`[GET_PRODUCT]: ${res.statusText}`);
  }

  return res.json();
}
