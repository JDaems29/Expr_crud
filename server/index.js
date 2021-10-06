import express from "express";
import bodyParser from "body-parser";
import mongoose from "mongoose";
import cors from "cors";

import postRoutes from './routes/posts.js';

const app = express();

app.use('/posts', postRoutes);
app.use(cors());

const CONNECTION_URL = "mongodb+srv://JoeyDaems:JoeyDaems123@exprcluster.s5d0g.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";
const PORT = process.env.PORT || 5000;

mongoose.connect(CONNECTION_URL).then(()=>{console.log(`Server running on ${PORT}`)});