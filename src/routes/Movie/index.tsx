// import dayjs from 'dayjs'
import { useMount, useState } from 'hooks'
import styles from './Movie.module.scss'
import { LikeIcon, SearchIcon } from '../../assets/svgs'


const Movie = () => {

  const handleSerch = () => {
    console.log('search')
  }
  const handleFavorites = () => {
    console.log('favorit')
  }
  return (
    <section className={styles.movie}>
      <div className={styles.movieInner}>
        <h1>Search your favorit movies!</h1>
        <div className={styles.bottomTabBar}>
          <button type="button" onClick={handleSerch}><SearchIcon className={styles.search}>검색</SearchIcon></button>
          <button type="button" onClick={handleFavorites}><LikeIcon className={styles.favorit}>즐겨찾기</LikeIcon></button>
        </div>
      </div>
    </section>
  )
}

export default Movie
