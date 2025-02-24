import Layout from 'components/Layout'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './HomeSearch'
import Favorit from './Favorite'
import { RecoilRoot } from 'recoil'

const App = () => {
  return (
    <RecoilRoot>
      <BrowserRouter>
        <Routes>
          <Route element={<Layout />}>
            <Route path='/' element={<Home />} />
            <Route path='favorit' element={<Favorit />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </RecoilRoot>
  )
}

export default App
