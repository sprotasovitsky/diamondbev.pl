import type { AppProps } from 'next/app';
import { Inter } from 'next/font/google';
import '@/styles/globals.css';
import { LanguageProvider } from '@/contexts/LanguageContext';

const inter = Inter({ subsets: ['latin', 'latin-ext'] });

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <LanguageProvider>
      <div className={inter.className}>
        <Component {...pageProps} />
      </div>
    </LanguageProvider>
  );
}

export default MyApp;