import { ComponentType, useState } from 'react';
import { styled, CircularProgress } from '@mui/material';
import { Item } from '~/api/types';
import COLORS from '~/const/colors';
import { timestampFormat } from '~/utils';
import ButtonArithmetic from '~/components/ui/buttons/ButtonArithmetic';

interface Props extends Pick<Item, 'user' | 'time' | 'content' | 'comments'> {
  CommentsList: ComponentType<{ comments: Item['comments'] }>;
}

const Comment = ({ CommentsList, user, time, content, comments }: Props) => {
  const [childsDispaly, setChildsDisplay] = useState(false);
  const [childsIsLoaded, setChildsIsLoaded] = useState(false);
  const [loaderIsShow, setLoaderIsShow] = useState(false);

  const timestamp = timestampFormat(time);

  const displayChilds = () => {
    if (!childsDispaly && !childsIsLoaded) {
      setLoaderIsShow(true);

      setTimeout(() => {
        setLoaderIsShow(false);
        setChildsIsLoaded(true);
        setChildsDisplay(true);
      }, 500);
    } else if (!childsDispaly) {
      setChildsDisplay(true);
    } else {
      setChildsDisplay(false);
    }
  };

  const setHTMLContent = () => {
    return { __html: content };
  };

  return (
    <>
      <CommentContainer>
        <SideContainer>
          {!!comments.length &&
            (loaderIsShow ? (
              <CircularProgress color="primary" size={15} />
            ) : (
              <ButtonArithmetic onClick={displayChilds} symbol={childsDispaly ? 'substract' : 'add'} />
            ))}
          <Decor height="100%" />
        </SideContainer>
        <div>
          <CommentHead>
            <User className="comment-user">{user || 'unknown'}</User>
            <span>{`${timestamp.date} ${timestamp.time}`}</span>
          </CommentHead>
          <Content dangerouslySetInnerHTML={setHTMLContent()} />
        </div>
      </CommentContainer>
      {childsIsLoaded && (
        <ChildrenContainer isShow={childsDispaly}>
          <CommentsList comments={comments} />
        </ChildrenContainer>
      )}
    </>
  );
};

const CommentContainer = styled('article')`
  padding-bottom: ${({ theme }) => theme.spacing(4)};
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

const ChildrenContainer = styled('div')<{ isShow: boolean }>`
  padding-left: ${({ theme }) => theme.spacing(1)};
  display: ${({ isShow }) => (isShow ? 'block' : 'none')};
`;

export default Comment;
