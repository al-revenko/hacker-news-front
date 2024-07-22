import { FeedItem } from '~/api/types';
import FeedCard from './FeedCard';
import { styled } from '@mui/material';

interface NewsFeedProps {
  feedItems: FeedItem[];
}

const NewsFeed = ({ feedItems }: NewsFeedProps) => {
  return (
    <List>
      {feedItems.map((item, idx) => (
        <li key={item.id}>
          <FeedCard positionNumber={idx + 1} {...item} />
        </li>
      ))}
    </List>
  );
};

const List = styled('ul')`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing(1.5)};
`;

export default NewsFeed;
