export type GameDataResponse = {
  count: number
  next?: string
  previous?: string
  results: GameDataResult[]
}

export type GameDataResult = {
  id: number
  slug: string
  name: string
  released: string
  tba: boolean
  background_image: string
  rating: number
  rating_top: number
  ratings?: {}
  ratings_count: number
  reviews_text_count: string
  added: number
  added_by_status?: {}
  metacritic: number
  playtime: number
  suggestions_count: number
  updated: string
  esrb_rating?: EsrbRating
  platforms: Platform[]
}

export type EsrbRating = {
  id: number
  slug: string
  name: string
}

export type Platform = {
  platform: EsrbRating
  released_at?: string
  requirements?: Requirements
}

export type Requirements = {
  minimum: string
  recommended: string
}
