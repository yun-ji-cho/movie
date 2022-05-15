import { Suspense } from 'react'
import styles from './HomeSearch.module.scss'
import SearchBar from 'components/SearchBar'
import ItemList from 'components/ItemList'

const HomeSearch = () => {
  return (
    <div className={styles.homeSearch}>
      <h2>좋아하는 영화를 검색해보세요!</h2>
      <SearchBar />
      <Suspense fallback={<div>Loading...</div>}>
        <ItemList pagename='searchPage' />
      </Suspense>
    </div>
  )
}

export default HomeSearch
