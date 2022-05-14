import { ChangeEvent, FormEvent } from 'react'
import { useSearchParams } from 'react-router-dom'
import styles from './SearchBar.module.scss'
import { useRecoilState } from 'recoil'
import { useState } from 'hooks'
import { SearchIcon, SearchReset } from 'assets/svgs'
import { cx } from 'styles'
import { keywordState } from 'states/movies'

const SearchBar = () => {
  const [searchParams] = useSearchParams()
  const [value, setvalue] = useState(searchParams.get('title') ?? '')
  const [, setKeyword] = useRecoilState(keywordState)

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    setvalue(e.target.value)
  }
  const handleInputRemove = () => {
    setvalue('')
  }

  const handleSubmit = (e?: FormEvent<HTMLFormElement>) => {
    e?.preventDefault()

    if (!value) return
    setKeyword(value)
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
          value={value}
          placeholder='Search...'
          autoComplete='nope'
        />
        {value === '' ? null : (
          <button type='button' className={cx(styles.searchBtn, styles.reset)} onClick={handleInputRemove}>
            <SearchReset className={styles.icon}>Search Reset</SearchReset>
          </button>
        )}
      </form>
    </div>
  )
}

export default SearchBar
