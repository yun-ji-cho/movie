import { ChangeEvent, FormEvent, Fragment, useEffect, useRef, useState } from 'react'
import styles from './HomeSearch.module.scss'
import SearchBar from 'components/SearchBar'
import { IMoviesAPIRes } from 'types/movies.d'
import MovieItem from '../_shared/MovieItem'
// import { getmoviesAPi } from 'services/moviesApi'
// import store from 'storejs'
// import { useRecoilState, useRecoilValue } from 'recoil'
// import { bookmarkToggle, searchmoviesList } from 'recoils/atom'
// import { useInView } from 'react-intersection-observer'
import { useMount, useUnmount } from 'react-use'

const HomeSearch = () => {
  const [data, setData] = useState<IMoviesAPIRes>()

  return (
    <div className={styles.homeSearch}>
      <h2>좋아하는 영화를 검색해보세요!</h2>
      <SearchBar />
      <p>검색 결과가 없습니다.</p>
      <ul>
        {/* {data.list.map(item) => (
          <MovieItem key={item.imdbID} item={item} />
        )} */}
      </ul>
    </div>
  )
}

export default HomeSearch