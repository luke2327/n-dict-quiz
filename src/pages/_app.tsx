import '../styles/globals.css';
import type { AppProps } from 'next/app';
import ThemeProvider from '@themes/ThemeProvider';
import CssBaseline from '@mui/material/CssBaseline';
import PetitHeader from '@components/general/PetitHeader';
import styles from '../styles/Home.module.css';
import { RecoilRoot } from 'recoil';
import YesOrNoDialog from '@components/general/YesOrNoDialog';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider>
      <RecoilRoot>
        <div className={styles.container}>
          <PetitHeader />
          <Component {...pageProps} />

          <YesOrNoDialog />
          <CssBaseline />
        </div>
      </RecoilRoot>
    </ThemeProvider>
  );
}

export default MyApp;
