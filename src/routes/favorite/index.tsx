import styles from './Favorite.module.scss'
import { useRecoilState } from 'recoil'
import { itemInfoState } from 'states/movies'
// import MovieItem from './MovieItem'
import ItemList from 'components/ItemList'

const Favorite = () => {
  return (
    <div className={styles.favorite}>
      <h2>내 즐겨찾기</h2>
      <ItemList pagename='favorite' />
    </div>
  )
}

export default Favorite
