import Recipe from "../../../models/recipe";
import { connectToDB } from "../../../utils/database";

export const GET = async (request) => {
  try {
      await connectToDB();

      const recipe = await Recipe.find({})
    
      return new Response(JSON.stringify(recipe), { status: 201 })
  } catch (error){
     return new Response('Failed to fetch all recipe', { status: 500 })
  }
}

