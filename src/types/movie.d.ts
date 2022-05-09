interface IMovie {
  Search: Search[];
  totalResults: string;
  Response: string;
}

interface ISearch {
  Title: string;
  Year: string;
  imdbID: string;
  Type: string;
  Poster: string;
}