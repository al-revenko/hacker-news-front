import OpenInNewIcon from '@mui/icons-material/OpenInNew';
import IconButton from '@mui/material/IconButton';
import { BtnProps } from './btnProps.type';

const ButtonPage = ({ size, ...props }: BtnProps) => {
  return (
    <IconButton {...props}>
      <OpenInNewIcon fontSize={size} />
    </IconButton>
  );
};

export default ButtonPage;
