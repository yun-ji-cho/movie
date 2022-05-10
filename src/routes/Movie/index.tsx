// import dayjs from 'dayjs'
import { useMount, useState } from 'hooks'
import styles from './Movie.module.scss'
import MovieHeader from './MovieHeader'
import MovieBottomTab from './MovieBottomTab'
// import { LikeIcon, SearchIcon } from '../../assets/svgs'


const Movie = () => {
  return (
    <section className={styles.movie}>
      <div className={styles.movieInner}>
        <MovieHeader/>
        <MovieBottomTab/>
      </div>
    </section>
  )
}

export default Movie
