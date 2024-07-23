import { FeedItem, ListArticlesType } from './types';
import { articlesPerPage, axiosInst, maxPageCount } from './config';
import { isOk } from './utils';

export async function getArticlesList(category: ListArticlesType, count: number) {
  if (count <= 0) {
    return [];
  }

  const argsPageCount = count >= articlesPerPage ? Math.ceil(count / articlesPerPage) : 1;

  const pageCount = argsPageCount <= maxPageCount[category] ? argsPageCount : maxPageCount[category];

  const feedList: FeedItem[] = [];

  for (let page = 1; page <= pageCount; page++) {
    const res = await axiosInst.get<FeedItem[]>(`${category}/${page}.json`);

    if (isOk(res) && Array.isArray(res.data)) {
      feedList.push(...res.data);
    }
  }

  return feedList.slice(0, count).sort((a, b) => b.time - a.time);
}

export async function getArticle(id: number | string): Promise<FeedItem | null> {
  const res = await axiosInst.get<FeedItem>(`item/${id}.json`);

  if (isOk(res) && res.data.type === 'link') {
    return res.data;
  }

  return null;
}
