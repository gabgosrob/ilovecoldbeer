import { z } from 'zod'

export const beerReviewSchema = z.object({
  beerId: z.string().max(256),
  comment: z.string().min(1).max(240),
  score: z.coerce.number().min(1).max(10),
})
