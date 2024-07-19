import axios from 'axios';
import { ListArticlesType } from './types';

export const axiosInst = axios.create({
  baseURL: import.meta.env.VITE_BACKEND_URL,
  timeout: 1000,
});

export const articlesPerPage: number = 30;

export const maxPageCount: { readonly [K in ListArticlesType]: number } = {
  news: 10,
  newest: 12,
  ask: 2,
  show: 2,
  jobs: 1,
};
