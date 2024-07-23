import { Container, styled } from '@mui/material';
import { PropsWithChildren } from 'react';

interface Props extends PropsWithChildren {}

const ContentLayout = ({ children }: Props) => {
  return <Content maxWidth={'md'}>{children}</Content>;
};

const Content = styled(Container)`
  height: 100%;
`;

export default ContentLayout;
