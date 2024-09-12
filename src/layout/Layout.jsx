import React from 'react'
import { Outlet } from 'react-router-dom'
import Header from '../components/header/Header'

const Layout = () => {
  return (
    <div className="h-full w-auto">
      <Header />
      <main>
      <Outlet />
      </main>
    </div>
  )
}

export default Layout
