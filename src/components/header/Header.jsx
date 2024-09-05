import React from 'react'
import Navbar from '/src/components/header/navbar/Navbar';

const Header = () => {

  return (
    <div className="w-full flex flex-row justify-center fixed bottom-4 z-10">
      <Navbar className="" />
    </div>
  )
}

export default Header
