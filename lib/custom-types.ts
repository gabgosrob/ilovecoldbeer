import { Beer, User } from '@prisma/client'

export type BeerProps = {
  beer: Beer
}

export type UserProps = {
  user: User
}

export type IndexProps = {
  beers: Beer[]
}
