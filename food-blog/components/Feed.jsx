'use client'
import { useState, useEffect } from 'react'
import RecipeCard from '@components/RecipeCard'

const RecipeCardList = ({ data }) => {
    return (
      <div className='flex flex-row flex-wrap justify-center align-middle'>
        {data.map((recipe => (
          <RecipeCard
          key={recipe._id}
          data={recipe}
          />
        )))}
      </div>
    )
  }

const Feed = () => {
    const [recipe, setRecipe] =useState([])

    useEffect(() => {
        const fetchRecipes = async () => {
          const response = await fetch('/api/recipes');
          const data = await response.json();
            
          setRecipe(data);
      }
      fetchRecipes();
      }, []);

  return (
    <div>
        <RecipeCardList
        data={recipe}
        />
    </div>
  )
}

export default Feed