import { Beer, Review, User } from '@prisma/client'

export type BeerProps = {
  beer: Beer
  reviews: Review[]
}

export type UserProps = {
  user: User & {
    _count: {
      addedBeers: number
      reviews: number
    }
  }
}

export type IndexProps = {
  beers: Beer[]
}

export type BeerCardProps = {
  beer: Beer
}

export type BeerReviewProps = {
  beer: Beer
}

export type ReviewCardProps = {
  review: Review
}
