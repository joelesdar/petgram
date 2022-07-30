/* eslint-disable react/jsx-closing-tag-location */
import React, { useContext, Suspense } from 'react'
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import { GlobalStyle } from './styles/GlobalStyles'
import { Home } from './pages/Home'
import { Detail } from './pages/Detail'
// import { Favs } from './pages/Favs'
import { User } from './pages/User'
import { NotRegisteredUser } from './pages/NotRegisteredUser'
import { Logo } from './components/Logo'
import { NavBar } from './components/NavBar'
import { AppContext } from './Context/AppContext'
import { NotFound } from './pages/NotFound'

const Favs = React.lazy(() => import('./pages/Favs').then(module => ({ default: module.Favs })))

export const App = () => {
  const { isLogged } = useContext(AppContext)

  return (
    <Suspense fallback={<div />}>
      <BrowserRouter>
        <GlobalStyle />
        <Logo />
        <Routes>
          <Route exact path='/' element={<Home />} />
          <Route exact path='/pet/:categoryId' element={<Home />} />
          <Route exact path='/detail/:detailId' element={<Detail />} />
          <Route exact path='/favs' element={isLogged ? <Favs /> : <Navigate replace to='/login' />} />
          <Route path='/user' element={isLogged ? <User /> : <Navigate replace to='/login' />} />
          <Route exact path='/login' element={!isLogged ? <NotRegisteredUser /> : <Navigate replace to='/' />} />
          <Route path='*' element={<NotFound />} />
        </Routes>
        <NavBar />
      </BrowserRouter>
    </Suspense>
  )
}
