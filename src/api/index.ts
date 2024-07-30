import axios from 'axios';
import { FeedCategory, FeedItem, Item } from './types';
import { isOk } from './utils';

const axiosInst = axios.create({
  baseURL: import.meta.env.VITE_BACKEND_URL,
  validateStatus: function (status) {
    return status < 500;
  },
});

export async function getFeedList(category: FeedCategory, count: number = 0) {
  const res = await axiosInst.get<FeedItem[]>(`feed/${category}?count=${count}`);

  if (isOk(res) && Array.isArray(res.data)) {
    return res.data;
  }

  return null;
}

export async function getFeedItem(id: number | string): Promise<Item | null> {
  const res = await axiosInst.get<Item>(`item/${id}`);

  if (isOk(res)) {
    return res.data;
  }

  return null;
}
