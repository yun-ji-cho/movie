// import styles from './Routes.module.scss'
import {
  RecoilRoot,
  atom,
  selector,
  useRecoilState,
  useRecoilValue,
} from 'recoil'
import Movie from './Movie'

const App = () => {
  return (
    <RecoilRoot>
      <Movie/>
    </RecoilRoot>
  )
}

export default App
