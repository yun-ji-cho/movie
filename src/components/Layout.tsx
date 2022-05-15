import { Outlet } from 'react-router-dom'
import styles from './Layout.module.scss'
import Header from './Header'
import NavBottom from './Footer'
import Modal from './Modal'
import { useRecoilState } from 'recoil'
import { modalState } from 'states/movies'

const Layout = () => {
  const [modal] = useRecoilState(modalState)
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
        {modal && <Modal />}
      </div>
    </div>
  )
}

export default Layout
