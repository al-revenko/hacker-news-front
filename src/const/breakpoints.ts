import { Breakpoint } from '@mui/material';

type BreakpointsType = {
  [key in Breakpoint]: number;
};

const BREAKPOINTS: BreakpointsType = {
  xs: 360,
  sm: 768,
  md: 1440,
  lg: 1920,
  xl: 3240,
} as const;

export default BREAKPOINTS;
