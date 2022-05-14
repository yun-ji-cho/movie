import { atom, selector } from 'hooks/state'

const API_KEY = process.env.REACT_APP_API_KEY

export const keywordState = atom({
  key: 'keywordState',
  default: '',
})
export const pageState = atom({
  key: 'pageState',
  default: 1,
})
export const modalState = atom({
  key: 'modalState',
  default: false,
})

export const movieList = selector({
  key: 'movieList',
  get: async ({ get }) => {
    const keyword = get(keywordState)
    const page = get(pageState)
    if (!keyword) {
      return []
    }

    const response = await fetch(`https://www.omdbapi.com/?apikey=${API_KEY}&s=${keyword}&page=${page}`)
    const data = await response.json()

    return data
  },
})
