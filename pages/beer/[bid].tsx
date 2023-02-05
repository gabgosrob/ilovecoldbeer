import { GetServerSideProps } from 'next'
import Head from 'next/head'
import prisma from '@/lib/prismadb'
import Link from 'next/link'
import { BeerProps } from '@/lib/custom-types'

export default function BeerPage({ beer }: BeerProps) {
  let beerInfo

  if (!beer) {
    beerInfo = (
      <div>
        <div>This beer does not exist!</div>
      </div>
    )
  } else {
    beerInfo = (
      <div>
        <div>{beer.name}</div>
        <div>{beer.brewer}</div>
        <div>{beer.style}</div>
        <div>{beer.color}</div>
        <div>{beer.description}</div>
        <div>
          <Link href={`/user/${beer.userId}`}>Added by {beer.userId}</Link>
        </div>
      </div>
    )
  }

  return (
    <div>
      <Head>
        <title>{beer.name}</title>
        <meta name='description' content={`Page of the beer ${beer.name}`} />
        <meta name='viewport' content='width=device-width, initial-scale=1' />
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <main>{beerInfo}</main>
    </div>
  )
}

export const getServerSideProps: GetServerSideProps = async (context) => {
  const beerId = context.params?.bid?.toString()
  const beer = await prisma.beer.findFirst({
    where: {
      id: beerId,
    },
  })

  return {
    props: {
      beer,
    },
  }
}
