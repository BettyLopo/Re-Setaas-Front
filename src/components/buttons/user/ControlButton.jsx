import React from 'react'

const ControlButton = ({className, text}) => {
  return (
    <div className={`flex justify-center items-center border-[0.18rem] border-brown shadow-bigs rounded-cont h-[7.875rem] ${className}`}>
      <p className="text-center font-raleway text-regu text-darklila">{text}</p>
    </div>
  )
}

export default ControlButton
