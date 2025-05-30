'use client'
import RecipeCard from "./RecipeCard";

const RecipeCardList = ({ data }) => {
    return (
      <div className='flex flex-row flex-wrap justify-center mb-16'>
        {data.map(recipe => (
          <RecipeCard
            key={recipe._id}
            data={recipe}
          />
        ))}
      </div>
    );
  };

export default RecipeCardList