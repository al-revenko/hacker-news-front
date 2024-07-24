import { Link } from 'react-router-dom';
import { styled } from '@mui/material';
import ForumIcon from '@mui/icons-material/Forum';
import { timestampFormat } from '~/utils';
import { FeedItem } from '~/api/types';
import COLORS from '~/const/colors';
import Heading from '~/components/ui/heading/Heading';

interface FeedCardProps extends Pick<FeedItem, 'id' | 'user' | 'title' | 'points' | 'time' | 'comments_count'> {
  positionNumber: number;
}

const FeedCard = ({ id, title, user, points, time, comments_count, positionNumber }: FeedCardProps) => {
  const timestamp = timestampFormat(time, 'DD.MM.YYYY');

  const dateString = `${timestamp.date}`;

  return (
    <ArticleLink to={`/article/${id}`}>
      <PointsCount>{points ? points : 0}</PointsCount>
      <Decor className="article-decor" />
      <Content>
        <Heading variant="h2">{title}</Heading>
        <Info>
          <InfoData>{`#${positionNumber}`}</InfoData>
          <InfoData>
            {'by '}
            <InfoData className="user-name">{`${user ? user : 'unknown'}`}</InfoData>
          </InfoData>
          <InfoData>{dateString}</InfoData>
          <CommentsStat>
            <ForumIcon fontSize="inherit" />
            {comments_count}
          </CommentsStat>
        </Info>
      </Content>
    </ArticleLink>
  );
};

const ArticleLink = styled(Link)`
  height: 55px;
  display: grid;
  grid-template-columns: 50px max-content 1fr;
  text-decoration: none;
  color: ${COLORS.font};

  &:hover {
    .article-decor {
      background-color: ${COLORS.primary};
    }
  }

  ${({ theme }) => theme.breakpoints.down('md')} {
    height: 100px;
  }
`;

const Decor = styled('span')`
  width: 3px;
  margin: 0 ${({ theme }) => theme.spacing(1)};
  background-color: ${COLORS.fontSecond};
`;

const PointsCount = styled('span')`
  display: flex;
  justify-content: center;
  align-items: center;
  font-family: ${({ theme }) => theme.typography.fontFamily};
  color: ${COLORS.primary};
  font-weight: 700;
  font-size: 20px;
`;

const Content = styled('div')`
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  & > h2 {
    height: 100%;
    font-weight: 500;
    display: flex;
    align-items: center;
  }

  ${({ theme }) => theme.breakpoints.down(450)} {
    & > h2 {
      font-size: large;
    }
  }
`;

const Info = styled('div')`
  display: flex;
  gap: ${({ theme }) => theme.spacing(0.5)};
`;

const InfoData = styled('span')`
  color: ${COLORS.fontSecond};
  font-size: 14px;
  font-family: ${({ theme }) => theme.typography.fontFamily};

  &.user-name {
    font-weight: 600;
  }

  ${({ theme }) => theme.breakpoints.down(450)} {
    font-size: 12px;
  }
`;

const CommentsStat = styled(InfoData)`
  display: flex;
  align-items: center;
  gap: ${({ theme }) => theme.spacing(0.5)};
`;

export default FeedCard;
