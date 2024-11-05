import mongoose from "mongoose";

// declaramos el esquema (estructura)
const UserScheme = new mongoose.Schema({
    // un usuario se compone de su email (único) y contraseña
    email: { type: String, unique: true, required: true },
    password: { type: String, required: true }
});

// exportamos la colección usuarios
export default mongoose.model("Usuario", UserScheme);