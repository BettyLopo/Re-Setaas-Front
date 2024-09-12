import React from 'react'
import UnitRecipeUser from './UnitRecipeUser'

const UserRecipes = ({recipes}) => {
  return (
    <div className="flex flex-col">
        <div className="grid grid-cols-2 justify-center items-center self-center gap-3">
            {recipes.map((recipe, index) => (
            <UnitRecipeUser
                key={index}
                id={recipe.id}
                image={recipe.image}
                recipe={recipe.title}
            />
        ))}
        </div>
     
        
    </div>
  )
}

export default UserRecipes
