import { AppProps } from 'next/app'
import '@/components/global.css'
import AppWalletProvider from '@/components/Layouts/Header/AppWalletProvider'

export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <AppWalletProvider>
      <Component {...pageProps} />
    </AppWalletProvider>
  )
}
