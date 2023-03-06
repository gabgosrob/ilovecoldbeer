import { GetServerSideProps } from 'next'
import prisma from '@/lib/prismadb'
import Head from 'next/head'
import { BeerReviewProps } from '@/lib/custom-types'
import { useSession } from 'next-auth/react'
import Router from 'next/router'
import Navbar from '@/components/Navbar'
import Spinner from '@/components/Spinner'
import Link from 'next/link'

export default function BeerReview({ beer }: BeerReviewProps) {
  const { status } = useSession({
    required: true,
    onUnauthenticated() {
      return Router.push('/api/auth/signin')
    },
  })

  if (status === 'loading') {
    return (
      <div className='flex items-center justify-center mt-10'>
        <Spinner />
      </div>
    )
  }

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
      <main className='m-3 mt-12 flex flex-col justify-center items-center gap-10'>
        <Navbar />
        <div className='text-lg'>
          Review{' '}
          <Link href={`/beer/${beer.id}`}>
            {"'"}
            {beer.name}
            {"'"}
          </Link>
        </div>
        <form
          action='/api/review-beer'
          method='post'
          className='flex flex-col gap-4'
          id='reviewform'
        >
          <div className='flex flex-col gap-1'>
            <label htmlFor='comment'>Comment:</label>
            <textarea
              form='reviewform'
              id='comment'
              name='comment'
              required
              maxLength={240}
              className='shadow appearance-none border rounded h-20 p-1'
            ></textarea>
          </div>

          <div className='flex flex-col gap-1'>
            <label htmlFor='score'>Score:</label>
            <input
              type='text'
              id='score'
              name='score'
              required
              pattern='^(?:[1-9]|0[1-9]|10)$'
              placeholder={'1-10'}
              className='shadow appearance-none border rounded p-1'
            ></input>
          </div>

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
