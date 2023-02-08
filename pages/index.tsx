import Head from 'next/head'
import Link from 'next/link'
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
      <main className='m-3 mt-12 flex flex-col gap-10'>
        <Navbar />
        <div className='flex flex-col justify-center items-center gap-10'>
          <div className='text-lg'>Add and review your favorite beers!</div>
          <div className='flex flex-wrap items-center justify-center gap-6 max-w-lg'>
            {beerComponents}
            <Link
              href='/beer/add-beer'
              className='font-bold p-3 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-zinc-800 dark:hover:bg-zinc-700'
            >
              +
            </Link>
          </div>
        </div>
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
