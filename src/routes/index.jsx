import Layout from 'components/Layout'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './HomeSearch'
import Favorit from './Favorite'

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route path='/' element={<Home />} />
          <Route path='favorit' element={<Favorit />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
