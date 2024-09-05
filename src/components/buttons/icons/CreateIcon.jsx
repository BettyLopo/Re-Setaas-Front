import React from 'react'

const CreateIcon = ({isActive}) => {
  return (
    <button className={`cursor-pointer rounded-[7rem] w-[4rem] h-[4rem] flex flex-row justify-center items-center 
      ${isActive ? 'bg-pink shadow-smalls' : 'bg-brokenwhite'} border-brown border-[0.15rem]`}>
        <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg" >
        <path d="M23.7857 15.7143V16.2143H24.2857H37.1429C38.4444 16.2143 39.5 17.2699 39.5 18.5714V21.4286C39.5 22.7301 38.4444 23.7857 37.1429 23.7857H24.2857H23.7857V24.2857V37.1429C23.7857 38.4444 22.7301 39.5 21.4286 39.5H18.5714C17.2699 39.5 16.2143 38.4444 16.2143 37.1429V24.2857V23.7857H15.7143H2.85714C1.55561 23.7857 0.5 22.7301 0.5 21.4286V18.5714C0.5 17.2699 1.55561 16.2143 2.85714 16.2143H15.7143H16.2143V15.7143V2.85714C16.2143 1.55561 17.2699 0.5 18.5714 0.5H21.4286C22.7301 0.5 23.7857 1.55561 23.7857 2.85714V15.7143Z" fill={isActive ? '#F0E6EF' : '#F0A6CA'} stroke="#554348"/>
        </svg>
    </button>
  )
}

export default CreateIcon
