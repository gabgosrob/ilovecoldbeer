import { GetServerSideProps } from 'next'
import Head from 'next/head'
import prisma from '@/lib/prismadb'
import Link from 'next/link'
import { BeerProps } from '@/lib/custom-types'
import ReviewCard from '@/components/ReviewCard'
import Navbar from '@/components/Navbar'

export default function BeerPage({ beer, reviews }: BeerProps) {
  let beerInfo
  let reviewsInfo

  const averageScore =
    reviews.reduce((sum, review) => sum + review.score, 0) / reviews.length || 0

  if (!beer) {
    beerInfo = (
      <div>
        <div>This beer does not exist!</div>
      </div>
    )
  } else {
    beerInfo = (
      <div className='flex flex-col justify-center items-center gap-3 border p-3 max-w-md'>
        <div className='underline font-bold'>{beer.name}</div>
        <div className='flex flex-col'>
          <div>Brewer: {beer.brewer}</div>
          <div>Style: {beer.style}</div>
          <div>Color: {beer.color}</div>
          <div className='overflow-y-scroll'>
            Description: {beer.description}
          </div>
          <div>
            Average Score:{' '}
            {reviews.length
              ? `${Math.round(averageScore * 100) / 100}/10`
              : 'No reviews yet!'}
          </div>
        </div>
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
      <main className='m-3 flex flex-col justify-center items-center gap-6'>
        <Navbar />
        {beerInfo}
        <Link
          href={beer ? `/beer/review/${beer.id}` : '/'}
          className='border p-1'
        >
          Review this beer!
        </Link>
        <div className='flex gap-6'>{reviewsInfo}</div>
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
