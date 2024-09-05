import React from 'react'

const UserIcon = ({isActive}) => {
  return (
    <button className={`cursor-pointer rounded-[7rem] w-[2.5rem] h-[2.5rem] flex flex-row justify-center items-center 
        ${isActive ? 'bg-pink shadow-smalls' : 'bg-brokenwhite'} border-brown border-[0.15rem]`}>
        <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M15.275 5.625C15.275 8.53717 12.9122 10.9 10 10.9C7.08783 10.9 4.725 8.53717 4.725 5.625C4.725 2.71283 7.08783 0.35 10 0.35C12.9122 0.35 15.275 2.71283 15.275 5.625ZM10 13.475C11.0407 13.475 12.0304 13.2488 12.9232 12.85H15C17.5684 12.85 19.65 14.9316 19.65 17.5V18.125C19.65 18.9669 18.9669 19.65 18.125 19.65H1.875C1.03314 19.65 0.35 18.9669 0.35 18.125V17.5C0.35 14.9316 2.43158 12.85 5 12.85H7.07706C7.97282 13.2486 8.95886 13.475 10 13.475Z" fill={isActive ? '#F0E6EF' : '#F0A6CA'} stroke="#554348" stroke-width="0.7"/>
        </svg>
    </button>
  )
}

export default UserIcon
