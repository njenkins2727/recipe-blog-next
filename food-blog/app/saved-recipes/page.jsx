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

  const loadSavedData = useCallback(async () => {
    try {
      const recipeIdArr = await JSON.parse(localStorage.getItem(userId));

      if (!recipeIdArr) return;

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
    }
  }, [userId]);

  useEffect(() => {
    if (userId) {
      loadSavedData();
    }
  }, [loadSavedData, userId]);

  if(status === 'loading'){
    return(
      <div>
        <div className="bg-secondary rounded-lg shadow-md p-6 mt-6 max-w-full mx-6 mb-10 animate-pulse flex flex-row justify-between">
          <div className=" p-6 xsm:w-56 w-28 h-6 bg-light flex justify-center rounded"></div>
          <div className=" p-6 btn-circle bg-light xsm:w-56 xsm:h-6 xsm:flex xsm:justify-center xsm:rounded xsm:m-0"></div>
        </div>
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
