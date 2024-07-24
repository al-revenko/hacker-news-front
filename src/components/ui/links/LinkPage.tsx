import { ButtonProps } from '@mui/material';
import { LinkProps } from './linkProps.type';
import ButtonPage from '~/components/ui/buttons/ButtonPage';

const LinkPage = ({ to, color }: Pick<ButtonProps, 'color'> & LinkProps) => {
  return <ButtonPage component={'a'} href={to} size="large" color={color} />;
};

export default LinkPage;
