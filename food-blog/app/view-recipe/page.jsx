'use client'
import { useState, useEffect } from 'react'
import { useSearchParams } from 'next/navigation'

const ViewRecipe = () => {
const searchParams = useSearchParams();
let searchId = searchParams.get('id');
const [recipe, setRecipe] = useState([]);
const [ingredient, setIngredient] = useState([]);
const [method, setMethod] = useState([]);

  useEffect(() => {
    const fetchRecipes = async () => {
        const response = await fetch(`/api/recipes/${searchId}`) 
        const data = await response.json();
        setRecipe(data);
        setIngredient(data.ingredient);
        setMethod(data.method); //created another useState and used the map method to iterate over these arrays 
      }
      fetchRecipes();
    },[])
    
    return (
      <div>
  <h1>{recipe.title}</h1>    
  <p>{recipe.desc}</p>
  <img src={recipe.image} className="h-72 w-96" alt="picture of food" />

  <h1>Ingredients</h1>
    {ingredient.map(function(value, index){
      return <li key={index}>{value}</li>
    })}

  <h1>Method</h1>
    {method.map(function(value, index){
      return <li key={index}>{value}</li>
    })}
  </div>
  )
}

export default ViewRecipe

// WHen the page renders (UseEffect) fetch data from /api/recipes
//then do this again but need to use the data to get the recipe._id 
// when view recipe is clicked - get object id from the chposen recipe 
//use this information to transfer to a page that ha been vlicked 