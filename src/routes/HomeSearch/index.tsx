import { Suspense, ChangeEvent, FormEvent, Fragment, useEffect, useRef, useState } from 'react'
import styles from './HomeSearch.module.scss'
import SearchBar from 'components/SearchBar'
import { IMoviesAPIRes } from 'types/movies.d'
import MovieItem from '../_shared/MovieItem'
import { useRecoil } from 'hooks/state'
import { RecoilRoot, useRecoilValue } from 'recoil'
import { movieListState } from 'states/movies'
import { getMoviesApi } from 'services/movies'

const MovieList = () => {
  const list = useRecoilValue(getMoviesApi)
  return (
    <div className={styles.scrollView}>
      <ul className={styles.searchList}>
        {list.map((item) => (
          <MovieItem key={item.imdbID} item={item} />
        ))}
      </ul>
    </div>
  )
}

const HomeSearch = () => {
  const [movieList] = useRecoil(movieListState)

  return (
    <div className={styles.homeSearch}>
      <h2>좋아하는 영화를 검색해보세요!</h2>
      <p>검색 결과가 없습니다.</p>
      <RecoilRoot>
        <SearchBar />
        <Suspense fallback={<div>Loading...</div>}>
          <MovieList />
        </Suspense>
      </RecoilRoot>
    </div>
  )
}

export default HomeSearch
