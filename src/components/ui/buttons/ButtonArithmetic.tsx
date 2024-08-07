import { SvgIconTypeMap } from '@mui/material';
import { OverridableComponent } from '@mui/material/OverridableComponent';
import IconButton from '@mui/material/IconButton';
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import { BtnProps } from './btnProps.type';

type IconMapType = Record<'add' | 'subtract', OverridableComponent<SvgIconTypeMap<{}, 'svg'>>>;
interface Props extends BtnProps {
  symbol: keyof IconMapType;
}

const ButtonArithmetic = ({ symbol, size, ...props }: Props) => {
  const iconMap: IconMapType = { add: AddIcon, subtract: RemoveIcon };

  const Icon = iconMap[symbol];

  return (
    <IconButton {...props}>
      <Icon fontSize={size} />
    </IconButton>
  );
};

export default ButtonArithmetic;
