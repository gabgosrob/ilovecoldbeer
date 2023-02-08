import Link from 'next/link'
import { BeerCardProps } from '@/lib/custom-types'

export default function BeerCard({ beer }: BeerCardProps) {
  return (
    <Link
      href={`/beer/${beer.id}`}
      className='flex flex-col items-center gap-1 max-w-sm p-4 bg-white border border-gray-200 rounded-lg shadow hover:scale-110 transition-all hover:bg-gray-100 dark:bg-zinc-800 dark:hover:bg-zinc-700'
    >
      <div className='text-xl font-bold'>{beer.name}</div>
      <div className='text-sm'>{beer.style}</div>
    </Link>
  )
}
