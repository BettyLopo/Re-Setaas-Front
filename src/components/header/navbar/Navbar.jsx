import React from 'react'
import HomeIcon from '../../buttons/icons/HomeIcon'
import SearchIcon from '../../buttons/icons/SearchIcon'
import CreateIcon from '../../buttons/icons/CreateIcon'
import FavIcon from '../../buttons/icons/FavIcon'
import UserIcon from '../../buttons/icons/UserIcon'
import { NavLink, useLocation, useNavigate } from 'react-router-dom'
import { useAuth } from '@/hooks/useAuth'
import LoggedIcon from '@/components/buttons/icons/LoggedIcon'

const Navbar = () => {
    const { isAuthenticated } = useAuth();
    const navigate = useNavigate();

    const handleLogout = () => {
        localStorage.removeItem("authToken");
        localStorage.removeItem("user");
        navigate("/")
        window.location.reload();
    }

    const handleUserPage = () => {
		navigate(`/user/${name}`, { state: { data: id} })

	}

    const location = useLocation();

  return ( 
    <div className="flex flex-row justify-around px-3 gap-[1.5rem] items-center rounded-big w-[23rem] bg-softblue border-brown border-[0.25rem] h-[4.65rem]">
        <NavLink 
        to="/">
            <HomeIcon isActive={location.pathname === '/'}/>
        </NavLink>

        <NavLink 
        to="/search">
            <SearchIcon isActive={location.pathname === '/search'}/>
        </NavLink>
        {isAuthenticated && (
            <NavLink 
        to="/create">
            <CreateIcon isActive={location.pathname === '/create'}/>
        </NavLink>
        )}
        
        <NavLink 
        onClick={handleLogout}
        className={isAuthenticated ? "block" : "hidden"}>
            <UserIcon 
            // isActive={location.pathname === '/favs/:name?'}
            />
        </NavLink>
        
         {isAuthenticated ? (
            <NavLink
                to="/userpage">
                <LoggedIcon 
                onClick={handleUserPage} 
                isActive={location.pathname === '/userpage'}/>
            </NavLink>
         ) : (
            <NavLink 
            to="/login">
            <UserIcon isActive={location.pathname === '/login'}/>
         </NavLink>
         )}
    </div>
  )
}

export default Navbar
