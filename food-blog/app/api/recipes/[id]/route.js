import Recipe from "../../../../models/recipe";

//Get (read)
export const GET = async (request, { params }) => {
    try {
        await connectToDB();

        const recipe = await Recipe.findById(params.id).populate('creator');
        
        if(!recipe)return new Response('RECIPE NOT FOUND', { status: 404 })

       return new Response(JSON.stringify(recipe), { status: 201 })
    } catch (error){
       return new Response('Failed to fetch all prompts', { status: 500 })
    }
}