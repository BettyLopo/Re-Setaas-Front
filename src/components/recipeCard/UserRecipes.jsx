import React from 'react'
import RecipeCard from './RecipeCard'
import UserControl from '../buttons/user/UserControl'

const UserRecipes = ({recipes}) => {
  return (
    <div className="grid ">
        <UserControl />
        {recipes.map((recipe, index) => {
            <RecipeCard
                key={index}
                id={recipe.id}
                image={recipe.image}
            />
        })}
        
    </div>
  )
}

export default UserRecipes
