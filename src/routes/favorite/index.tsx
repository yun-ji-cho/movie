import styles from './Favorite.module.scss'
import ItemList from 'components/ItemList'

const Favorite = () => {
  return (
    <div className={styles.favorite}>
      <h2>내 즐겨찾기</h2>
      <ItemList />
    </div>
  )
}

export default Favorite
