'use client'

// import { useEffect, useState } from "react"
import React from 'react'

const ViewRecipe = () => {

//   const [recipes, addRecipes] = useState([]);

  // useEffect(() => {
  //   const fetchRecipes = async () => {
  //       const response = await fetch(`/api/recipes/`) 
  //       console.log(response)
  //   }
  //   fetchRecipes();
  // }, [])

  return (
    <div>ViewRecipe</div>
  )
}

export default ViewRecipe

// WHen the page renders (UseEffect) fetch data from /api/recipes
//then do this again but need to use the data to get the recipe._id 
// when view recipe is clicked - get object id from the chposen recipe 
//use this information to transfer to a page that ha been vlicked 