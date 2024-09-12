import React from 'react'
import HeartIcon from '../buttons/icons/HeartIcon'
import { useNavigate } from 'react-router-dom'

const RecipeCard = ({recipe, time, user, image, category, id, isLoggedIn}) => {
    const navigate = useNavigate();

    const handleRedirect = () => {
        navigate(`/detail/${recipe}`, { state: { data: id}})
    }


  return (
    <div className="w-[21.25rem] h-[24rem] rounded-cont bg-softblue border-brown border-[0.18rem] shadow-bigs flex flex-col ">
        <section className="m-4 w-[18.75rem] h-[16.6rem] rounded-inp bg-brokenwhite border-[0.15rem] border-brown overflow-hidden">
                <div className="flex flex-row justify-between py-5 px-5 absolute top-6 left-6 w-[85%] z-40">
                    <HeartIcon />
                    <button id={id} name={recipe} onClick={handleRedirect} className={!isLoggedIn ? "hidden" : "block"}>
                        <img src="img/Detail.svg" alt="detalle de la receta" />
                    </button>
                    
                </div>
                <img 
                    src={image} 
                    alt={`imagen de ${recipe}`}
                    className="aspect-square object-cover h-full w-full"
                />
        </section>
        <section className="flex flex-col">
            <div className="flex flex-row justify-between">
                <p className="font-ultra text-ctitle text-darklila pl-4 line-clamp-2 leading-5 w-[65%]">{recipe}</p>
                <p className="font-raleway text-tiny text-darklila pr-4 ">{time}</p>
            </div>
            <div className="flex flex-row justify-between pt-[0.2rem]">
                <p className="font-raleway text-tint text-darklila pl-4">{user}</p>
                <p className="font-raleway text-tiny text-darklila pr-4">#{category}</p>
            </div>
        </section>
       

    </div>
  )
}

export default RecipeCard
