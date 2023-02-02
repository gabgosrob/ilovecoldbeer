import Head from 'next/head'
import LoginButton from '@/components/LoginButton'
import ThemeToggler from '@/components/ThemeToggler'

export default function Home() {
  return (
    <div>
      <Head>
        <title>ilovecoldbeer</title>
        <meta name='description' content='Review your favorite beer!' />
        <meta name='viewport' content='width=device-width, initial-scale=1' />
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <main>
        <LoginButton />
        <ThemeToggler />
      </main>
    </div>
  )
}
