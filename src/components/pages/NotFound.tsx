import PageLayout from '~/components/layouts/PageLayout';
import ROUTES from '~/const/routes';
import LinkBack from '~/components/ui/links/LinkBack';

const NotFound = () => {
  return (
    <PageLayout headerProps={{leftChild: <LinkBack to={ROUTES.HOME} />}} >
      <h1>Not Found</h1>
    </PageLayout>
  );
};

export default NotFound;
