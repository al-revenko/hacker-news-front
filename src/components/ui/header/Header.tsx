import ContentLayout from '~/components/layouts/ContentLayout';
import { AppBar } from '@mui/material';
import COLORS from '~/const/colors';
import styled from '@emotion/styled';
import { ReactNode } from 'react';
import LogoIcon from '~/assets/icons/logo.svg?react';
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
          <Logo />
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
  display: grid;
  grid-template-columns: 1fr 60px 1fr;
  grid-template-rows: 60px;
`;

const Logo = styled(LogoIcon)`
  width: 100%;
  height: 100%;
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
