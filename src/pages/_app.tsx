import '../styles/globals.css'
import type { AppProps } from 'next/app';
import ThemeProvider from '@themes/ThemeProvider';
import CssBaseline from '@mui/material/CssBaseline';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider>
      <Component {...pageProps} />
      <CssBaseline />
    </ThemeProvider>
  );
}

export default MyApp
