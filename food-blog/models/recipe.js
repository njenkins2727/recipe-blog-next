import { Schema, model } from "mongoose";
const RecipeSchema = new Schema({
    title:{
        type: String,
    },
    desc:{
        type: String,
    },
    image:{
        type: String,      
    },
    ingredients:{
        type: [String], 
    },
    method:{
        type: [String],
    },
});
const Recipe =  model('Recipe', RecipeSchema);
export default Recipe;