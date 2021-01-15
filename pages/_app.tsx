import React from 'react';
import Head from 'next/head';
import CssBaseline from '@material-ui/core/CssBaseline';
import { useEffect } from 'react';
import { ThemeProvider } from '@material-ui/core/styles';
import type { AppProps } from 'next/app';
import theme from '../styles/theme';
import Nav from '../src/components/nav';

function App({ Component, pageProps }: AppProps) {
  useEffect(() => {
    const jssStyles = document.querySelector('#jss-server-side');
    if (jssStyles) {
      jssStyles.parentElement?.removeChild(jssStyles);
    }
  }, []);

  return (
    <React.Fragment>
      <Head>
        <title>Boilerplate app</title>
        <meta
          name="viewport"
          content="minimum-scale=1, initial-scale=1, width=device-width"
        />
      </Head>
      <ThemeProvider theme={theme}>
        <Nav />
        <CssBaseline />
        <Component {...pageProps} />
      </ThemeProvider>
    </React.Fragment>
  );
}

export default App;
