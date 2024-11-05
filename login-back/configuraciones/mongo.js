import mongoose from 'mongoose';

const db_conexion = async () => {
    try 
    {
        const conn = await mongoose.connect(process.env.MONGO_URI);
        console.log("Connection established");
    } catch (err) 
    {
        console.log("No connection with DB");
    }
};

export default db_conexion; 
