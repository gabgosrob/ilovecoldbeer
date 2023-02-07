import { ReviewCardProps } from '@/lib/custom-types'
import Link from 'next/link'

export default function ReviewCard({ review }: ReviewCardProps) {
  return (
    <div className='flex flex-col justify-center items-center border p-2'>
      <Link href={`/user/${review.userId}`}>
        {review.userId.slice(0, 12)}... :{' '}
      </Link>
      <div>{review.comment}</div>
      <div>{review.score}/10</div>
    </div>
  )
}
