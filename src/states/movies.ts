import { atom } from 'hooks/state'
import { ISearch } from 'types/movies.d'

export const movieListState = atom<ISearch[]>({
  key: '#moviesListState',
  default: [],
})
