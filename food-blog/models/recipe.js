import mongoose from 'mongoose';
const { Schema, models, model } = mongoose;

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
    creator:{
        type:[String],
    },
    source:{
        type: [String],
    }
});
const Recipe = models.Recipe || model('Recipe', RecipeSchema);

export default Recipe;