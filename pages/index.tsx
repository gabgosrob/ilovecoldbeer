import Head from 'next/head'
import Router from 'next/router'
import Link from 'next/link'
import { GetServerSideProps } from 'next'
import { IndexProps } from '@/lib/custom-types'
import prisma from '@/lib/prismadb'
import LoginButton from '@/components/LoginButton'
import ThemeToggler from '@/components/ThemeToggler'

export default function Home({ beers }: IndexProps) {
  const beerComponents = beers.map((beer, key) => (
    <Link href={`/beer/${beer.id}`} key={key}>
      {beer.name}
    </Link>
  ))

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
        <button onClick={() => Router.push('/add-beer')}>Add a beer!</button>
        <div className='flex flex-col'>{beerComponents}</div>
      </main>
    </div>
  )
}

export const getServerSideProps: GetServerSideProps = async () => {
  const beers = await prisma.beer.findMany()

  return {
    props: {
      beers,
    },
  }
}
