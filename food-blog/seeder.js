import Recipe from "./models/recipe.js"
import recipeData from "./seed/recipeSeed.js"
import mongoose from "mongoose";
import dotenv from 'dotenv';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

dotenv.config({
    path: __dirname + '/.env',
});

// 1. Connect to db 
mongoose.connect(process.env.MONGODB_URI, {
    dbName: 'onebusyweek_data',
    useNewUrlParser: true,
    useUnifiedTopology: true, 
})
.then(() => console.log('DB connected'))
.catch((err) => console.log("error", err));

// 2. import data 

const importData = async () => {
    try {
        await Recipe.deleteMany();
        await Recipe.insertMany(recipeData)
        console.log('Data Imported! YESS!');
        process.exit(0);
    } catch (error) {
        console.log('Data Not Imported');
        process.exit(1);
    }
}

const destroyData = async () => {
    try {
        await Recipe.deleteMany();
        console.log('Data Destroyed!');
        process.exit(0);
    } catch (error) {
        console.log('Data Not Destoyed');
        process.exit(1);
    }
}

if(process.argv[2] == '-d') destroyData();
else importData();
importData();