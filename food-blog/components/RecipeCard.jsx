'use client'
import { useState, useEffect, useCallback } from 'react';
import { useRouter } from 'next/navigation';
import { useSession } from "next-auth/react"
import { jsx } from 'react/jsx-runtime';

const RecipeCard = ({ data }) => {
  const router = useRouter()
  const { data: session } = useSession();
  const [saved, setSaved] = useState([]);
  const userId = session?.user.id
  let dataIdArr = [];
  
  // creating Callback function to use for when you load into the page 
  const loadSavedData = useCallback(async () => {
    try {
      // If theres no item in localStorage, set current dataIdArr
      if(!localStorage.getItem(userId)){
        localStorage.setItem(userId, dataIdArr);
      }
      // If there is items in users localstorage, make setSaved as true for all items saved in localstorage.  
      else{ 
      dataIdArr = await JSON.parse(localStorage.getItem(userId)); 
      dataIdArr.includes(data._id) ? setSaved(true) : setSaved(false);
      }
    } catch (error) {
      console.log('Error on load', error)
    }
  }, [dataIdArr]);

  useEffect(() => {
    loadSavedData();
  }, [loadSavedData]);

  const AddSave = async () => {

    //Get dataIdArr to return empty array for below items to actually be able to add to array 
    dataIdArr = JSON.parse(localStorage.getItem(userId) || '[]'); 
    // When data Id Arr doesnt include recipe data, add the recipe id to the data Id Arr and setSaved as true to fill saved icon. 
    if(!dataIdArr.includes(data._id)){
      dataIdArr.push(data._id);
        setSaved(true);
      } 
    // When data Id Arr does include recipe id, find the index of this recipe id and delete from data array 
    else if(dataIdArr.includes(data._id)){
      // Find index of item you want to delete 
        let dataIdIndex = dataIdArr.indexOf(data._id);
      //delete item from array 
        dataIdArr.splice(dataIdIndex, 1);
        setSaved(false);
      }
    // Save data array to local storage for saved-recipe page to display. 
  localStorage.setItem(userId, JSON.stringify(dataIdArr)); 
}

const ViewRecipe = async () => { 
  let promise = new Promise(() => {
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
          <p className='line-clamp-3'>{data.desc}</p>
            <div className="card-actions justify-end">
           <button onClick={AddSave}><svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="100" height="100" viewBox="0 0 50 50" className='size-8'>
            {saved == true ? 
            <path d="M 37 48 C 36.824219 48 36.652344 47.953125 36.496094 47.863281 L 25 41.15625 L 13.503906 47.863281 C 13.195313 48.042969 12.8125 48.046875 12.503906 47.867188 C 12.191406 47.6875 12 47.359375 12 47 L 12 3 C 12 2.449219 12.449219 2 13 2 L 37 2 C 37.554688 2 38 2.449219 38 3 L 38 47 C 38 47.359375 37.808594 47.6875 37.496094 47.867188 C 37.34375 47.957031 37.171875 48 37 48 Z"></path> 
            : 
            <path d="M 12.8125 2 C 12.335938 2.089844 11.992188 2.511719 12 3 L 12 47 C 11.996094 47.359375 12.1875 47.691406 12.496094 47.871094 C 12.804688 48.054688 13.1875 48.054688 13.5 47.875 L 25 41.15625 L 36.5 47.875 C 36.8125 48.054688 37.195313 48.054688 37.503906 47.871094 C 37.8125 47.691406 38.003906 47.359375 38 47 L 38 3 C 38 2.449219 37.550781 2 37 2 L 13 2 C 12.96875 2 12.9375 2 12.90625 2 C 12.875 2 12.84375 2 12.8125 2 Z M 14 4 L 36 4 L 36 45.25 L 25.5 39.125 C 25.191406 38.945313 24.808594 38.945313 24.5 39.125 L 14 45.25 Z"></path>
            }
            </svg></button>
            <button onClick={ViewRecipe} className="btn btn-primary">View Recipe</button>
            </div>
        </div>
      </div>
  )
}

export default RecipeCard