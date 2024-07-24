import { styled } from '@mui/material';
import { Item } from '~/api/types';
// eslint-disable-next-line import/no-cycle
import Comment from './Comment';

interface Props {
  comments: Pick<Item, 'id' | 'user' | 'time' | 'type' | 'content' | 'comments'>[];
}

const CommentsBlock = ({ comments }: Props) => {
  const renderComments = () => {
    return comments.map((comment) => {
      if (comment.type !== 'comment') {
        return null;
      }

      return (
        <li key={comment.id}>
          <Comment {...comment} />
        </li>
      );
    });
  };

  return <List>{renderComments()}</List>;
};

const List = styled('ul')`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing(4)};
`;

export default CommentsBlock;
