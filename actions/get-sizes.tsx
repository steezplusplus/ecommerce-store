import { Size } from '@/types';

const API_URL = process.env.NEXT_PUBLIC_API_URL;
const URL = `${API_URL}/sizes`;

export async function getSizes(): Promise<Size[]> {
  const res = await fetch(URL);

  if (!res.ok) {
    throw new Error(`[GET_SIZES]: ${res.statusText}`);
  }

  return res.json();
}
