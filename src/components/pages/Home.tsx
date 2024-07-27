import useSWR from 'swr';
import { getFeedList } from '~/api';
import PageLayout from '~/components/layouts/PageLayout';
import ButtonReload from '~/components/ui/buttons/ButtonReload';
import { SWRKEYS } from '~/const/swrKeys';
import NewsFeed from '~/components/ui/newsFeed/NewsFeed';
import ContentLayout from '~/components/layouts/ContentLayout';

const Home = () => {
  const { data, isValidating, mutate } = useSWR(SWRKEYS.getNewsList, (key) => getFeedList(key, 100), {
    refreshInterval: 60000,
  });

  return (
    <PageLayout
      headerProps={{
        rightChild: <ButtonReload size="large" color="secondary" onClick={() => mutate()} disabled={isValidating} />,
        isLoading: isValidating,
      }}
    >
      <main>
        <section>
          <ContentLayout>
            <NewsFeed feedItems={data ?? []} />
          </ContentLayout>
        </section>
      </main>
    </PageLayout>
  );
};

export default Home;
