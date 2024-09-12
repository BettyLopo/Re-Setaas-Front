import RecipeCard from './RecipeCard';
import { Carousel, CarouselContent, CarouselItem } from '../ui/carousel';



const CarouselRecipes = ({ recipes, isLoggedIn}) => {

  return (
    <div >
        <Carousel 
            orientation="vertical"
            className="w-auto"
            opts={{
                align: "start",
                loop: true,
        }}
        >
          <CarouselContent className="mt-5 h-[30rem]">
              {recipes.map((recipe, index) => (
                  <CarouselItem  key={index} className="p-2">
                        <RecipeCard
                          id={recipe.id}
                          recipe={recipe.title}
                          time={recipe.duration}
                          image={recipe.image}
                          user={recipe.user.username} 
                          category={recipe.categoryName}
                          isLoggedIn={isLoggedIn}
                          />
                  </CarouselItem>
                ))}
          </CarouselContent>
        </Carousel>
    </div>
  )
}

export default CarouselRecipes
