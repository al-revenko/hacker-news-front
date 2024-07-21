import ContentLayout from '~/components/layouts/ContentLayout';
import { AppBar, Typography, TypographyProps } from '@mui/material';
import COLORS from '~/const/colors';
import styled from '@emotion/styled';
import { ReactNode } from 'react';

interface HeaderProps {
  leftChild?: ReactNode;
  rightChild?: ReactNode;
}

const Header = ({ leftChild, rightChild }: HeaderProps) => {
  return (
    <MenuBar>
      <ContentLayout>
        <Content>
          <ChildContainer>{leftChild}</ChildContainer>
          <Logo variant="h1" component="span">Y</Logo>
          <ChildContainerEnd>{rightChild}</ChildContainerEnd>
        </Content>
      </ContentLayout>
    </MenuBar>
  );
};

const MenuBar = styled(AppBar)`
  background-color: ${COLORS.primary};
  height: 60px;
`;

const Content = styled('div')`
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 100%;
`;

const Logo = styled(Typography)<TypographyProps & {component: React.ElementType}>`
  width: 42px;
  height: 42px;
  margin: 0 auto;
  padding: 5px 12px;
  font-size: 28px;
  color: ${COLORS.primary};
  background-color: ${COLORS.white};
  filter: drop-shadow(1px 1px 1px ${COLORS.fontSecond});
  border-radius: 3px;
`;

const ChildContainer = styled('div')`
  height: 100%;
  width: 100%;
  display: flex;
  align-items: center;
`;

const ChildContainerEnd = styled(ChildContainer)`
  justify-content: flex-end;
`;

export default Header;
