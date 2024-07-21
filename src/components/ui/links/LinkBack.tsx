import { Link } from 'react-router-dom';
import ButtonBack from '~/components/ui/buttons/ButtonBack';
import { LinkProps } from './linkProps.type';

const LinkBack = ({ to }: LinkProps) => {
  return <ButtonBack component={Link} to={to} size="large" color="secondary" />;
};

export default LinkBack;
