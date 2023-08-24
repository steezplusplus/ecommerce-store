import { Category } from '@/types';

const API_URL = process.env.NEXT_PUBLIC_API_URL;
const URL = `${API_URL}/categories`;

export async function getCategory(id: string): Promise<Category> {
  const res = await fetch(`${URL}/${id}`);

  if (!res.ok) {
    throw new Error(`[GET_CATEGORY]: ${res.statusText}`);
  }

  return res.json();
}
