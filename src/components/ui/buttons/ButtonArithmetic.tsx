import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import IconButton from '@mui/material/IconButton';
import { BtnProps } from './btnProps.type';
import { SvgIconTypeMap } from '@mui/material';
import { OverridableComponent } from '@mui/material/OverridableComponent';

interface Props extends BtnProps {
  symbol: 'add' | 'substract';
}

const ButtonArithmetic = ({ symbol, size, ...props }: Props) => {
  let Icon: OverridableComponent<SvgIconTypeMap<{}, 'svg'>>;

  switch (symbol) {
    case 'add':
      Icon = AddIcon;
      break;

    case 'substract':
      Icon = RemoveIcon;
      break;
  }

  return (
    <IconButton {...props}>
      <Icon fontSize={size} />
    </IconButton>
  );
};

export default ButtonArithmetic;
