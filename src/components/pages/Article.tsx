import { useEffect } from 'react';
import { styled } from '@mui/material';
import useSWRImmutable from 'swr/immutable';
import { useNavigate, useParams } from 'react-router-dom';
import ROUTES from '~/const/routes';
import { getFeedItem } from '~/api';
import ContentLayout from '~/components/layouts/ContentLayout';
import PageLayout from '~/components/layouts/PageLayout';
import ArticleHead from '~/components/ui/articleHead/ArticleHead';
import LinkBack from '~/components/ui/links/LinkBack';
import ButtonPage from '~/components/ui/buttons/ButtonPage';
import CommentsBlock from '~/components/ui/commentsBlock/CommentsBlock';
import Heading from '~/components/ui/heading/Heading';
import ButtonReload from '~/components/ui/buttons/ButtonReload';

const Article = () => {
  const { id } = useParams<'id'>();
  const { data, isValidating, mutate } = useSWRImmutable(id, getFeedItem, {
    refreshInterval: 60000,
  });

  const navigate = useNavigate();

  useEffect(() => {
    if (!isValidating && data === null) {
      navigate(ROUTES.NOTFOUND);
    }
  }, [navigate, data, isValidating]);

  return (
    <PageLayout
      headerProps={{
        leftChild: <LinkBack to={ROUTES.HOME} color="secondary" />,
        rightChild: data && data.url && (
          <ButtonPage href={data.url} LinkComponent={'a'} size="large" color="secondary" />
        ),
        isLoading: isValidating,
      }}
    >
      <ContentLayout>
        {data && (
          <main>
            <HeadSection>
              <ArticleHead {...data} />
            </HeadSection>
            <CommentSection>
              <Heading variant="h2">
                {data.comments_count > 0 ? `Comments: ${data.comments_count}` : 'No comments here'}
                <ButtonReload onClick={() => mutate()} disabled={isValidating} />
              </Heading>
              <CommentsBlock {...data} />
            </CommentSection>
          </main>
        )}
      </ContentLayout>
    </PageLayout>
  );
};

const HeadSection = styled('section')`
  padding-top: ${({ theme }) => theme.spacing(2)};
`;

const CommentSection = styled('section')`
  padding: ${({ theme }) => theme.spacing(5, 0, 2)};

  & > h2 {
    font-family: ${({ theme }) => theme.typography.fontFamily};
    padding-bottom: ${({ theme }) => theme.spacing(4)};
    display: flex;
    align-items: center;
  }
`;

export default Article;
