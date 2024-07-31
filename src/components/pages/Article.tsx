import { useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import useSWR from 'swr';
import { styled } from '@mui/material';
import { getFeedItem } from '~/api';
import ROUTES from '~/const/routes';
import { TIMINGS } from '~/const/timings';
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
  const { data, isValidating, mutate } = useSWR(id, getFeedItem, {
    refreshInterval: TIMINGS.dataUpdateTimeMS,
    revalidateOnFocus: false,
  });

  const navigate = useNavigate();

  useEffect(() => {
    if (!isValidating && !data) {
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
        showLoader: isValidating,
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
