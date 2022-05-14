import { Outlet } from 'react-router-dom'
import styles from './Layout.module.scss'
import Header from './Header'
import NavBottom from './Footer'
import { useRecoilState } from 'recoil'
import { modalState } from 'states/movies'

const Layout = () => {
  const [modal, setModal] = useRecoilState(modalState)
  const handleModalClose = () => {
    setModal(false)
  }
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
        {modal && (
          <div className={styles.layer}>
            <div className={styles.layerInner}>
              <p>즐겨찾기에 추가하시겠습니까?</p>
              <div className={styles.buttonWrap}>
                <button type='button'>추가</button>
                <button type='button' onClick={handleModalClose}>
                  취소
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}

export default Layout
