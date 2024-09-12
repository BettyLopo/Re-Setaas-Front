import React from 'react'

const UnitRecipeUser = ({image, time, recipe}) => {

  return (
    <div className="w-[9.85rem] h-[11.25rem] rounded-inp bg-softblue border-brown border-[0.18rem] shadow-bigs flex flex-col items-center ">
        <section className="m-3 w-[8.4rem] h-[7.6rem] rounded-inp bg-brokenwhite border-[0.15rem] border-brown overflow-hidden">
            <img 
                src={image} 
                alt={`imagen de ${recipe}`}
                className="aspect-square object-cover h-full w-full"
            />
        </section>
        <section className="flex flex-col">
            <div className="flex flex-row justify-between">
                <p className="font-ultra text-tiny text-darklila pl-4 line-clamp-2 leading-5 w-[95%]">{recipe}</p>
                <p className="font-raleway text-tiny text-darklila pr-4 ">{time}</p>
            </div>
        </section>
    </div>
  )
}

export default UnitRecipeUser
