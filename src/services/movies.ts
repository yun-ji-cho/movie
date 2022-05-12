
import camelcaseKeys from 'camelcase-keys'
import { axios } from 'hooks/worker'
import { IMoviesAPIRes } from 'types/movies.d'

const API_KEY = process.env.REACT_APP_API_KEY
const MOVIES_BASE_URL = `https://www.omdbapi.com/?apikey=${API_KEY}`


interface Params {
  page?: number
  text: string
}

export const getMoviesApi = ({ page, text }: Params) =>
  axios
  .get<IMoviesAPIRes>(MOVIES_BASE_URL, {
    params: {
      page,
      s: text
    },
  })
  .then((res) => camelcaseKeys(res.data))
  .then((res) => ({
    ...res,
    search: res.search ? camelcaseKeys(res.search) : [],
    response: res.response === 'True',
    totalResults: res.totalResults ? Number(res.totalResults) : 0,
  })
)
