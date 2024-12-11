import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import AppLayout from './layouts/AppLayout'
import HomePage from './pages/HomePage'
import SingleMovie from './pages/SingleMovie'

function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>

          <Route element={<AppLayout />}>
            <Route index element={<HomePage />}></Route>
            <Route path='/movie/:id' element={<SingleMovie />}></Route>
          </Route>

        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
