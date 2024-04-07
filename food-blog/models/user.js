import { Schema, models, model } from "mongoose";
const UserSchema = new Schema({
    email:{
        type: String,
        unique: [true, 'Email already exist'],
        required: [true, 'Email is required'],
    },
    name:{
        type: String, 
        required: [true, 'Name is required'],
        match: [/^(?=.{8,20}$)(?![_.])(?!.*[_.]{2})[a-zA-Z0-9._]+(?<![_.])$/, "Name invalid, it should contain 8-20 alphanumeric letters and be unique!"],
    },
    image:{
        type:String,      
    }
});
const User = models.User || model('User', UserSchema);
export default User;