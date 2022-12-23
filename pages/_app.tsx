import type { AppProps } from 'next/app'
import Head from 'next/head';
import Script from 'next/script';
import GlobalStyle from "../styles";



function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-J7ER2ELKJE"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){window.dataLayer.push(arguments);}
          gtag('js', new Date());

          gtag('config', 'G-J7ER2ELKJE');
        `}
        </Script>
      

      <GlobalStyle />
      <Component {...pageProps} />



    </>
  )
}
export default MyApp
