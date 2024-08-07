import ROUTES from '~/const/routes';
import PageLayout from '~/components/layouts/PageLayout';
import LinkBack from '~/components/ui/links/LinkBack';
import Heading from '~/components/ui/heading/Heading';
import ContentLayout from '~/components/layouts/ContentLayout';

const NotFound = () => {
  return (
    <PageLayout headerProps={{ leftChild: <LinkBack to={ROUTES.HOME} color="secondary" /> }}>
      <ContentLayout>
        <Heading variant="h1">404: NOT FOUND</Heading>
      </ContentLayout>
    </PageLayout>
  );
};

export default NotFound;
