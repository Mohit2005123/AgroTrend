import express from 'express';
import dotenv from 'dotenv';
import authRoutes from './routes/auth.routes.js';
import connectToMongoDb from './db/connectMongo.js';
import newsRoutes from './routes/news.routes.js';
import marketRoutes from './routes/market.routes.js';
import cookieParser from 'cookie-parser';
import path from 'path';
dotenv.config();
const app= express();
const __dirname= path.resolve();
const PORT= process.env.PORT || 3000;
app.use(express.json());
app.use(cookieParser());
app.use('/api/auth', authRoutes);
app.use('/api/news', newsRoutes );
app.use('/api/marketdata', marketRoutes);
app.use(express.static(path.join(__dirname, '/frontend/dist')));
app.get('*', (req, res)=>{
    res.sendFile(path.join(__dirname, 'frontend', 'dist', 'index.html'));
});
app.listen(PORT, ()=>{
    connectToMongoDb();
    console.log(`Server is running on port ${PORT}`);
});