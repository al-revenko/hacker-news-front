import CachedIcon from '@mui/icons-material/Cached';
import IconButton from '@mui/material/IconButton';
import { BtnProps } from './propsBtn';

const ButtonReload = ({ size, ...props }: BtnProps) => {
  return (
    <IconButton aria-label="reload" {...props}>
      <CachedIcon fontSize={size} />
    </IconButton>
  );
};

export default ButtonReload;
