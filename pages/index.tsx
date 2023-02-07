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
        <div className='flex justify-center items-center gap-4'>
          {beerComponents}
          <Link
            href='/beer/add-beer'
            className='border p-2 border-black dark:border-white'
          >
            +
          </Link>
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
