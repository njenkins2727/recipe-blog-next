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

