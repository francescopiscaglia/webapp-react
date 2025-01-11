import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { useState } from 'react'
import './App.css'
import AppLayout from './layouts/AppLayout'
import HomePage from './pages/HomePage'
import SingleMovie from './pages/SingleMovie'
import NotFound from './pages/NotFound'
import GlobalContext from './context/GlobalContext'
import CategoriesPage from './pages/CategoriesPage'
import AboutPage from "./pages/AboutPage"

function App() {

  const [loader, setLoader] = useState(false)

  const api_url = "http://localhost:3009/api/films";

  const thumbnails = {
    "inception": "/inception-l.webp",
    "the godfather": "/the-godfather.avif",
    "titanic": "/titanic.jpg",
    "the matrix": "/the-matrix.webp",
    "interstellar": "/interstellar.jpg"
  };

  const values = {
    loader,
    setLoader,
    api_url,
    thumbnails
  };

  return (
    <>
      <GlobalContext.Provider value={values}>

        <BrowserRouter>
          <Routes>

            <Route element={<AppLayout />}>
              <Route index element={<HomePage />}></Route>
              <Route path='/movie/:id' element={<SingleMovie />}></Route>
              <Route path='/categories' element={<CategoriesPage />}></Route>
              <Route path='/about' element={<AboutPage />}></Route>
              <Route path='*' element={<NotFound />}></Route>
            </Route>

          </Routes>
        </BrowserRouter>
      </GlobalContext.Provider>

    </>
  )
}

export default App
