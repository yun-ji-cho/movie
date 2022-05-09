import styles from './Routes.module.scss'
// import TodoList from './TodoList'
// import Weather from './Weathers'
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
    // <div className={styles.app}>
    //   {/* <TodoList /> */}
    //   {/* <Weather /> */}
    //   <Movie />
    // </div>
    <RecoilRoot>
      <Movie />
    </RecoilRoot>
  )
}

export default App
