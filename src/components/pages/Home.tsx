import PageLayout from '~/components/layouts/PageLayout';
import Header from '~/components/ui/header/Header';
import ButtonReload from '~/components/ui/buttons/ButtonReload';

const Home = () => {
  return (
    <PageLayout>
      <Header rightChild={<ButtonReload size="large" color="secondary" />} />
      <h1>Home</h1>
    </PageLayout>
  );
};

export default Home;
