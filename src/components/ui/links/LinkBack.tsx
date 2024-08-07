import { Link } from 'react-router-dom';
import { ButtonProps } from '@mui/material';
import { LinkProps } from './linkProps.type';
import ButtonBack from '~/components/ui/buttons/ButtonBack';

const LinkBack = ({ to, color }: Pick<ButtonProps, 'color'> & LinkProps) => {
  return <ButtonBack component={Link} to={to} size="large" color={color} />;
};

export default LinkBack;
