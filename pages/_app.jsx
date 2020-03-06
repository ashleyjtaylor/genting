import '../styles/scss/index.scss';

import React from 'react';
import { ThemeProvider } from 'styled-components';

import Theme from '../styles/theme';
import Error from '../components/Error/Error'

export default function MyApp({ Component, pageProps }) {
  return (
    <ThemeProvider theme={Theme}>
      {pageProps.statusCode ? (
        <Error statusCode={pageProps.statusCode} />
      ) : (
        <Component {...pageProps} />
      )}
    </ThemeProvider>
  );
};
