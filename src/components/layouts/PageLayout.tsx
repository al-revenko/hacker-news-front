import { styled } from '@mui/material';
import { PropsWithChildren } from 'react';
import COLORS from '~/const/colors';

interface Props extends PropsWithChildren {}

const PageLayout = ({ children }: Props) => {
  return <Content>{children}</Content>;
};

const Content = styled('main')`
  min-height: 100dvh;
  width: 100%;
  background-color: ${COLORS.secondary};
`;

export default PageLayout;
