import { Link } from 'react-router-dom';
import { FeedItem } from '~/api/types';
import Heading from '../heading/Heading';
import { styled } from '@mui/material';
import COLORS from '~/const/colors';
import dayjs from 'dayjs';

interface FeedCardProps extends Pick<FeedItem, 'id' | 'user' | 'title' | 'points' | 'time'> {
  positionNumber: number;
}

const FeedCard = ({ id, title, user, points, time, positionNumber }: FeedCardProps) => {
  const dateFormat = 'DD MMMM';
  const timeFormat = 'HH:mm a';
  const dayjsInst = dayjs.unix(time);

  const dateString = `in ${dayjsInst.format(dateFormat)} at ${dayjsInst.format(timeFormat)}`;

  return (
    <ArticleLink to={`/article/${id}`}>
      <PointsCount>{points ? points : 0}</PointsCount>
      <Decor className="article-decor" />
      <Content>
        <Heading variant="h2" title={title} />
        <Info>
          <InfoData>{`#${positionNumber}`}</InfoData>
          <InfoData>
            {'by '}
            <InfoData className="user-name">{`${user ? user : 'unknown'}`}</InfoData>
          </InfoData>
          <InfoData>{dateString}</InfoData>
        </Info>
      </Content>
    </ArticleLink>
  );
};

const ArticleLink = styled(Link)`
  min-height: 55px;
  display: grid;
  grid-template-columns: 36px max-content 1fr;
  text-decoration: none;
  color: ${COLORS.font};

  &:hover {
    .article-decor {
      background-color: ${COLORS.primary};
    }
  }

  ${({ theme }) => theme.breakpoints.down('md')} {
    min-height: 90px;
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
  font-size: 18px;
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

  ${({ theme }) => theme.breakpoints.down(500)} {
    & > h2 {
      font-size: large;
    }
  }
`;

const Info = styled('div')`
  display: flex;
  gap: ${({ theme }) => theme.spacing(0.5)};

  ${({ theme }) => theme.breakpoints.down(500)} {
    & > h2 {
      font-size: large;
    }
  }
`;

const InfoData = styled('span')`
  color: ${COLORS.fontSecond};
  font-size: 16px;
  font-family: ${({ theme }) => theme.typography.fontFamily};

  &.user-name {
    font-weight: 600;
  }

  ${({ theme }) => theme.breakpoints.down(500)} {
    font-size: 12px;
  }
`;

export default FeedCard;
