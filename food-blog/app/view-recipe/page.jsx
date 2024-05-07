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
    
  return (
<div>
  <Nav/>
    <div className='bg-stone-800 h-fit w-9/12 ml-auto mr-auto my-12 rounded-lg'>

      <div className='flex flex-row p-4'>
      <img src={recipe.image} className='h-48 w-fit rounded-3xl' alt="picture of food" />   
        <div className='flex flex-col pl-4'>
          <h1 className='font-playfair text-3xl'>{recipe.title}</h1> 
          <p className='font-inter pt-1'>{recipe.desc}</p>
        </div>
      </div>

      <div className='flex flex-row mx-10 mt-2 gap-20 pb-4'>

        <div className='flex flex-col w-fit'>
          <h1 className='font-playfair text-2xl'>Ingredients</h1>
            {ingredient.map(function(value, index){
            return <li key={index} className='font-inter'>{value}</li>
            })}
        </div>

        <div className='flex flex-col'>
          <h1 className='font-playfair text-2xl'>Method</h1>
            {method.map(function(value, index){
            return <li key={index} className='font-inter'>{value}</li>
            })}
        </div>
      </div>
    </div>

  <Footer/>
</div>
  )
}

export default ViewRecipe