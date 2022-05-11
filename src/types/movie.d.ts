interface Imovies {
  Search: Search[];
  totalResults: string;
  Response: string;
}

export interface ImoviesItem {
  Title: string;
  Year: string;
  imdbID: string;
  Type: string;
  Poster: string;
}