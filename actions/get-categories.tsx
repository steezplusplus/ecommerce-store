import { Category } from '@/types';

const API_URL = process.env.NEXT_PUBLIC_API_URL;
const URL = `${API_URL}/categories`;

export async function getCategories(): Promise<Category[]> {
  const res = await fetch(URL);
  if (!res.ok) {
    throw new Error(`[GET_CATEGORIES]: ${res.statusText}`);
  }
  return res.json();
}
