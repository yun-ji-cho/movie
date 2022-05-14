import styles from './ItemList.module.scss'
import { ISearch } from 'types/movies.d'
import { useRecoilState } from 'recoil'
import { modalState } from 'states/movies'

interface Props {
  item: ISearch
}

const MovieItem = ({ item }: Props) => {
  const { Title, Year, Type, Poster } = item
  const [, setModal] = useRecoilState(modalState)
  const handleModal = () => {
    setModal(true)
  }

  return (
    <li key={item.imdbID} className={styles.item}>
      <button type='button' onClick={handleModal}>
        <div className={styles.image}>
          <img src={Poster} alt={Title} />
        </div>
        <div className={styles.info}>
          <p className={styles.title}>{Title}</p>
          <p className={styles.year}>{Year}</p>
          <p className={styles.type}>{Type}</p>
        </div>
      </button>
    </li>
  )
}

export default MovieItem
