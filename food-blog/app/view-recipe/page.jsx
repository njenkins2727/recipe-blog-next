'use client'
import { useState, useEffect } from 'react'
import { useSearchParams } from 'next/navigation'
import Footer from '../../components/Footer';
import Nav from '../../components/Nav';

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
    
  return ( //Need to add a saved button, fix mobile Sm view, (center items / change nav to hamburger button?). could add time (prep and cook), could add gf rating, change list decorations numbers and dot points. 
<div>
  <Nav/>

<div class="bg-stone-800 rounded-lg shadow-md p-6 max-w-md mx-auto md:max-w-lg lg:max-w-2xl xl:max-w-3xl mb-10">

{/* Title */}
<h1 class="text-3xl font-bold mb-4">{recipe.title}</h1>

{/* Image */}
<img src={recipe.image} alt="Recipe Image" class="w-full rounded-md mb-4"/>

{/* Ingredient and Method */}
  <div class="flex flex-wrap">
    <div class="w-full md:w-1/2">
      <h2 class="text-xl font-semibold mb-2">Ingredients:</h2>
      <ul class="list-disc ml-6 mb-4">
      {ingredient.map(function(value, index){
  return <li key={index} className='mt-3 font-inter'>{value}</li>
  })}
      </ul>
    </div>

    <div class="w-full md:w-1/2">
      <h2 class="text-xl font-semibold mb-2">Method:</h2>
      <ol class="list-decimal ml-6 mb-4">
      {method.map(function(value, index){
  return <li key={index} className='mt-3 font-inter'>{value}</li>
  })}
      </ol>
    </div>
  </div>

{/* Credit */}
  <div class="text-sm text-gray-500">
    <p>Recipe by: Your Name</p>
    <p>Source: <a href="source_url" class="text-blue-500">Source Title</a></p>
  </div>
</div>

  <Footer/>
</div>
  )
}

export default ViewRecipe