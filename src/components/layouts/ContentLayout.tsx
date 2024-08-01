import { Container, styled } from '@mui/material';
import { PropsWithChildren } from 'react';

interface Props extends PropsWithChildren {}

const ContentLayout = ({ children }: Props) => {
  return <Content>{children}</Content>;
};

const Content = styled(Container)`
  height: 100%;
  max-width: ${({ theme }) => theme.breakpoints.values.md};
`;

export default ContentLayout;
