'use client'
import React, { useEffect, useState, useCallback } from 'react';
import Nav from '../../components/Nav';
import Footer from '../../components/Footer';
import { useSession } from 'next-auth/react';
import RecipeCardList from '../../components/recipes/RecipeCardList';
import CardSkeleton from '../../components/skeletons/RecipeCardSkeleton';


const Saved = () => {
  const { data: session, status } = useSession();
  const userId = session?.user.id;
  const [recipe, setRecipe] = useState([]);
  const [loading, setloading] = useState(true);

  const loadSavedData = useCallback(async () => {
    try {
      setloading(true)
      const recipeIdArr = JSON.parse(localStorage.getItem(userId));

 if (!Array.isArray(recipeIdArr) || recipeIdArr.length === 0) {
      setRecipe([]); // Set empty array to avoid stale state
      return;
    }

      const fetchRecipes = async (dataId) => {
        const response = await fetch(`/api/recipes/${dataId}`);
        return response.json();
      };

      const recipePromises = recipeIdArr.map(dataId => fetchRecipes(dataId));
      const recipes = await Promise.all(recipePromises);
      setRecipe(recipes);
    } catch (error) {
      console.error('Error loading saved recipes:', error);
      setRecipe([]); // Safe fallback
    }finally {
    setloading(false); // Always stop loading
  }
  }, [userId]);
  
  useEffect(() => {
    if (userId) {
      loadSavedData();
    }
  }, [loadSavedData, userId]);

  if(loading == true){
    return(
      <div>
      <Nav/>
      <h1 className='page-heading'>Saved Recipes</h1>
      <div className='flex flex-wrap justify-center'>
        <CardSkeleton/>
        <CardSkeleton/>
        <CardSkeleton/>
      </div>
      </div>
    )
  }
  

  return (
    <div>
      <Nav />
      <h1 className='page-heading'>Saved Recipes</h1>
      <RecipeCardList data={recipe}/>
      <Footer/>
    </div>
  );
};

export default Saved;
