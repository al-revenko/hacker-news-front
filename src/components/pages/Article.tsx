import { Link, useParams } from 'react-router-dom';
import PageLayout from '~/components/layouts/PageLayout';
import Header from '~/components/ui/header/Header';
import ButtonBack from '~/components/ui/buttons/ButtonBack';

const Article = () => {
  const { id } = useParams<'id'>();

  return (
    <PageLayout>
      <Header leftChild={<ButtonBack component={Link} to={'/'} size="large" color="secondary" />} />
      <h1>Article {id}</h1>
    </PageLayout>
  );
};

export default Article;
