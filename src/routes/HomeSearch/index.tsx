import { Suspense } from 'react'
import styles from './HomeSearch.module.scss'
import SearchBar from 'components/SearchBar'
import ItemList from 'components/ItemList'
import { RecoilRoot } from 'recoil'

const HomeSearch = () => {
  return (
    <div className={styles.homeSearch}>
      <h2>좋아하는 영화를 검색해보세요!</h2>
      <RecoilRoot>
        <SearchBar />
        <Suspense fallback={<div>Loading...</div>}>
          <ItemList />
        </Suspense>
      </RecoilRoot>
    </div>
  )
}

export default HomeSearch
