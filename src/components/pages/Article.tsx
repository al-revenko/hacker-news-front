import { useParams } from 'react-router-dom';
import PageLayout from '~/components/layouts/PageLayout';
import ROUTES from '~/const/routes';
import LinkBack from '~/components/ui/links/LinkBack';

const Article = () => {
  const { id } = useParams<'id'>();

  return (
    <PageLayout headerProps={{leftChild: <LinkBack to={ROUTES.HOME} />}}>
      <h1>Article {id}</h1>
    </PageLayout>
  );
};

export default Article;
