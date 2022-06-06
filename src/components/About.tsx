import React from 'react'
import { BrowserRouter, Link, Outlet } from 'react-router-dom'

export const About = () => {
  return (
      <>
        <Link to="/about/detail">detail</Link>
        <p>aboutです</p>
      </>
  )
}
