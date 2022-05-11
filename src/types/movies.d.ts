interface ISearch {
  Title: string;
  Year: string;
  imdbID: string;
  Type: string;
  Poster: string;
}

export interface IMoviesAPIRes {
  Search: ISearch[];
  totalResults: string;
  Response: string;
}