import useSWR from 'swr';
import { getFeedList } from '~/api';
import { TIMINGS } from '~/const/timings';
import { SWRKEYS } from '~/const/swrKeys';
import PageLayout from '~/components/layouts/PageLayout';
import ButtonReload from '~/components/ui/buttons/ButtonReload';
import NewsFeed from '~/components/ui/newsFeed/NewsFeed';
import ContentLayout from '~/components/layouts/ContentLayout';
import Heading from '~/components/ui/heading/Heading';

const Home = () => {
  const { data, isValidating, mutate } = useSWR(SWRKEYS.getNewsList, (key) => getFeedList(key, 100), {
    refreshInterval: TIMINGS.dataUpdateTimeMS,
  });

  const renderContent = () => {
    if (data && data.length) {
      return <NewsFeed feedItems={data} />;
    }

    if (!isValidating) {
      return <Heading variant="h1">No news today</Heading>;
    }

    return null;
  };

  return (
    <PageLayout
      headerProps={{
        rightChild: <ButtonReload size="large" color="secondary" onClick={() => mutate()} disabled={isValidating} />,
        showLoader: isValidating,
      }}
    >
      <main>
        <section>
          <ContentLayout>{renderContent()}</ContentLayout>
        </section>
      </main>
    </PageLayout>
  );
};

export default Home;
