import Typography from '@mui/material/Typography';

export interface HeadingProp {
  title: string;
  variant: 'h1' | 'h2' | 'h3';
}

const Heading = ({ title, variant }: HeadingProp) => {
  let fontSize: number;

  switch (variant) {
    case 'h1':
      fontSize = 26;
      break;
    case 'h2':
      fontSize = 22;
      break;
    case 'h3':
      fontSize = 18;
      break;
  }

  return (
    <Typography variant={variant} fontSize={fontSize}>
      {title}
    </Typography>
  );
};

export default Heading;
