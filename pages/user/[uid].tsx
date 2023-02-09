import { GetServerSideProps } from 'next'
import Head from 'next/head'
import prisma from '@/lib/prismadb'
import Image from 'next/image'
import { UserProps } from '@/lib/custom-types'
import Navbar from '@/components/Navbar'

export default function UserPage({ user }: UserProps) {
  let userInfo

  if (!user) {
    userInfo = <div>This user does not exist!</div>
  } else {
    userInfo = (
      <div className='flex flex-col justify-center items-center gap-6'>
        <div className='flex flex-col items-center gap-2'>
          <div className='font-bold text-xl'>{user.name}</div>
          <div className='text-sm'>{user.id}</div>
        </div>
        <Image
          src={user.image || ''}
          alt='User profile picture'
          width={265}
          height={265}
          style={{ borderRadius: '50%' }}
        />
        <div className='flex flex-col items-center gap-2'>
          <div>
            {user._count.addedBeers}{' '}
            {user._count.addedBeers == 1 ? 'beer' : 'beers'} added
          </div>
          <div>
            {user._count.reviews} {user._count.reviews == 1 ? 'beer' : 'beers'}{' '}
            reviewed
          </div>
        </div>
      </div>
    )
  }

  return (
    <div>
      <Head>
        <title>User page</title>
        <meta name='description' content='Page of a user' />
        <meta name='viewport' content='width=device-width, initial-scale=1' />
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <main className='m-3 mt-12 flex flex-col justify-center items-center gap-10'>
        <Navbar />
        {userInfo}
      </main>
    </div>
  )
}

export const getServerSideProps: GetServerSideProps = async (context) => {
  const userId = context.params?.uid?.toString()
  const user = await prisma.user.findFirst({
    where: {
      id: userId,
    },
    include: {
      _count: {
        select: { reviews: true, addedBeers: true },
      },
    },
  })

  return {
    props: {
      user,
    },
  }
}
