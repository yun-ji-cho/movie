import styles from './MovieItem.module.scss'
import { cx } from 'styles'

import { IMoviesAPIRes } from 'types/movies.d'
// import { SearchIcon } from 'assets/svgs'

interface Props {
  item: IMoviesAPIRes
}

const MovieItem = ({ item }: Props) => {
  console.log(item);
  return (
    <div>
      데이터
    </div>
    // <li key={item.imdbID} className={styles.item}>
    //   <div className={styles.image}>
    //     <img src={item.Poster} alt={item.Title} />
    //   </div>
    //   <div className={styles.info}>
    //     <p className={styles.title}>{item.Title}</p>
    //     <p className={styles.year}>{item.Year}</p>
    //     <p className={styles.type}>{item.Type}</p>
    //   </div>
    // </li>
  )
}

export default MovieItem