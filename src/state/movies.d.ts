import { atom } from 'hooks/state'
import { ImoviesItem } from 'types/movies.d'


export const todoListState = atom<ImoviesItem[]>({
  key: '#moviesListState',
  default: [],
})
