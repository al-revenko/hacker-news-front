import { Item } from '~/api/types';
import Comment from './Comment';

interface Props {
  comments: Pick<Item, 'id' | 'user' | 'time' | 'type' | 'content' | 'comments'>[];
}

const CommentsBlock = ({ comments }: Props) => {
  const renderComments = () => {
    return comments.map((comment) => {
      if (comment.type !== 'comment') {
        console.warn(`Unexpected item type: ${comment.type}`);
        return null;
      }

      return (
        <li key={comment.id}>
          <Comment {...comment} CommentsList={CommentsBlock} />
        </li>
      );
    });
  };

  return <ul>{renderComments()}</ul>;
};

export default CommentsBlock;
