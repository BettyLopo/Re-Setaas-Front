import React from 'react'

const InfoContainer = ({content, className, icon, title}) => {

    const items = typeof content === 'string' ? content.split(',').map(item => item.trim()) : content;

  return (
    <section className={`rounded-cont border-[0.2rem] border-brown shadow-bigs w-[21rem] h-auto ${className}`}>
        <div className="flex flex-row justify-between items-start gap-5 pt-5 px-7 pb-1">
            <p className="font-raleway font-semibold text-regu">{title}</p>
            <img src={icon} alt="" className="" />
        </div>
        <hr className="border-[0.1rem] mx-6 mb-5"/>
        <ul className="px-10 pb-7 font-normal">
            {Array.isArray(items) ? (
                items.map((item, index) => (
                    <li keiy={index} className="px-1 list-disc">{item}</li>
                ))
            ) : (
                <li className="">{items}</li>
            )}
            
        </ul>
    </section>
  )
}

export default InfoContainer
