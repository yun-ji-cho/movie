import { ChangeEvent, FormEvent, Fragment, useEffect, useRef, useState } from 'react'
import styles from './Home.module.scss'
import SearchBar from 'components/SearchBar'
// import { getmoviesAPi } from 'services/moviesApi'
// import store from 'storejs'
// import { useRecoilState, useRecoilValue } from 'recoil'
// import { bookmarkToggle, searchmoviesList } from 'recoils/atom'
// import { useInView } from 'react-intersection-observer'
import { useMount, useUnmount } from 'react-use'

const Home = () => {

  return (
    <div className={styles.wrapper}>
      <SearchBar />
    </div>
  )
}

export default Home