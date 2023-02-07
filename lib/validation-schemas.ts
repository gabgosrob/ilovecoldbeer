import { z } from 'zod'

export const beerReviewSchema = z.object({
  beerId: z.string().cuid(),
  comment: z.string().min(1).max(240),
  score: z.coerce.number().min(1).max(10),
})

export const beerAddSchema = z.object({
  name: z.string().min(1).max(80),
  brewer: z.string().min(1).max(80),
  style: z.string().min(1).max(80),
  color: z.string().min(1).max(80),
  description: z.string().min(1).max(240),
})
