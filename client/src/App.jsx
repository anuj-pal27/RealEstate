import React from 'react'
import { BrowserRouter,Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import About from './pages/About'
import Profile from './pages/Profile'
import Signin from './pages/SignIn'
import Signup from './pages/SignUp'
import Header from './components/Header'
import PrivateRoute from './components/PrivateRoute'

export default function App(){
  return (<BrowserRouter>
  <Header/>
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/signin' element={<Signin/>} />
        <Route path='/signup' element={<Signup/>} />
        <Route path='/about' element={<About/>} />
          <Route element={<PrivateRoute/>} >
        <Route path='/profile' element={<Profile/>} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}
