/* eslint-disable react/jsx-closing-tag-location */
import React, { useContext } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { GlobalStyle } from './styles/GlobalStyles'
import { Home } from './pages/Home'
import { Detail } from './pages/Detail'
import { Favs } from './pages/Favs'
import { User } from './pages/User'
import { NotRegisteredUser } from './pages/NotRegisteredUser'
import { Logo } from './components/Logo'
import { NavBar } from './components/NavBar'
import { AppContext } from './Context/AppContext'

export const App = () => {
  const { isLogged } = useContext(AppContext)

  return (
    <div>
      <BrowserRouter>
        <GlobalStyle />
        <Logo />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/pet/:categoryId' element={<Home />} />
          <Route path='/detail/:detailId' element={<Detail />} />
          <Route path='/favs' element={isLogged ? <Favs /> : <NotRegisteredUser />} />
          <Route path='/user' element={isLogged ? <User /> : <NotRegisteredUser />} />
        </Routes>
        <NavBar />
      </BrowserRouter>
    </div>
  )
}
