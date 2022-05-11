import { ChangeEvent, FormEvent, useEffect, useRef, useState } from 'react'
import { useSearchParams } from 'react-router-dom'
import styles from './SearchBar.module.scss'
import { SearchIcon, SearchReset } from 'assets/svgs'
import { cx } from 'styles'


const SearchBar = () => {
  const [searchInput, setSearchInput] = useState('')
  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    setSearchInput(e.target.value)
  }
  const handleInputRemove = () => {
    setSearchInput('')
  }
  const handleSubmitForm = (e?: FormEvent<HTMLFormElement>) => {
    e?.preventDefault()
  }
  return (
    <div className={styles.searchWrap}>
      <form id="searchFrm" name="searchFrm" onSubmit={handleSubmitForm}>
        <button type="submit" className={cx(styles.searchBtn, styles.search)}>
          <SearchIcon className={styles.icon}>Search </SearchIcon>
        </button>
        <label 
          htmlFor="keyword" 
          className={styles.hidden}>Enter a Search movies
        </label>
        <input 
          type="text" 
          id="keyword" 
          onChange={handleInputChange} 
          value={searchInput} 
          placeholder="Search..." 
          autoComplete="nope"
        />
        {
          searchInput === '' ? null : <button 
            type="button" 
            className={cx(styles.searchBtn, styles.reset)} 
            onClick={handleInputRemove}
          ><SearchReset className={styles.icon}>Search Reset</SearchReset></button>
        }
      </form>
      <div className={styles.movieList}>
        <p>검색결과<span>11건</span></p>
        <ul>
          <li className={styles.item}>
            <div className={styles.image}>
              <img src="" alt="" />
            </div>
            <div className={styles.info}>
              <p className={styles.title}>나의아저씨</p>
              <p className={styles.year}>2020.02</p>
              <p className={styles.type}>감성적</p>
            </div>
          </li>
        </ul>
      </div>
    </div>
  )
}

export default SearchBar