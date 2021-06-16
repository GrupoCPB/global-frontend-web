import '../styles/globals.css';
import { ThemeProvider } from '@material-ui/core';
import Head from 'next/head';
import theme from '../ui/themes/theme';
import Header from '../ui/components/Header/Header';
import Footer from '../ui/components/Footer/Footer';

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>Globall Org</title>
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link href="https://fonts.googleapis.com/css2?family=Open+Sans:ital,wght@0,300;0,400;0,600;0,700;0,800;1,300;1,400;1,600;1,700;1,800&display=swap" rel="stylesheet" />
      </Head>
      <ThemeProvider theme={theme}>
        <Header />
        <Component {...pageProps} />
        <Footer />
      </ThemeProvider>
    </>
  );
}

export default MyApp;
