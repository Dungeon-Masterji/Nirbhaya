import mongoose from "mongoose";

const UserSchema = new mongoose.Schema({
    name: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    contactNumber: { type: String, required: true },
    password: { type: String, required: true }, // Store hashed password in production
}, { timestamps: true });

const User = mongoose.model("User", UserSchema);
export default User;
