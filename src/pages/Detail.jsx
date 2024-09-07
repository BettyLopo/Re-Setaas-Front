import React from 'react'
import EditIcon from '../components/buttons/icons/EditIcon'
import DeleteIcon from '../components/buttons/icons/DeleteIcon'
import StarIcon from '../components/buttons/icons/StarIcon'
import InfoContainer from '../components/recipeCard/InfoContainer'

const Detail = () => {
  return (
    <div className="bg-gr-white-blue w-screen h-screen items-center">
      <div className="flex flex-col justify-center pt-4">
            <div className='flex flex-row justify-between py-5 px-8 items-stretch'>
              <DeleteIcon />
              <EditIcon />
            </div>
            <div className='flex flex-col items-center'>
              <img src="/img/Img_tryout.jpeg" alt="" className="shadow-bigs border-brown border-[0.16rem] rounded-big aspect-[3/2] object-cover w-[21.5rem] "/>
            </div>
            <div className="flex flex-row justify-between py-5 px-8 font-raleway text-darklila">
                <p className='text-tiny'>#categoría</p>
                <p className='text-regu'>1 h 31 min</p>
            </div>
            <div className="px-9 flex flex-row gap-3 items-center py-2">
              <h1 className="font-ultra text-darklila text-ptitle leading-[2.2rem]">Espárragos al horno</h1>
              <StarIcon className="justify-self-end"/>
            </div>
            <div className="flex flex-col justify-center items-center pt-8">
              <InfoContainer 
              className="bg-brokenwhite" 
              icon="/img/Ingredients.svg"
              title="Ingredientes"
              content="Lorem ipsum lorem ipsum lorem ipsum"/>
            </div>
        </div>
    </div>
  )
}

export default Detail
