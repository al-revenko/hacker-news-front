import { FeedItem, ListArticlesType } from './types';
import { articlesPerPage, axiosInst, maxPageCount } from './config';

export async function getArticlesList(category: ListArticlesType, count: number) {
  if (count <= 0) {
    return [];
  }

  const argsPageCount = count >= articlesPerPage ? Math.ceil(count / articlesPerPage) : 1;

  const pageCount = argsPageCount <= maxPageCount[category] ? argsPageCount : maxPageCount[category];

  const feedList: FeedItem[] = [];

  for (let page = 1; page <= pageCount; page++) {
    const req = await axiosInst.get<FeedItem[]>(`${category}/${page}.json`);

    if (req.status === 200 && Array.isArray(req.data)) {
      feedList.push(...req.data);
    }
  }

  return feedList.slice(0, count).sort((a, b) => b.time - a.time);
}
