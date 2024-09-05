import React from 'react'
import RecipeCard from '../components/recipeCard/RecipeCard'

const Home = () => {
  return (
    <div className="flex flex-col justify-center items-center bg-gr-pink-pink w-screen h-screen">
      <RecipeCard recipe="Espárragos al horno" time="1h 30min" user="pepitogrillo" category="pasta"/>
    </div>
  )
}

export default Home
