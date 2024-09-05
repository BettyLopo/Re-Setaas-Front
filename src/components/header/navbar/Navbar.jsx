import React from 'react'
import HomeIcon from '../../buttons/icons/HomeIcon'
import SearchIcon from '../../buttons/icons/SearchIcon'
import CreateIcon from '../../buttons/icons/CreateIcon'
import FavIcon from '../../buttons/icons/FavIcon'
import UserIcon from '../../buttons/icons/UserIcon'
import { NavLink, useLocation } from 'react-router-dom'

const Navbar = () => {
    const location = useLocation();

  return (
    <div className="flex flex-row justify-center gap-[1.5rem] items-center rounded-big w-[23rem] bg-softblue border-brown border-[0.25rem] h-[4.65rem]">
        <NavLink 
        to="/">
            <HomeIcon isActive={location.pathname === '/'}/>
        </NavLink>

        <NavLink 
        to="/search">
            <SearchIcon isActive={location.pathname === '/search'}/>
        </NavLink>
        <NavLink 
        to="/create">
            <CreateIcon isActive={location.pathname === '/create'}/>
        </NavLink>
        <NavLink 
        to="/favs/:name">
            <FavIcon isActive={location.pathname === '/favs/:name?'}/>
        </NavLink>
        <NavLink 
        to="/login">
            <UserIcon isActive={location.pathname === '/login'}/>
         </NavLink>
    </div>
  )
}

export default Navbar
