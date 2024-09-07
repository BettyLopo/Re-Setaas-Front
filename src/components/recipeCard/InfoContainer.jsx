import React from 'react'

const InfoContainer = ({content, className, icon, title}) => {
  return (
    <section className={`rounded-cont border-[0.2rem] text-darklila border-brown shadow-bigs w-[21rem] h-auto ${className}`}>
        <div className="flex flex-row justify-between items-start gap-5 pt-5 px-7 pb-1">
            <p className="font-raleway font-semibold text-regu">{title}</p>
            <img src={icon} alt="" className="" />
        </div>
        <hr className="border-[0.1rem] mx-6 mb-5"/>
        <ul className="px-5 pb-7">{content}
            <li></li>
        </ul>
    </section>
  )
}

export default InfoContainer
