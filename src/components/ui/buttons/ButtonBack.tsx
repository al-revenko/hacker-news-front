import FirstPageIcon from '@mui/icons-material/FirstPage';
import IconButton from '@mui/material/IconButton';
import { BtnProps } from './btnProps.type';

const ButtonBack = ({ size, ...props }: BtnProps) => {
  return (
    <IconButton {...props}>
      <FirstPageIcon fontSize={size} />
    </IconButton>
  );
};

export default ButtonBack;
