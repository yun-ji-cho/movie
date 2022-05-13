import { ChangeEvent, FormEvent } from 'react'
import { useSearchParams } from 'react-router-dom'
import styles from './SearchBar.module.scss'

import { useMount, useState } from 'hooks'
import { getMoviesApi } from 'services/movies'
import { IMoviesAPIRes } from 'types/movies.d'
import { SearchIcon, SearchReset } from 'assets/svgs'
import { cx } from 'styles'

const SearchBar = () => {
  const [searchParams] = useSearchParams()
  const [data, setData] = useState<IMoviesAPIRes>()
  const [searchInput, setSearchInput] = useState(searchParams.get('title') ?? '')
  const [pageNum, setPageNum] = useState(1)

  useMount(() => {
    if (!searchInput) return
    handleSubmit()
  })

  const handleSubmit = (e?: FormEvent<HTMLFormElement>) => {
    e?.preventDefault()

    if (!searchInput) return
    getMoviesApi({
      text: searchInput,
      page: pageNum,
    }).then((res) => {
      setData(res)
    })
  }

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    setSearchInput(e.target.value)
  }
  const handleInputRemove = () => {
    setSearchInput('')
  }

  return (
    <div className={styles.searchWrap}>
      <form id='searchFrm' name='searchFrm' onSubmit={handleSubmit}>
        <button type='submit' className={cx(styles.searchBtn, styles.search)}>
          <SearchIcon className={styles.icon}>Search </SearchIcon>
        </button>
        <label htmlFor='keyword' className={styles.hidden}>
          Enter a Search movies
        </label>
        <input
          type='text'
          id='keyword'
          onChange={handleInputChange}
          value={searchInput}
          placeholder='Search...'
          autoComplete='nope'
        />
        {searchInput === '' ? null : (
          <button type='button' className={cx(styles.searchBtn, styles.reset)} onClick={handleInputRemove}>
            <SearchReset className={styles.icon}>Search Reset</SearchReset>
          </button>
        )}
      </form>
    </div>
  )
}

export default SearchBar
