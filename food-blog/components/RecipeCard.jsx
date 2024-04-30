import React from 'react'

import { useRouter } from 'next/navigation';


const RecipeCard = ({ data }) => {
  const router = useRouter()

 const ViewRecipe = async () => { //trying to make this async function, otherwise viewrecipe() activates as soon as the recipes load .
  let promise = new Promise((resolve, reject) => {
    router.push(`/view-recipe?id=${data._id}`)  
  })
  let outcome = await promise 
  
  return outcome;
}

  return (    
      <div className="card card-compact w-96 bg-stone-800 shadow-xl mx-6 my-4">
        <figure><img src={data.image} className="w-screen h-60 object-cover" alt="picture of food" /></figure>
        <div className="card-body">
          <h2 className="card-title">{data.title}</h2>
          <p>{data.desc}</p>
            <div className="card-actions justify-end">
            <button onClick={ViewRecipe} className="btn btn-primary">View Recipe</button>
            <button className="btn btn-primary">Save Recipe</button>
            </div>
        </div>
      </div>
  )
}

export default RecipeCard