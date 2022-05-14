export interface ISearch {
  Title: string
  Year: string
  imdbID: string
  Type: string
  Poster: string
}

export interface IMoviesAPIRes {
  error?: string
  Search: ISearch[]
  totalResults: string
  Response: string
}
