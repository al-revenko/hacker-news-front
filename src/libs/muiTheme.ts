import { createTheme } from '@mui/material';
import BREAKPOINTS from '~/const/breakpoints';
import COLORS from '~/const/colors';

const miniUnit = 8;

const muiTheme = createTheme({
  palette: {
    mode: 'light',

    primary: {
      main: COLORS.primary,
    },

    secondary: {
      main: COLORS.secondary,
    },

    text: {
      primary: COLORS.font,
      secondary: COLORS.fontSecond,
      accent: COLORS.fontAccent,
    },

    background: {
      default: COLORS.secondary,
    },

    common: {
      white: COLORS.white,
      black: COLORS.black,
    },
  },
  spacing: (factor: number) => `${factor * miniUnit}px`,

  shape: {
    borderRadius: 0,
  },

  breakpoints: {
    values: {
      ...BREAKPOINTS,
    },
  },
});

export default muiTheme;
