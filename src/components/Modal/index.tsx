import styles from './Modal.module.scss'
import { useRecoilState } from 'recoil'
import { modalState, itemInfoState } from 'states/movies'

const Modal = () => {
  const [, setModal] = useRecoilState(modalState)
  const [itemInfo] = useRecoilState(itemInfoState)
  const handleModalClose = () => {
    setModal(false)
  }
  const handleFavorit = () => {
    localStorage.setItem('favoritItem', JSON.stringify(itemInfo))
    setModal(false)
  }
  return (
    <div className={styles.modal}>
      <div className={styles.modalInner}>
        <div className={styles.buttonWrap}>
          <button type='button' onClick={handleFavorit}>
            즐겨찾기
          </button>
          <button type='button' onClick={handleModalClose}>
            취소
          </button>
        </div>
      </div>
    </div>
  )
}

export default Modal
