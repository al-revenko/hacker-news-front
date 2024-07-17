import { PropsWithChildren } from 'react';

interface Props extends PropsWithChildren {}

const PageLayout = ({ children }: Props) => {
  return <div>{children}</div>;
};

export default PageLayout;
