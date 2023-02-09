import { ReviewCardProps } from '@/lib/custom-types'
import Link from 'next/link'

export default function ReviewCard({ review }: ReviewCardProps) {
  let backgroundColor

  if (review.score <= 2) {
    backgroundColor = 'bg-red-600'
  } else if (review.score <= 4) {
    backgroundColor = 'bg-orange-600'
  } else if (review.score <= 6) {
    backgroundColor = 'bg-orange-400'
  } else if (review.score <= 8) {
    backgroundColor = 'bg-yellow-300'
  } else {
    backgroundColor = 'bg-green-600'
  }

  return (
    <div
      className={`${backgroundColor} text-black flex flex-col justify-center items-center p-2 max-w-xs border border-gray-200 rounded-lg shadow transition-all`}
    >
      <Link href={`/user/${review.userId}`}>
        {review.userId.slice(0, 12)}... :{' '}
      </Link>
      <div className='text-center'>{review.comment}</div>
      <div>{review.score}/10</div>
    </div>
  )
}
