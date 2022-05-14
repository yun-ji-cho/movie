import { useCallback, useEffect, useRef, useState } from 'react'
import styles from './ItemList.module.scss'
import { useRecoilValue, useRecoilState } from 'recoil'
import { useInView } from 'react-intersection-observer'
import MovieItem from './MovieItem'
import { pageState, movieList } from 'states/movies'
import { ISearch } from 'types/movies.d'
// import React from 'react'

const ItemList = () => {
  console.log(useRecoilValue(movieList))
  const [ref, inView] = useInView()
  const [, setPage] = useRecoilState(pageState)
  const getData = useRecoilValue(movieList).Search
  useEffect(() => {
    if (inView) {
      setPage((prev) => prev + 1)
    }
  }, [inView, setPage])

  return (
    <div className={styles.scrollView}>
      {getData ? (
        <ul className={styles.searchList}>
          {getData.map((item: ISearch) => (
            <MovieItem key={item.imdbID} item={item} />
          ))}
          <li className={styles.scrollLoading} ref={ref}>
            Loading...
          </li>
        </ul>
      ) : (
        <p>검색 결과가 없습니다.</p>
      )}
    </div>
  )
}

export default ItemList
