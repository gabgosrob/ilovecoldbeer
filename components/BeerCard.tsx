import Link from 'next/link'
import { BeerCardProps } from '@/lib/custom-types'

export default function BeerCard({ beer }: BeerCardProps) {
  return (
    <div className='border p-2 border-black dark:border-white'>
      <Link href={`/beer/${beer.id}`}>{beer.name}</Link>
    </div>
  )
}
