import express from 'express';
import dotenv from 'dotenv';
import authRoutes from './routes/auth.routes.js';
import connectToMongoDb from './db/connectMongo.js';
import newsRoutes from './routes/news.routes.js';
import marketRoutes from './routes/market.routes.js';
dotenv.config();
const app= express();

const PORT= process.env.PORT || 3000;
app.use(express.json());
app.use('/api/auth', authRoutes);
app.use('/api/news', newsRoutes );
app.use('/api/marketdata', marketRoutes);
app.listen(PORT, ()=>{
    connectToMongoDb();
    console.log(`Server is running on port ${PORT}`);
});