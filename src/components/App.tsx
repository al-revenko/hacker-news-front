import { ThemeProvider } from '@mui/material';
import Router from '~/components/Router';
import muiTheme from '~/libs/muiTheme';

function App() {
  return (
    <>
      <ThemeProvider theme={muiTheme}>
        <Router />
      </ThemeProvider>
    </>
  );
}

export default App;
