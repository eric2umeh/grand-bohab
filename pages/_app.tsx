import type { AppProps } from 'next/app';
import Aos from 'aos';
import { useEffect } from 'react';
import SrollTop from '../components/common/ScrollTop';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import 'swiper/css/scrollbar';
import 'swiper/css/effect-cards';
import 'aos/dist/aos.css';
import '../styles/index.scss';
import { Provider } from 'react-redux';
import { store } from '../app/store';
import Head from 'next/head';

if (typeof window !== 'undefined') {
  require('bootstrap/dist/js/bootstrap');
}

export default function App({ Component, pageProps }: AppProps) {
  useEffect(() => {
    Aos.init({
      duration: 1200,
      once: true,
    });
  }, []);
  return (
    <main>
      <Head>
        <title>Grand Bohabs</title>
      </Head>
      <Provider store={store}>
        <Component {...pageProps} />
        <SrollTop />
      </Provider>
    </main>
  );
}
