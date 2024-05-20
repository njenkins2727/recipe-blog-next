'use client'
import React, { useEffect, useState, useCallback } from 'react'
import Nav from '../../components/Nav'
import Footer from '../../components/Footer'
import { useSession } from "next-auth/react"
import RecipeCard from '../../components/RecipeCard'

// useState called insital state first run which returns said initial state to the RecipeCard component which needs to render the data. 

const Saved = () => {
  const { data: session } = useSession();
  const userId = session?.user.id
  const [recipe, setRecipe] = useState([]); //initial state is an empty array 

const loadSavedData = useCallback(async () => {
  try {
    let recipeIdArr = JSON.parse(localStorage.getItem(userId));
    // console.log(recipeIdArr); //saved recipes _id
    let arr = [];
    
    recipeIdArr.map(dataId => {
      const fetchRecipes = async () => {
        const response = await fetch(`/api/recipes/${dataId}`);
        const data = await response.json();
        arr.push(data);
        // console.log(data); //sepereate objects of the saved recipes full data -- however, renders twice, back-to-back
      }
      fetchRecipes();
      setRecipe(arr);
    });
    // console.log(arr); // array of obove objects -- loads three times, twice. 
    
    
  } catch (error) {
    console.log('Error on load', error)
  }
}, [userId]);

useEffect(() => {
  loadSavedData();
}, [loadSavedData]);

const RecipeCardList = ({ data }) => {
  console.log(data); //returns empty array twice, then returns full array twice 
  return (
    <div className='flex flex-row flex-wrap'>
      {/* {data.map((recipe => (
        <RecipeCard
        key={recipe._id}
        data={recipe}
        />
      )))}  */}
    </div>
  )
}
  return (
    <div>
    <Nav/>
    <h1>Saved Recipes</h1>

    <RecipeCardList //command fires - but doesnt display on initial render. on refresh there is unexpected json input err. when i leave window and return it re render properly.. (useEffect, useCallback?)
    data={recipe}
    />
    
{/* {console.log(recipe)} */}
    <Footer/>
    </div>
  )
}

export default Saved