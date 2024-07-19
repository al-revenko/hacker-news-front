import { useParams } from 'react-router-dom';
import PageLayout from '~/components/layouts/PageLayout';

const Article = () => {
  const { id } = useParams<'id'>();

  return (
    <PageLayout>
      <h1>Article {id}</h1>
    </PageLayout>
  );
};

export default Article;
