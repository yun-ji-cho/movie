import styles from './ItemList.module.scss'
import { useRecoilValue } from 'recoil'
import MovieItem from './MovieItem'

import { movieList } from 'states/movies'
import { ISearch } from 'types/movies.d'

const ItemList = () => {
  console.log(useRecoilValue(movieList))
  const list = useRecoilValue(movieList).Search
  return (
    <div className={styles.scrollView}>
      {!list && <p>검색 결과가 없습니다.</p>}
      <ul className={styles.searchList}>
        {list && list.map((item: ISearch) => <MovieItem key={item.imdbID} item={item} />)}
      </ul>
    </div>
  )
}

export default ItemList
