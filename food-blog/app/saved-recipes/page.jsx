'use client'
import React, { useEffect, useState, useCallback } from 'react'
import Nav from '../../components/Nav'
import Footer from '../../components/Footer'
import { useSession } from "next-auth/react"
import RecipeCard from '../../components/RecipeCard'


const Saved = () => {
  const { data: session } = useSession();
  const userId = session?.user.id
  const [recipe, setRecipe] = useState([]);

// Get saved recipe Ids from localStorage (saved in array of userId)
// fetch Recipes by Id
// make function of list of recipe cards that similar to feed.jsx 
// display looped recipes through saved-recipes 
//works

const loadSavedData = useCallback(async () => {
  try {
    let recipeIdArr = JSON.parse(localStorage.getItem(userId));
    let arr = [];
    
    recipeIdArr.map(dataId => {
      const fetchRecipes = async () => {
        const response = await fetch(`/api/recipes/${dataId}`);
        const data = await response.json();
        arr.push(data);
      }
      fetchRecipes();
      setRecipe(arr);
    });
    
    
  } catch (error) {
    console.log('Error on load', error)
  }
}, [userId]);

useEffect(() => {
  loadSavedData();
}, [loadSavedData]);

const RecipeCardList = ({ data }) => {
  return (
    <div className='flex flex-row flex-wrap'>
      {data.map((recipe => (
        <RecipeCard
        key={recipe._id}
        data={recipe}
        />
      )))} 
    </div>
  )
}
  return (
    <div>
    <Nav/>
    <h1>Saved Recipes</h1>

    <RecipeCardList //command fires - but doesnt display. Invisible? 
    data={recipe}
    />
    

    <Footer/>
    </div>
  )
}

export default Saved