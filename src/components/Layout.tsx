import { Outlet } from 'react-router-dom'
import styles from './Layout.module.scss'
import Header from './Header'
import NavBottom from './Footer'

const Layout = () => {
  return (
    <div className={styles.container}>
      <div className={styles.layout}>
        <Header />

        <main className={styles.main}>
          <Outlet />
        </main>

        <footer>
          <NavBottom />
        </footer>
      </div>
    </div>
  )
}

export default Layout