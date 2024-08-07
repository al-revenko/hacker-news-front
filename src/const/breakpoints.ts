import { Breakpoint } from '@mui/material';

type BreakpointsType = {
  [key in Breakpoint]: number;
};

const BREAKPOINTS: BreakpointsType = {
  xs: 360,
  sm: 768,
  md: 1024,
  lg: 1440,
  xl: 1920,
  xxl: 3240,
} as const;

export default BREAKPOINTS;
