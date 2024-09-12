import UserRecipes from '@/components/recipeCard/UserRecipes'
import React, { useEffect, useState } from 'react'

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

  const recipes = [
    {
      id: 1,
      title: "Carbonara",
      image: "https://tse2.mm.bing.net/th?id=OIP.Z5n2hqYegs1_o4GDHBxRkwHaFj&pid=Api"
    },
    {
      id: 2,
      title: "Tiramisu",
      image: "https://images.coplusk.net/project_images/180886/image/105535_2F2014-11-12-200508-Tiramisu.jpg"
    },
  ]


  return (
    <div className="w-screen h-screen bg-gr-lila-pink">
      <section className="px-7 py-9">
        <h1 className="py-5 font-ultra text-brokenwhite
        text-ptitle leading-7">Nombre usuario</h1>
        <p className="text-regu font-raleway text-darklila">XX recetas</p>
      </section>
      <section>
        <UserRecipes
          recipes={recipes}/>
      </section>
    </div>
  )
}

export default UserPage
