import express from 'express';
import dotenv from 'dotenv';
import authRoutes from './routes/auth.routes.js';
import connectToMongoDb from './db/connectMongo.js';
dotenv.config();
const app= express();

const PORT= process.env.PORT || 3000;
app.use(express.json());
app.use('/api/auth', authRoutes);

app.listen(PORT, ()=>{
    connectToMongoDb();
    console.log(`Server is running on port ${PORT}`);
});