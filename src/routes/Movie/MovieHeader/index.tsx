import { useMount, useState } from 'hooks'
import styles from './MovieHeader.module.scss'
import { LikeIcon, SearchIcon } from '../../../assets/svgs'


const MovieHeader = () => {

  return (
    <header>
      <h1>Search your favorit movies!</h1>
      <div className={styles.abc}>나는 헤더입니다</div>
    </header>
  )
}

export default MovieHeader