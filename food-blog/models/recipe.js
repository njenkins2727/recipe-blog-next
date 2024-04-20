import { Schema, model, models} from "mongoose";
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
    ingredient:{
        type: [String], 
    },
    method:{
        type: [String],
    },
});
const Recipe = models.Recipe || model('Recipe', RecipeSchema);

export default Recipe;