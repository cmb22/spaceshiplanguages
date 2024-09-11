import "../styles/globals.css";
import { NextUIProvider } from '@nextui-org/react'
import Header from "../components/Header";
import { GoogleAnalytics } from '@next/third-parties/google'

function MyApp({ Component, pageProps }) {
  return (
    <>
      <NextUIProvider>
        <Header />
        <Component {...pageProps} />
        <GoogleAnalytics gaId="GTM-TP7GQH5B" />
      </NextUIProvider>
    </>
  );
}

export default MyApp;