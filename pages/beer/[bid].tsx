import { GetServerSideProps } from 'next'
import Head from 'next/head'
import prisma from '@/lib/prismadb'
import Link from 'next/link'
import { BeerProps } from '@/lib/custom-types'
import ReviewCard from '@/components/ReviewCard'

export default function BeerPage({ beer, reviews }: BeerProps) {
  let beerInfo
  let reviewsInfo

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
  if (!reviews) {
    reviewsInfo = (
      <div>
        <div>No reviews yet!</div>
      </div>
    )
  } else {
    reviewsInfo = reviews.map((review, key) => (
      <ReviewCard review={review} key={key} />
    ))
  }

  return (
    <div>
      <Head>
        <title>Beer page</title>
        <meta name='description' content={'Page of a beer'} />
        <meta name='viewport' content='width=device-width, initial-scale=1' />
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <main>
        <div>{beerInfo}</div>
        <Link href={beer ? `/beer/review/${beer.id}` : '/'}>
          Review this beer!
        </Link>
        <div className='flex flex-col'>{reviewsInfo}</div>
      </main>
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
  const reviews = await prisma.review.findMany({
    where: {
      beerId: beerId,
    },
  })

  return {
    props: {
      beer,
      reviews,
    },
  }
}
