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

    const review = req.body

    // verifications input

    // only one review per user!?

    const createdReview = await prisma.review.create({
      data: {
        userId: user.id,
        beerId: review.beerId,
        comment: review.comment,
        score: parseInt(review.score),
      },
    })

    return res.redirect(`/beer/${review.beerId}`)
  }

  return res.redirect('/')
}
