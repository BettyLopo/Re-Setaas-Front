import React from 'react'
import { useState, useEffect } from "react";
import RecipeCard from '../components/recipeCard/RecipeCard'
import Filter from '../components/filter/Filter'
import Carousel from '../components/recipeCard/CarouselRecipes';
import { useAuth } from '@/hooks/useAuth';

const Home = () => {
  const userAuth = useAuth().isAuthenticated;
  const [recipes, setRecipes] = useState([]);

  useEffect(() => {
    getData();
  }, []);

  const getData = async () => {
    try {
      const response = await fetch('http://localhost:3001/recipes');
      if(!response.ok) {
        throw new Error('Se ha fallado recogiendo las recetas');
      }
      const data = await response.json();
      setRecipes(data);
      console.log(data);
    } catch (error) {
      console.error("Error fetching recipes");
    }
    
  }


  return (
    <div className="bg-gr-pink-pink w-screen h-screen relative">
      <div className="fixed -z-9 inset-0">
          <img src="/public/img/seta_1.svg" alt="Seta decorativa" className="fixed -bottom-12 w-[80%] right-6 -z-9 opacity-40"/>
          <img src="/public/img/seta_2.svg" alt="Seta decorativa" className="fixed -top-5 w-[30%] -right-5 -z-9 opacity-90 rotate-[225deg]"/>
      </div>
      <div className="flex flex-col justify-center relative">
        <div className="flex flex-col ml-7 mb-8">
          <h1 className="font-ultra text-darklila text-ptitle leading-9 pt-[5rem] pb-[1.5rem] ">Hora de comeeeer</h1>
          <div className="flex justify-end mr-7">
            <Filter />
          </div>
        </div>
        <section className="flex flex-col justify-center items-center">
            <Carousel 
            recipes={recipes}
            isLoggedIn={userAuth}
            />
          
        </section>
      </div>
     
      
    </div>
  )
}

export default Home
