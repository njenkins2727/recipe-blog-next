'use client'
import { useState, useEffect } from 'react'
import RecipeCardList from '../../components/recipes/RecipeCardList' 
import Nav from '../../components/Nav'
import Footer from '../../components/Footer'

const Allrecipes = () => {

  const [recipes, setRecipes] = useState([]);

  useEffect(() => {
    const fetchRecipes = async () => {
      const response = await fetch('/api/recipes');
      const data = await response.json();      
      setRecipes(data);
    }

    fetchRecipes();
  }, []);
  


  return (
    <div>
        <Nav/>
      <h1 className='page-heading'>All Recipes</h1>
      <RecipeCardList data={recipes}/>
      <Footer/>
    </div>
  )
}




export default Allrecipes;
