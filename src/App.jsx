import React from 'react'
import { BrowserRouter,Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import About from './pages/About'
import Profile from './pages/Profile'
import Signin from './pages/SignIn'
import Signup from './pages/SignUp'

export default function App(){
  return (<BrowserRouter>
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/about' element={<About/>} />
        <Route path='/profile' element={<Profile/>} />
        <Route path='/signup' element={<Signup/>} />
        <Route path='/signin' element={<Signin/>} />
        
      </Routes>
    </BrowserRouter>
  )
}
