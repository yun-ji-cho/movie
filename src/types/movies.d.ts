export interface ISearch {
  title: string;
  year: string;
  imdbID: string;
  type: string;
  poster: string;
}

export interface IMoviesAPIRes {
  error?: string;
  search: ISearch[];
  totalResults: number;
  response: Boolean;
}