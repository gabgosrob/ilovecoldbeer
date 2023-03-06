import type { NextApiRequest, NextApiResponse } from 'next'
import prisma from '@/lib/prismadb'
import { getServerSession } from 'next-auth/next'
import { authOptions } from './auth/[...nextauth]'
import { beerReviewSchema } from '@/lib/validation-schemas'

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const session = await getServerSession(req, res, authOptions)
  if (req.method != 'POST') {
    return res.redirect('/')
  }
  if (!session || !session.user) {
    return res.redirect('/')
  }

  const user = await prisma.user.findFirst({
    where: {
      email: session.user.email,
    },
    select: {
      id: true,
    },
  })
  if (!user || !user.id) {
    return res.redirect('/')
  }

  const review = req.body
  const validationResult = beerReviewSchema.safeParse(review)
  if (!validationResult.success) {
    return res.redirect('/')
  }

  await prisma.review.create({
    data: {
      userId: user.id,
      beerId: review.beerId,
      comment: review.comment,
      score: parseInt(review.score),
    },
  })

  return res.redirect(`/beer/${review.beerId}`)
}
