import FirstPageIcon from '@mui/icons-material/FirstPage';
import IconButton from '@mui/material/IconButton';
import { BtnProps } from './propsBtn';

const ButtonBack = ({ size, ...props }: BtnProps) => {
  return (
    <IconButton aria-label="reload" {...props}>
      <FirstPageIcon fontSize={size} />
    </IconButton>
  );
};

export default ButtonBack;
