import mongoose from 'mongoose';
import dotenv from 'dotenv';
dotenv.config();
const connectToMongoDb= async ()=>{
    try{
        await mongoose.connect(process.env.MONGO_DB_URL);
        console.log('Connected to db');
    }
    catch(err){
        console.log('Error connecting to db');
    }
}
export default connectToMongoDb;