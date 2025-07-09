'use client'
import { useState, useEffect } from 'react'
import RecipeCardList from '../../components/recipes/RecipeCardList' 
import Nav from '../../components/Nav'
import Footer from '../../components/Footer'

import { useSession } from 'next-auth/react'
import RecipeCardSkeleton from '../../components/skeletons/RecipeCardSkeleton'

const Allrecipes = () => {
  const { data: session, status } = useSession();

  const [recipes, setRecipes] = useState([]);

  
  useEffect(() => {
    const fetchRecipes = async () => {
      const response = await fetch('/api/recipes');
      const data = await response.json();      
      setRecipes(data);
    }
    
    fetchRecipes();
  }, []);
  
  if (status === 'loading') {
   // Show a loading state while the session is being fetched
   return (
    <div>
      <div className="bg-secondary rounded-lg shadow-md p-6 mt-6 max-w-full mx-6 mb-10 animate-pulse flex flex-row justify-between">
          <div className=" p-6 xsm:w-56 w-28 h-6 bg-light flex justify-center rounded"></div>
          <div className=" p-6 btn-circle bg-light xsm:w-56 xsm:h-6 xsm:flex xsm:justify-center xsm:rounded xsm:m-0"></div>
        </div>
      <div className='animate-pulse p-5 mt-20 max-w-96 bg-light block ml-auto mr-auto rounded-lg'></div>
      <div className='flex flex-row justify-center mt-20'>
        <RecipeCardSkeleton/>
      </div>
    </div>
   )
 }


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
