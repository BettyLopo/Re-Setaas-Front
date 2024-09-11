import React, { useEffect, useState } from 'react'
import EditIcon from '../components/buttons/icons/EditIcon'
import DeleteIcon from '../components/buttons/icons/DeleteIcon'
import StarIcon from '../components/buttons/icons/StarIcon'
import InfoContainer from '../components/recipeCard/InfoContainer'
import HeartIcon from '../components/buttons/icons/HeartIcon'
import { useLocation, useNavigate } from 'react-router-dom'

const Detail = () => {
  const location = useLocation();
  const id = location.state.data;
  const token = localStorage.getItem("authToken");
  const actualUser = parseInt(localStorage.getItem("user"));

  const navigate = useNavigate();
  const [recipeData, setRecipeData] = useState(null)

  useEffect(() => {
    const fetchRecipe = async () => {
      try {
          const response = await fetch(`http://localhost:3001/recipes/${id}`,{
            headers: {
              'Authorization': 'Bearer ' + token
            }
        });

        const data = await response.json();
        if(response.ok) {
          setRecipeData(data);
        } else {
          setRecipeData(null);
        }
      } catch (error) {
        console.error(error)
      }
    };

    fetchRecipe();
  }, [id])
  





  return (
    <div className="bg-gr-white-blue w-screen h-full items-center">
      <div className="flex flex-col justify-center pt-4 pb-[8rem]">
            <div className={`flex flex-row justify-between py-5 px-8 items-stretch ${recipeData.id_user == actualUser ? "block" : "hidden"}`}>
              <DeleteIcon id={id} />
              <EditIcon id={id} name={recipeData.name}/>
            </div>
            <p className={`font-raleway text-regu text-darklila font-medium px-8 text-left ${isAuth ? "hidden" : "block"}`}>Autor</p>
            <div className='flex flex-col items-center'>
              <img src="/img/Img_tryout.jpeg" alt="" className="shadow-bigs border-brown border-[0.16rem] rounded-big aspect-[3/2] object-cover w-[21.5rem] "/>
            </div>
            <div className="flex flex-row justify-between py-5 px-8 font-raleway text-darklila">
                <p className='text-tiny'>#categoría</p>
                <p className='text-regu'>1 h 31 min</p>
            </div>
            <div className="px-9 flex flex-row gap-3 items-center py-2">
              <h1 className="font-ultra text-darklila text-ptitle leading-[2.2rem]">Espárragos al horno</h1>
              <StarIcon className={`justify-self-end ${!isAuth ? "hidden" : "block"}`}/>
              <HeartIcon className={`${isAuth ? "hidden" : "block"}`}/>
            </div>
            <div className="flex flex-col justify-center items-center pt-8 gap-9">
              <InfoContainer 
              className="bg-brokenwhite  text-darklila " 
              icon="/img/Ingredients.svg"
              title="Ingredientes"
              content="3 patatas, 4 zanahorias, 1 cebolla, 1 manojo de esparragos"/>
              <InfoContainer 
              className="bg-lightlila text-brokenwhite" 
              icon="/img/Spoon.svg"
              title="Herramientas"
              content="Airfryer, Sartén, Horno"/>
              <InfoContainer 
              className="bg-brokenwhite  text-darklila" 
              icon="/img/Steps.svg"
              title="Pasos"
              content="Primero precalentamos el horno y pelamos las cebollas. Posteriormente ponemos la sartén al fuego y cortamos todas las verduras en trozos pequeños."/>
            </div>
        </div>
    </div>
  )
}

export default Detail
