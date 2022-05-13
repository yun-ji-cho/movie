import styles from './MovieItem.module.scss'
import { cx } from 'styles'

// import { IMoviesAPIRes } from 'types/movies.d'

import { useRecoil } from 'hooks/state'
import { movieListState } from 'states/movies'
import { ISearch } from 'types/movies.d'

// import { SearchIcon } from 'assets/svgs'

interface Props {
  item: ISearch
}

const MovieItem = ({ item }: Props) => {
  const { title, year, type, poster } = item

  return (
    <li className={styles.item}>
      <div className={styles.image}>
        <img src={poster} alt={title} />
      </div>
      <div className={styles.info}>
        <p className={styles.title}>{title}</p>
        <p className={styles.year}>{year}</p>
        <p className={styles.type}>{type}</p>
      </div>
    </li>
  )
}

export default MovieItem
