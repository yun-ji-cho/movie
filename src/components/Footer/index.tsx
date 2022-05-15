import styles from './Footer.module.scss'
import { NavLink, useParams } from 'react-router-dom'
import Favorite from 'routes/Favorite'
import { cx } from 'styles'

const Footer = () => {
  const { menu } = useParams<{ menu: string }>()
  return (
    <nav>
      <ul className={styles.bottomTabBar}>
        <li>
          <NavLink to='' className={({ isActive }) => cx(styles.search, { [styles.isActive]: isActive })}>
            Search
          </NavLink>
        </li>
        <li>
          <NavLink to='favorit' className={({ isActive }) => cx(styles.favorit, { [styles.isActive]: isActive })}>
            즐겨찾기
          </NavLink>
        </li>
      </ul>
      {menu === 'favorit' && <Favorite />}
    </nav>
  )
}

export default Footer
