import { styled } from '@mui/material';
import { ComponentProps, PropsWithChildren } from 'react';
import COLORS from '~/const/colors';
import Header from '~/components/ui/header/Header';

interface Props extends PropsWithChildren {
  headerProps?: ComponentProps<typeof Header>;
}

const PageLayout = ({ headerProps, children }: Props) => {
  return (
    <>
      <Header {...headerProps} />
      <Content>{children}</Content>
    </>
  );
};

const Content = styled('div')`
  padding-top: ${({ theme }) => theme.spacing(9)};
  padding-bottom: ${({ theme }) => theme.spacing(4)};
  min-height: 100dvh;
  width: 100%;
  background-color: ${COLORS.secondary};
`;

export default PageLayout;
