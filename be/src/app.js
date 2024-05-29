import cors from "cors";
import dotenv from "dotenv";
import express from "express";
import morgan from "morgan";

import { connectDB } from "./config/db";
import productRouter from "./routers/product";
const app = express();
dotenv.config();
// middleware
app.use(express.json());
app.use(cors());
app.use(morgan("tiny"));

// connect db
connectDB(process.env.DB_URI);

// routers
app.use("/api/v1", productRouter);

export const viteNodeApp = app;
