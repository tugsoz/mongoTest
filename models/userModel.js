import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    name: {type: 'string', required: [true, "Name is required!"], trim: true},
    email: {type: 'string', required: [true, "E-mail is required!"], trim: true, unique: true},
    password: {type: 'string', required: [true, "Password is required!"]},
    },
    {timestamps:true}
);

export const userModel = mongoose.model("User", userSchema);