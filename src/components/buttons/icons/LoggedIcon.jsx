import React from 'react'

const LoggedIcon = ({isActive, id, username}) => {
    
	const handleRedirect = () => {
		navigate(`/user/${username}`, { state: { data: id} })

	}

  return (
    <button className={`cursor-pointer rounded-[7rem] w-[2.5rem] h-[2.5rem] flex flex-row justify-center items-center 
        ${isActive ? 'bg-pink shadow-smalls' : 'bg-brokenwhite'} border-brown border-[0.15rem]`} onClick={handleRedirect}>
          <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
            <circle cx="20" cy="20" r="14.25" fill={isActive ? '#F0E6EF' : '#F0A6CA'} stroke="#554348" stroke-width="1.5"/>
            </svg>

      </button>
  )
}

export default LoggedIcon
