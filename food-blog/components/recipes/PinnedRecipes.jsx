'use client'
import { useState, useEffect } from 'react'
import RecipeCard from './RecipeCard';
import { signIn, useSession, getProviders } from 'next-auth/react';
import Link from "next/link";


const RecipeCardList = ({ data }) => {
  return (
    <div className='flex flex-row justify-center flex-wrap'>
      {data.slice(0, 6).map((recipe) => (
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
    return (
      <div className='text-center mb-8 font-raleway font-semibold mt-64 xmd:mt-52 lg:mt-32 xl:mt-16'>
          <p>Please wait... </p>
      </div>
    )
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
        <div className='text-center mb-8 font-raleway font-semibold mt-64 xmd:mt-52 lg:mt-32 xl:mt-16'>
          <p>Please {login} to view all recipes... </p>
        </div>
      )}
    </div>
    )
  }

  return (
    <div className='relative'>
      <h1 className='justify-center flex font-playfair text-primary text-4xl font-bold mb-4 mt-60 lg:mt-32'>Pinned Recipes</h1>
      <RecipeCardList
        data={recipes}
      />
      <div className='w-full flex justify-center my-10'>
      <Link href='/all-recipes' className="btn bg-primary text-light">
      <button>See all recipes</button>
      </Link>
      </div>
    </div>
  )
}

export default Feed;

