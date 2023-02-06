import { GetServerSideProps } from 'next'
import prisma from '@/lib/prismadb'
import Head from 'next/head'
import { BeerReviewProps } from '@/lib/custom-types'

export default function BeerReview({ beer }: BeerReviewProps) {
  if (!beer) {
    return <div>This beer does not exist!</div>
  }

  return (
    <div>
      <Head>
        <title>ilovecoldbeer</title>
        <meta name='description' content='Review a beer!' />
        <meta name='viewport' content='width=device-width, initial-scale=1' />
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <main>
        <div>Review {beer.name}</div>
        <form action='/api/review-beer' method='post'>
          <label htmlFor='comment'>Comment:</label>
          <input
            type='text'
            id='comment'
            name='comment'
            required
            maxLength={240}
          ></input>

          <label htmlFor='score'>Score:</label>
          <input
            type='number'
            id='score'
            name='score'
            required
            min={1}
            max={10}
          ></input>

          <input
            type='hidden'
            id='beerId'
            name='beerId'
            value={beer.id}
            readOnly={true}
            required
          ></input>

          <button type='submit'>Submit</button>
        </form>
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

  return {
    props: {
      beer,
    },
  }
}
