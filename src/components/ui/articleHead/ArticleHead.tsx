import { styled } from '@mui/material';
import { FeedItem } from '~/api/types';
import COLORS from '~/const/colors';
import Heading from '~/components/ui/heading/Heading';
import { timestampFormat } from '~/utils';

interface Props extends Pick<FeedItem, 'user' | 'time' | 'title' | 'domain' | 'points'> {}

const ArticleHead = ({ title, user, time, domain, points }: Props) => {
  const timestamp = timestampFormat(time, 'DD MMMM YYYY');

  const dateString = `in ${timestamp.date} at ${timestamp.time}`;

  return (
    <Container>
      <Heading variant="h1">{title}</Heading>
      <InfoContainer>
        {points && (
          <InfoText>
            <Points>{points}</Points>
            {' pts'}
          </InfoText>
        )}
        {user && (
          <InfoText>
            {'by '}
            <User>{user}</User>
          </InfoText>
        )}
        {domain && <DomainLink href={'http://' + domain}>{' ' + domain}</DomainLink>}
        <InfoText>{dateString}</InfoText>
      </InfoContainer>
    </Container>
  );
};

const Container = styled('div')`
  padding-top: ${({ theme }) => theme.spacing(2)};
`;

const DomainLink = styled('a')`
  color: ${COLORS.primary};

  &:hover {
    opacity: 0.7;
  }
`;

const InfoContainer = styled('div')`
  padding-top: ${({ theme }) => theme.spacing(2)};
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  gap: ${({ theme }) => theme.spacing(1)};
  font-family: ${({ theme }) => theme.typography.fontFamily};
  font-size: 20px;
`;

const InfoText = styled('span')`
  color: ${COLORS.fontSecond};
`;

const Points = styled('span')`
  color: ${COLORS.primary};
`;

const User = styled('span')`
  font-weight: 700;
`;

export default ArticleHead;
