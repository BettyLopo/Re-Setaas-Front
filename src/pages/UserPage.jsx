import UserRecipes from '@/components/recipeCard/UserRecipes'
import React, { useEffect, useState } from 'react'
import recipesData from '@/utils/recipesData'
import UserControl from '@/components/buttons/user/UserControl'

const UserPage = () => {
  // const [recipes, setRecipes] = useState([])

  // useEffect(() => {
  //   getData()
  // }, []);

  // const getData = async () => {
  //   try {
  //     const response = await fetch(`http://localhost:3001/recipes/user/${userId}`);

  //     if(response.ok){
  //       const data = await response.json();
  //       setRecipes(data);
  //       console.log(data)
  //     } throw new Error('Error fetching recipes')

  //   } catch (error) {
  //     console.error("Error fetching recipes")
  //   }
  // }



  return (
    <div className="w-screen h-full bg-gr-lila-pink pb-[7rem] relative">
      <div className="fixed -z-9 inset-0">
          <img src="/public/img/seta_2.svg" alt="Seta decorativa" className="fixed -bottom-12 w-[80%] -right-4 -z-9 opacity-25"/>
          <img src="/public/img/seta_1.svg" alt="Seta decorativa" className="fixed -top-5 w-[30%] -left-5 -z-9 opacity-90 rotate-[145deg]"/>
        </div>
      <section className="px-7 py-9 relative">
        <h1 className="py-5 font-ultra text-brokenwhite
        text-ptitle leading-7">Nombre usuario</h1>
        <p className="text-regu font-raleway text-darklila">XX recetas</p>
      </section>
      <section className="flex flex-col gap-4 relative">
        <UserControl />
        <div>
          <h2 className="font-ultra text-stitle ml-7 text-darklila">Mis recetas</h2>
          <hr className="border-[0.13rem] border-darklila mx-6 mb-3"/>
        </div>
        
        <UserRecipes
          recipes={recipesData}/>
      </section>
    </div>
  )
}

export default UserPage
