import React from 'react'

const Input = ({placeholder, className, htmlFor, value, onChange, type, id}) => {
  return (
    <div>
        <label htmlFor={htmlFor}/>
        <input
        id={id} 
        type={type}
        value={value}
        placeholder={placeholder}
        onChange={onChange} 
        className={`border-[0.1rem] border-brown rounded-inp shadow-bigs placeholder:font-raleway placeholder:text-darklila placeholder:text-regu text-left h-[2.5rem] placeholder:font-semibold placeholder:pl-4 ${className}`}/>
    </div>
  )
}

export default Input
