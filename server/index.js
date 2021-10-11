import express, { Router } from "express";
import bodyParser from "body-parser";
import mongoose from "mongoose";
import cors from "cors";

import postRoutes from "./routes/posts.js";

const app = express();

app.use("/posts", postRoutes);
app.use(express.json({ limit: "30mb", extended: true }));
app.use(express.urlencoded({ limit: "30mb", extended: true }));

const CONNECTION_URL =
  "mongodb+srv://JoeyDaems:JoeyDaems123@exprcluster.s5d0g.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";

app.listen(3000, () => {
  console.log(`Server is running on http://localhost:${3000}`);
});
