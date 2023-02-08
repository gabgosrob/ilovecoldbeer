import { SessionProvider } from 'next-auth/react'
import { ThemeProvider } from 'next-themes'
import type { AppProps } from 'next/app'
import '@/styles/globals.css'

export default function App({ Component, pageProps }: AppProps) {
  return (
    <SessionProvider session={pageProps.session}>
      <ThemeProvider enableSystem={false} attribute='class' defaultTheme='dark'>
        <link rel='stylesheet' href='https://rsms.me/inter/inter.css' />
        <Component {...pageProps} />
      </ThemeProvider>
    </SessionProvider>
  )
}
