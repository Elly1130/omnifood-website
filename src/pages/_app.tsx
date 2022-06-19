import type { AppProps } from 'next/app';
import Head from 'next/head';
import GlobalStyle from '../components/GlobalStyle';
import Layout from '../components/layout/Layout';

function MyApp({ Component, pageProps }: AppProps) {
  return <>
    <Head>
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    </Head>
    <Layout>
      <GlobalStyle />
      <Component {...pageProps} />
    </Layout>
  </>;
}

export default MyApp;
