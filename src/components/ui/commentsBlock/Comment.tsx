import { useState } from 'react';
import { styled } from '@mui/material';
import { Item } from '~/api/types';
import COLORS from '~/const/colors';
import { timestampFormat } from '~/utils';
import ButtonArithmetic from '~/components/ui/buttons/ButtonArithmetic';
// eslint-disable-next-line import/no-cycle
import CommentsBlock from './CommentsBlock';

interface Props extends Pick<Item, 'user' | 'time' | 'content' | 'comments'> {}

const Comment = ({ user, time, content, comments }: Props) => {
  const [childsDispaly, setChildsDisplay] = useState(false);

  const timestamp = timestampFormat(time);

  const switchChildsDisplay = () => {
    childsDispaly ? setChildsDisplay(false) : setChildsDisplay(true);
  };

  const setHTMLContent = () => {
    return { __html: content };
  };

  return (
    <>
      <CommentContainer>
        <SideContainer>
          {comments.length > 0 && (
            <ButtonArithmetic onClick={switchChildsDisplay} symbol={childsDispaly ? 'substract' : 'add'} />
          )}
          <Decor height="100%" />
        </SideContainer>
        <div>
          <CommentHead>
            <User className="comment-user">{user ? user : 'unknown'}</User>
            <span>{`${timestamp.date} ${timestamp.time}`}</span>
          </CommentHead>
          <Content dangerouslySetInnerHTML={setHTMLContent()} />
        </div>
      </CommentContainer>
      {childsDispaly && (
        <ChildrenContainer>
          <CommentsBlock comments={comments} />
        </ChildrenContainer>
      )}
    </>
  );
};

const CommentContainer = styled('article')`
  display: grid;
  grid-template-columns: 10px 1fr;
  gap: ${({ theme }) => theme.spacing(1)};
  font-family: ${({ theme }) => theme.typography.fontFamily};
`;

const SideContainer = styled('div')`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: ${({ theme }) => theme.spacing(1)};
  height: 100%;

  & > button {
    width: 10px;
    height: 10px;
  }
`;

const Decor = styled('span')<{ height: string }>`
  display: inline-block;
  background-color: ${COLORS.fontSecond};
  height: ${({ height }) => height};
  width: 3px;
`;

const CommentHead = styled('div')`
  padding-bottom: ${({ theme }) => theme.spacing(2)};
  display: flex;
  flex-wrap: wrap;
  gap: ${({ theme }) => theme.spacing(1)};
  color: ${COLORS.fontSecond};
  font-size: 16px;
`;

const User = styled('span')`
  font-weight: 600;
`;

const Content = styled('div')`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing(1)};
  overflow-wrap: anywhere;

  a {
    color: ${COLORS.primary};

    &:hover {
      opacity: 0.7;
    }
  }
`;

const ChildrenContainer = styled('div')`
  padding: ${({ theme }) => theme.spacing(3, 0)};
  padding-left: ${({ theme }) => theme.spacing(1)};
`;

export default Comment;
