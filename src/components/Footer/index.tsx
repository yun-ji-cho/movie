import { useMount, useState } from 'hooks'
import styles from './Footer.module.scss'
import { LikeIcon, SearchIcon } from 'assets/svgs'


const Footer = () => {

  const handleSerch = () => {
    console.log('search')
  }
  const handleFavorites = () => {
    console.log('favorit')
  }
  return (
    <div className={styles.bottomTabBar}>
      <button type="button" onClick={handleSerch}><SearchIcon className={styles.search}>검색</SearchIcon></button>
      <button type="button" onClick={handleFavorites}><LikeIcon className={styles.favorit}>즐겨찾기</LikeIcon></button>
    </div>
  )
}

export default Footer