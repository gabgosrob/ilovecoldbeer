import type { NextApiRequest, NextApiResponse } from 'next'
import prisma from '@/lib/prismadb'
import { getServerSession } from 'next-auth/next'
import { authOptions } from './auth/[...nextauth]'

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const session = await getServerSession(req, res, authOptions)
  if (session && session.user) {
    const user = await prisma.user.findFirst({
      where: {
        email: session.user.email,
      },
      select: {
        id: true,
      },
    })

    if (!user) {
      return res.redirect('/')
    }

    const beer = req.body

    // verifications input

    const createdBeer = await prisma.beer.create({
      data: {
        userId: user.id,
        name: beer.name,
        brewer: beer.brewer,
        style: beer.style,
        color: beer.color,
        description: beer.description,
      },
    })
  }

  return res.redirect('/')
}
