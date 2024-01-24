import mongoose, { Schema } from "mongoose";
import bcrypt from "bcrypt";
const userSchema = new Schema({
    name: String,
    email: { type: String, unique: true },
    password: { type: String, min: [6, "must be at least 6 characters"] },
});

userSchema.methods.crypto = async (password) => {
    const salt = await bcrypt.genSalt(10);
    const hash = await bcrypt.hash(password, salt);
    return hash;
};
userSchema.methods.verify = async (password, elderPassword) => { 
    const result = await bcrypt.compare(password, elderPassword)
    return result;
}

const User = mongoose.model("User", userSchema)

export default User;