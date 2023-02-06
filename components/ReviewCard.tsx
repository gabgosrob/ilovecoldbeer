import { ReviewCardProps } from '@/lib/custom-types'

export default function ReviewCard({ review }: ReviewCardProps) {
  return (
    <div>
      <div>{review.comment}</div>
      <div>{review.score}</div>
      <div>{review.userId}</div>
    </div>
  )
}
