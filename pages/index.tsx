import Head from 'next/head'
import Router from 'next/router'
import { GetServerSideProps } from 'next'
import { IndexProps } from '@/lib/custom-types'
import prisma from '@/lib/prismadb'
import BeerCard from '@/components/BeerCard'
import Navbar from '@/components/Navbar'

export default function Home({ beers }: IndexProps) {
  const beerComponents = beers.map((beer, key) => (
    <BeerCard beer={beer} key={key} />
  ))

  return (
    <div>
      <Head>
        <title>ilovecoldbeer</title>
        <meta name='description' content='Review your favorite beer!' />
        <meta name='viewport' content='width=device-width, initial-scale=1' />
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <main className='m-3'>
        <Navbar />
        <button onClick={() => Router.push('/beer/add-beer')}>
          Add a beer!
        </button>
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
