import React from 'react'

const RecipeCard = ({ data }) => {

  return (    
      <div className="card card-compact w-96 bg-stone-800 shadow-xl mx-6">
        <figure><img src={data.image} className="w-screen h-60 object-fill" alt="Shoes" /></figure>
        <div className="card-body">
          <h2 className="card-title">{data.title}</h2>
          <p>{data.desc}</p>
            <div className="card-actions justify-end">
            <button className="btn btn-primary">View Recipe</button>
            <button className="btn btn-primary">Save Recipe</button>
            </div>
        </div>
      </div>
  )
}

export default RecipeCard