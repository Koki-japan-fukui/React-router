import React from 'react'
import { BrowserRouter, Link, Route, Router, Routes } from 'react-router-dom'
import { About } from './About'
import { AboutDetail } from './AboutDetail'
import { Home } from './Home'
import { Login } from './Login'


export const Header = () => {
  return (
    <BrowserRouter>
      <>
        <Link to="/"><p>home</p></Link>
        <Link to="/login"><p>login</p></Link>
        <Link to="/about"><p>about</p></Link>
      </>
      <Routes>
        <Route path="login" element={<Login />}> </Route>
        <Route path="about" element={<About />}>
          <Route path="/about/detail" element={<AboutDetail/>}/>
        </Route>
      </Routes>
    </BrowserRouter>
  )
}
