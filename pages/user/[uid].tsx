import { GetServerSideProps } from 'next'
import Head from 'next/head'
import prisma from '@/lib/prismadb'
import Image from 'next/image'
import { UserProps } from '@/lib/custom-types'

export default function UserPage({ user }: UserProps) {
  let userInfo

  if (!user) {
    userInfo = (
      <div>
        <div>This user does not exist!</div>
      </div>
    )
  } else {
    userInfo = (
      <div>
        <div>{user.name}</div>
        <Image
          src={user.image || ''}
          alt='User profile picture'
          width={500}
          height={500}
        ></Image>
      </div>
    )
  }

  return (
    <div>
      <Head>
        <title>{user.name}</title>
        <meta name='description' content={`Page of the user ${user.name}`} />
        <meta name='viewport' content='width=device-width, initial-scale=1' />
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <main>{userInfo}</main>
    </div>
  )
}

export const getServerSideProps: GetServerSideProps = async (context) => {
  const userId = context.params?.bid?.toString()
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
