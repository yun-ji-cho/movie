import styles from './ItemList.module.scss'
import { ISearch } from 'types/movies.d'

interface Props {
  item: ISearch
}

const MovieItem = ({ item }: Props) => {
  const { Title, Year, Type, Poster } = item

  return (
    <li key={item.imdbID} className={styles.item}>
      <div className={styles.image}>
        <img src={Poster} alt={Title} />
      </div>
      <div className={styles.info}>
        <p className={styles.title}>{Title}</p>
        <p className={styles.year}>{Year}</p>
        <p className={styles.type}>{Type}</p>
      </div>
    </li>
  )
}

export default MovieItem
