'use client'
import { useState, useEffect } from 'react'
import RecipeCard from '@components/RecipeCard'
import { signIn, useSession, getProviders } from 'next-auth/react';


const RecipeCardList = ({ data }) => {
  return (
    <div className='flex flex-row justify-center flex-wrap'>
      {data.map((recipe) => (
          <RecipeCard
            key={recipe._id}
            data={recipe}
          />
      ))}
    </div>
  )
}

const Feed = () => {
  const { data: session, status } = useSession();
  const [recipes, setRecipes] = useState([]);
  const [providers, setProviders] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchRecipes = async () => {
      const response = await fetch('/api/recipes');
      const data = await response.json();      
      setRecipes(data);
      setLoading(false);
    }

    const setUpProviders = async () => {
      const response = await getProviders();
      setProviders(response);
    };

    setUpProviders();
    fetchRecipes();
  }, []);
  


  if (status === 'loading' || loading) {
    return <div>Loading...</div>;
  }

  if(!session){
    const login = providers && Object.values(providers).map((provider) => (
      <button
        type="button"
        key={provider.name}
        onClick={() => signIn(provider.id)}
        className="text-blue-500 underline"
      >
        Login
      </button>
    ))
    return (
      <div className='relative'>
      {!session?.user && (
        <div className='text-center my-4'>
          <p>Please {login} to view the recipes... </p>
        </div>
      )}
    </div>
    )
  }

  return (
    <div className='relative'>
      <RecipeCardList
        data={recipes}
      />
    </div>
  )
}

export default Feed;

// Desktop View: 
  // first 3 recipes display 
  // opacity goes from 60 to 95 from left to right respectivley 
  // Text on top saying 'Please Login to view the recipes...'
  //Have 'Login' text be clickable to login 

// Mobile view:
  // display 1 recipe 
  // opacity from 60 to 95 from top to bottom respectivly
  // Text on top saying 'Please Login to view the recipes...'
  //Have 'Login' text be clickable to login 


//When your not logged in Display recipes in a hidden format 
//When you have no saved recipes prompt user to view recipes 
//Change save button to be more bright as its on dark card. (yellow star??)
//Change photos to real pictures of my cooking 
//Change fonts  
//Add more recipes
//Fix about us button on different pages
//Add time to cook recipe 
//add save on view recipe page 
//Add date added or gf rating 
//Make saved/login/logout look clickable with hover 
//Add a hover/focus affect for mobile nav bar
//When you click away from mobile nav bar is dissapears 
//Add a loading state for the page saved-recipe
//Source isnt working for Originals
//When checkbox is ticked save on refresh 
//change select all to clear all when all boxes are ticked or make seperate button 
//add scrolling animation 
//sm: checkboxes need to be the same as bigger screens 
// card size for view recipe -- make a bit smaller? 

//Change checkbox size and look
//Add a loading state for view recipe. Skeleton??
