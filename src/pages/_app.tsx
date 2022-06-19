import type { AppProps } from 'next/app';
import GlobalStyle from '../components/GlobalStyle';
import Layout from '../components/layout/Layout';

function MyApp({ Component, pageProps }: AppProps) {
  return <>
    <Layout>
      <GlobalStyle />
      <Component {...pageProps} />
    </Layout>
  </>;
}

export default MyApp;
