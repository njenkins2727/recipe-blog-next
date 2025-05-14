'use client';
import { useState, useEffect } from 'react';
import { useSearchParams } from 'next/navigation';
import { useSession } from 'next-auth/react';
import Footer from '../../components/Footer';
import Nav from '../../components/Nav';
import ViewRecipeSkeleton from '../../components/skeletons/ViewRecipeSkeleton';

const ViewRecipe = () => {
  const searchParams = useSearchParams();
  const { data: status } = useSession();
  let searchId = searchParams.get('id');
  const [recipe, setRecipe] = useState([]);
  const [ingredient, setIngredient] = useState([]);
  const [method, setMethod] = useState([]);
  const [checkedIngredients, setCheckedIngredients] = useState([]);
  const [loading, setloading] = useState(true);

  useEffect(() => { // testing loading state
    setTimeout(() => {
      setloading(false);
    }, [1000])
    
  })

  useEffect(() => {
    const fetchRecipes = async () => {
      const response = await fetch(`/api/recipes/${searchId}`);
      const data = await response.json();
      setRecipe(data);
      setIngredient(data.ingredient);
      setMethod(data.method);
    };
    fetchRecipes();
  }, []);

  const checkLink = (source) => {
    return source == '' ? 'Original' : source;
  };

  const handleCheckboxChange = (index) => {
    setCheckedIngredients((prevCheckedIngredients) => {
      const newCheckedIngredients = [...prevCheckedIngredients];
      if (newCheckedIngredients.includes(index)) {
        newCheckedIngredients.splice(newCheckedIngredients.indexOf(index), 1);
      } else {
        newCheckedIngredients.push(index);
      }
      return newCheckedIngredients;
    });
  };

  const handleSelectAll = () => {
    if (checkedIngredients.length === ingredient.length) {
      setCheckedIngredients([]);
    } else {
      setCheckedIngredients(ingredient.map((_, index) => index));
    }
  };

  if(loading == true){
    return (
      <div>
        <Nav/>
        <ViewRecipeSkeleton/>
      </div>
    )
  }

  return (
    <div>
      <Nav/>
      <div className="bg-secondary text-light rounded-lg shadow-md p-6 mt-28 max-w-md mx-auto md:max-w-2xl lg:max-w-3xl xl:max-w-4xl mb-10">
        {/* Title */}
        <h1 className="text-3xl font-raleway font-bold mb-4">{recipe.title}</h1>

        {/* Description */}
        <p className="mb-4 font-raleway">{recipe.desc}</p>

        {/* Image */}
        <img src={recipe.image} alt="Recipe Image" className="w-full rounded-md mb-4" />

        {/* Ingredient and Method */}
        <div className="flex flex-wrap px-2">
          <div className="intruction">
            <h2 className="subheading">Ingredients:</h2>
            <ul className="list-none ml-2">
              {ingredient.map((value, index) => (
                <li key={index} className={`mt-3 font-raleway flex items-center ${checkedIngredients.includes(index) ? 'line-through' : ''}`}>
                  <input
                    type="checkbox"
                    className="mr-2 size-4 accent-primary hover:cursor-pointer"
                    checked={checkedIngredients.includes(index)}
                    onChange={() => handleCheckboxChange(index)}
                  />
                  {value}
                </li>
              ))}
            <button
              className="btn bg-primary my-4 text-light rounded hover:cursor-pointer"
              onClick={handleSelectAll}
            >
              Select All
            </button>
            </ul>
          </div>

          <div className="intruction">
            <h2 className="subheading">Method:</h2>
            <ol className="list-decimal ml-6">
              {method.map((value, index) => (
                <li key={index} className="mt-3 font-raleway">
                  {value}
                </li>
              ))}
            </ol>
          </div>
        </div>

        {/* Credit */}
        <div className="text-sm text-gray-500">
          <p>Recipe by: {recipe.creator}</p>
          <p>
            Source: <a href={recipe.source} className="text-blue-500">{checkLink(recipe.source)}</a>
          </p>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default ViewRecipe;


