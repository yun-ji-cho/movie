import { ChangeEvent, FormEvent, useEffect, useRef, useState } from 'react'
import styles from './Favorite.module.scss'
import SearchBar from 'components/SearchBar'
import { cx } from 'styles'
// import { getmoviesAPi } from 'services/moviesApi'
// import store from 'storejs'
// import { useRecoilState, useRecoilValue } from 'recoil'
// import { bookmarkToggle, searchmoviesList } from 'recoils/atom'
// import { useInView } from 'react-intersection-observer'
import { useMount, useUnmount } from 'react-use'
// import BookmarkModal from 'components/BookmarkModal'
import { SearchIcon } from 'assets/svgs'

const Favorite = () => {
  return (
    <div className={styles.favorite}>
      <h2>내 즐겨찾기</h2>
      <SearchBar />
      <ul className={styles.favoriteList}>
        <li>아이템</li>
      </ul>
    </div>
  )
}

export default Favorite