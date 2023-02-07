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
        <div>Name: {user.name}</div>
        <div>ID: {user.id}</div>
        <Image
          src={user.image || ''}
          alt='User profile picture'
          width={265}
          height={265}
        ></Image>
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
  })

  return {
    props: {
      user,
    },
  }
}
