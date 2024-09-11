import React, { useEffect, useState } from 'react'
import RecipeCard from './RecipeCard';
import { Carousel, CarouselContent, CarouselItem } from '../ui/carousel';
import useEmblaCarousel from 'embla-carousel-react';



const CarouselRecipes = ({ recipes, isLoggedIn}) => {
  const [emblaRef, emblaApi] = useEmblaCarousel({
    loop: this,
    align: 'start',
  });
  const [activeIndex, setActiveIndex] = useState(0);


  const onSelect = () => {
    if (!emblaApi) return;
    setActiveIndex(emblaApi.selectedScrollSnap());
  }

  useEffect(() => {
    if (!emblaApi) return;
    emblaApi.on('select', onSelect);
  }, [emblaApi]);

  return (
    <div ref={emblaRef}>
        <Carousel 
            orientation="vertical"
            className="w-auto"
            opts={{
                align: "start",
                loop: true,
        }}
        >
          <CarouselContent className="mt-5 h-[30rem]">
              {recipes && recipes.length > 0 ? (
                recipes.map((recipe, index) => (
                      <CarouselItem  key={index} className={`${index === activeIndex - 1 ? 'previous' : ''} ${index === activeIndex - 1 ? 'active' : ''} p-2`}>
                      <RecipeCard
                        id={recipe.id}
                        recipe={recipe.title}
                        time={recipe.duration}
                        user={recipe.user.username} 
                        category={recipe.categoryName}
                        isLoggedIn={isLoggedIn}
                        />
                  </CarouselItem>
                ))
              ) : (
                <p classNam="font-raleway text-darklila">Cargando recetas</p>
              )}
          </CarouselContent>
        </Carousel>
    </div>
  )
}

export default CarouselRecipes
