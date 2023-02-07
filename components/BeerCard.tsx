import Link from 'next/link'
import { BeerCardProps } from '@/lib/custom-types'

export default function BeerCard({ beer }: BeerCardProps) {
  return (
    <Link
      href={`/beer/${beer.id}`}
      className='border p-2 border-black dark:border-white'
    >
      {beer.name}
    </Link>
  )
}
