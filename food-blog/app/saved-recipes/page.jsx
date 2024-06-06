'use client'
import React, { useEffect, useState, useCallback } from 'react';
import Nav from '../../components/Nav';
import Footer from '../../components/Footer';
import { useSession } from 'next-auth/react';
import RecipeCard from '../../components/RecipeCard';

const Saved = () => {
  const { data: session } = useSession();
  const userId = session?.user.id;
  const [recipe, setRecipe] = useState([]);

  const loadSavedData = useCallback(async () => {
    try {
      const recipeIdArr = JSON.parse(localStorage.getItem(userId));
      if (!recipeIdArr) return;

      const fetchRecipes = async (dataId) => {
        const response = await fetch(`/api/recipes/${dataId}`);
        return response.json();
      };

      const recipePromises = recipeIdArr.map(dataId => fetchRecipes(dataId));
      const recipes = await Promise.all(recipePromises);
      setRecipe(recipes);
      
    } catch (error) {
      console.log('Error on load', error);
    }
  }, [userId]);
  
  useEffect(() => {
    if (userId) {
      loadSavedData();
    }
  }, [loadSavedData, userId]);

  const RecipeCardList = ({ data }) => {
    return (
      <div className='flex flex-row flex-wrap justify-center'>
        {data.map(recipe => (
          <RecipeCard
            key={recipe._id}
            data={recipe}
          />
        ))}
      </div>
    );
  };

  return (
    <div>
      <Nav />
      <h1 className='justify-center flex font-playfair text-3xl bold mt-12'>Saved Recipes</h1>
      <RecipeCardList data={recipe}/>
      <Footer/>
    </div>
  );
};

export default Saved;
