import { Color } from '@/types';

const API_URL = process.env.NEXT_PUBLIC_API_URL;
const URL = `${API_URL}/colors`;

export async function getColors(): Promise<Color[]> {
  const res = await fetch(URL);

  if (!res.ok) {
    throw new Error(`[GET_COLORS]: ${res.statusText}`);
  }

  return res.json();
}
