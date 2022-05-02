import '../styles/globals.css'
import { ThemeProvider } from '@material-ui/core';
import Head from 'next/head';
import theme from '../ui/themes/theme';
import Header from '../ui/components/Header/Header';
import Footer from '../ui/components/Footer/Footer';
import DonationFooter from '../ui/components/Donation/Footer';
import DonationHeader from '../ui/components/Donation/Header';
import { useRouter } from 'next/router';

function MyApp({ Component, pageProps }) {
  const router = useRouter();
  let isDonationPath = /\/donation/.test(router.pathname)
  
  return (
    <>
      <Head>
        <title>Global Org</title>
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link href="https://fonts.googleapis.com/css2?family=Merriweather:wght@300&display=swap" rel="stylesheet"></link>
        <link href="https://fonts.googleapis.com/css2?family=Open+Sans:ital,wght@0,300;0,400;0,600;0,700;0,800;1,300;1,400;1,600;1,700;1,800&display=swap" rel="stylesheet" />
        <link rel="icon" href="/img/logo.png" />
      </Head>
      <ThemeProvider theme={theme}>
        {/* {
          isDonationPath ?
          <DonationHeader />
          :
          <Header />
        } */}
        <Component {...pageProps} />
        {
          isDonationPath ?
          <DonationFooter />
          :
          <Footer />
        }
      </ThemeProvider>
    </>
  )
}

export default MyApp
