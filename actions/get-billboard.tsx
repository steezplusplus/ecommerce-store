import { Billboard } from '@/types';

const API_URL = process.env.NEXT_PUBLIC_API_URL;
const URL = `${API_URL}/billboards`;

export async function getBillboard(id: string): Promise<Billboard> {
  const res = await fetch(`${URL}/${id}`);
  if (!res.ok) {
    throw new Error(`[GET_BILLBOARD]: ${res.statusText}`);
  }
  return res.json();
}
