import React from 'react'

const Button = ({className, text, type, onClick}) => {
  return (
    <button 
    className={`cursor-pointer rounded-big w-[8.125rem] h-[2.5rem] shadow-bigs border-[0.15rem] border-brown font-raleway text-ctitle ${className}`} 
    type={type} 
    onClick={onClick} > {text} </button>
  )
}

export default Button
